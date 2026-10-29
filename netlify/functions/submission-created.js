// Netlify izsauc šo funkciju automātiski pēc katras pārbaudītas formas iesniegšanas.
// 1) Klientam nosūta apstiprinājumu, ka pieteikums saņemts.
// 2) Uz info@ nosūta pārskatāmu pieteikuma kopsavilkumu.
// SMTP dati glabājas Netlify vides mainīgajos: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO.
const nodemailer = require("nodemailer");

const LABELS = {
  vards: "Vārds", epasts: "E-pasts", talrunis: "Tālrunis", tips: "Tips",
  u_nosaukums: "Uzņēmums", u_regnr: "Reģ. Nr.", u_regions: "Reģions", u_nozare: "Nozare",
  u_darbinieki: "Darbinieki", u_apgrozijums: "Apgrozījums", u_projekts: "Projekts",
  u_summa: "Investīcijas apjoms", u_kad: "Kad sākt", u_programma: "Programma",
  u_kredits: "Kredīts", u_pasu: "Pašu līdzekļi",
  p_vieta: "Īpašuma vieta", p_veids: "Mājokļa veids", p_ipasnieks: "Īpašnieks",
  p_deklarets: "Deklarēts", p_ekspluatacija: "Nodota ekspluatācijā", p_goda: "Goda ģimene", p_nopirkts: "Iekārtas nopirktas", p_gads: "Būvniecības gads", p_platiba: "Platība",
  p_apkure: "Apkure", p_kwh: "Patēriņš kWh", p_plani: "Plāni", p_piezimes: "Piezīmes",
  papildus: "Papildu palīdzība", piekrisana: "Piekrišana"
};

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const val = (v) => (Array.isArray(v) ? v.join(", ") : v);

function clientMail(d) {
  const company = d.tips !== "privatpersona";
  const what = company ? (d.u_projekts || "Jūsu projektu") : (val(d.p_plani) || "Jūsu plānus");
  const steps = company
    ? [
        "2 darba dienu laikā nosūtīsim izvērtējumu: kurām programmām projekts atbilst, cik lielu atbalstu var reāli saņemt un kādi ir termiņi.",
        "Ja projekts atbilst, nosūtīsim līgumu. Sagatavošana maksā 590 € (konkursa programmām 990 €) + PVN, un 5 % no piešķirtā atbalsta (+ PVN) – tikai pēc pozitīva lēmuma.",
        "Pieteikuma dokumentus sagatavojam aptuveni 5–10 darba dienu laikā pēc tam, kad saņemti visi dati."
      ]
    : [
        "2 darba dienu laikā nosūtīsim atbildi: kura programma Jums der, cik lielu atbalstu var saņemt un līdz kuram datumam jāpiesakās.",
        "Ja viss der, noslēgsim līgumu un sagatavosim pieteikumu Jūsu vietā. Sagatavošana maksā 99 €, bet 7 % no atbalsta maksājat tikai pēc tā izmaksas. Maksājuma pieprasījumu pēc uzstādīšanas sagatavojam mēs.",
        "Kad saņemsim visus datus, pieteikums būs gatavs aptuveni 3–5 darba dienu laikā."
      ];
  const ask = company
    ? ["pēdējā gada pārskatu vai apgrozījumu un darbinieku skaitu;", "iekārtu vai darbu piedāvājumus (cenu aptaujas, tāmes);", "īsu aprakstu, ko projekts uzņēmumam dos (jauni produkti, eksports, darba vietas)."]
    : ["īpašuma adresi un kadastra numuru;", "uzstādītāja piedāvājumu vai tāmi;", "vai īpašums pieder Jums (vai kopā ar kādu)."];
  const text =
`Labdien!

Paldies par pieteikumu (${what}). Esam to saņēmuši un sākam izvērtēt.

Kas notiks tālāk:
${steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Lai izvērtējums būtu precīzāks, lūdzu, atbildiet uz šo e-pastu un pievienojiet (ja ir pieejams):
${ask.map((s) => "- " + s).join("\n")}

Ja ir jautājumi, droši rakstiet uz šo e-pastu.

Ar cieņu
Grantu Radars
info@granturadars.lv · granturadars.lv`;
  return { subject: "Jūsu pieteikums saņemts – Grantu Radars", text };
}

function internalMail(d) {
  const rows = Object.keys(LABELS)
    .filter((k) => d[k] !== undefined && d[k] !== "")
    .map((k) => `<tr><td style="padding:4px 10px;color:#555">${LABELS[k]}</td><td style="padding:4px 10px">${esc(val(d[k]))}</td></tr>`)
    .join("");
  const who = d.tips === "privatpersona" ? "Privātpersona" : (d.u_nosaukums || "Uzņēmums");
  return {
    subject: `[Pieteikums] ${who} – ${d.vards || ""}`.trim(),
    html: `<p>Jauns pieteikums no granturadars.lv. Klientam automātiski nosūtīts apstiprinājums.</p><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`
  };
}

exports.handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body || "{}");
    console.log("submission-created izsaukta:", payload && payload.form_name, "| SMTP iestatīts:", !!process.env.SMTP_HOST, !!process.env.SMTP_PASS);
    if (!payload || payload.form_name !== "pieteikums") return { statusCode: 200, body: "skip" };
    const d = payload.data || {};
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.log("SMTP nav iestatīts – e-pasti netiek sūtīti");
      return { statusCode: 200, body: "no smtp" };
    }
    const port = Number(SMTP_PORT || 465);
    const t = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    // Sūtītājs vienmēr ir "Grantu Radars <info@...>"; vārdu var mainīt ar MAIL_FROM_NAME.
    const fromAddr = ((MAIL_FROM || "").match(/<([^>]+)>/) || [])[1] || (/@/.test(MAIL_FROM || "") ? MAIL_FROM.trim() : SMTP_USER);
    const from = { name: process.env.MAIL_FROM_NAME || "Grantu Radars", address: fromAddr };
    const to = MAIL_TO || SMTP_USER;

    const jobs = [t.sendMail({ from, to, replyTo: d.epasts || undefined, ...internalMail(d) })];
    if (d.epasts && /@/.test(d.epasts)) jobs.push(t.sendMail({ from, to: d.epasts, replyTo: to, ...clientMail(d) }));
    const res = await Promise.allSettled(jobs);
    res.forEach((r) => r.status === "rejected" && console.error("E-pasts neizdevās:", r.reason && r.reason.message));
    return { statusCode: 200, body: "ok" };
  } catch (e) {
    console.error(e);
    return { statusCode: 200, body: "error" };
  }
};
