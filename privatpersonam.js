/* Grantu Radars – programmas privātpersonām un mājsaimniecībām.
   Lauki kā programmas.js. Filtri f:
     reg: reģioni; maj: mājokļa veids (privatmaja, dzivoklis, nav);
     ipas: ["ja"] ja jābūt īpašniekam; berni: (nav, 1-2, 3plus); par: vismaz viens no (jauns, karavirs);
     plani: vismaz viens no (saule, siltumsuknis, siltinasana, kanalizacija, majoklis)
     piezBerni: piezīme, ja ģimenē 3+ bērni
*/
window.DATI_ATJAUNOTI_PRIV = "28.10.2026";

window.PROGRAMMAS_PRIV = [
  { id:"h01", iest:"Vides investīciju fonds", nos:"Atjaunojamā enerģija mājsaimniecībām (EKII)", statuss:"open", lidz:"2029-12-31",
    summa:"Līdz 70% iekārtas izmaksu (Goda ģimenēm 85%). Saules paneļi ~4 000 €, akumulators 2 500 €, siltumsūknis gaiss-ūdens 3 700/4 700 €",
    termins:"Kamēr ir finansējums, līdz 31.12.2029",
    kam:"Privātmājas īpašniekiem: saules paneļi un akumulatori, siltumsūkņi, granulu katli, saules kolektori. Atbalsts tikai par iekārtu, pieteikums pēc uzstādīšanas. Siltumsūknim jāaizstāj vai jāpapildina esošs fosilā, malkas vai granulu katls.",
    avots:"https://www.kem.gov.lv/lv/atbalsta-programma-atjaunojamo-energoresursu-izmantosanai-majsaimniecibas",
    f:{ maj:["privatmaja"], ipas:["ja"], plani:["saule","siltumsuknis"] },
    piezBerni:"Ar Goda ģimenes apliecību atbalsts ir 85%." },

  { id:"h02", iest:"Vides investīciju fonds", nos:"Saules paneļi un siltumsūkņi daudzdzīvokļu mājām (Modernizācijas fonds)", statuss:"soon",
    summa:"Līdz 70% izmaksu",
    termins:"1. kārta noslēdzās 01.06.2026; nākamā iespējama, ja paliks finansējums",
    kam:"Daudzdzīvokļu māju īpašnieki caur pilnvaroto personu vai apsaimniekotāju. Mājai jābūt vismaz D energoefektivitātes klasē.",
    avots:"https://lvportals.lv/dienaskartiba/388132-uzsakta-pieteikumu-pienemsana-videi-draudzigas-energijas-razosanas-iekartu-iegadei-2026",
    f:{ maj:["dzivoklis"], plani:["saule","siltumsuknis"] } },

  { id:"h03", iest:"ALTUM", nos:"Daudzdzīvokļu māju energoefektivitāte", statuss:"open",
    summa:"Grants daļai renovācijas izmaksu (iepriekšējā programmā 49%) + tehniskā dokumentācija",
    termins:"Jaunās programmas (2021–2027) nosacījumi jāprecizē ALTUM",
    kam:"Daudzdzīvokļu mājas siltināšana un renovācija. Pieteicas māja kopā caur pilnvaroto personu.",
    avots:"https://www.altum.lv/pakalpojumi/iedzivotajiem/daudzdzivoklu-maju-energoefektivitate-2021-2027/",
    f:{ maj:["dzivoklis"], plani:["siltinasana"] } },

  { id:"h04", iest:"Rīgas pašvaldība", nos:"\"Rīga renovē\": tehniskā dokumentācija mājas renovācijai", statuss:"open",
    summa:"Līdz 90%: energosertifikāts un apsekojums līdz 1 200 €, tehniskais projekts līdz 15 000 €",
    termins:"Pieejams, kamēr ir finansējums",
    kam:"Rīgas daudzdzīvokļu mājas (3+ dzīvokļi), nodotas ekspluatācijā līdz 2001. gadam un nav siltinātas pēdējos 10 gados.",
    avots:"https://lvportals.lv/dienaskartiba/390795-rigas-pasvaldiba-vienkarso-atbalsta-sanemsanu-daudzdzivoklu-maju-tehniskas-dokumentacijas-izstradei-2026",
    f:{ reg:["riga"], maj:["dzivoklis"], plani:["siltinasana"] } },

  { id:"h05", iest:"Rīgas pašvaldība", nos:"Līdzfinansējums pieslēgumam pilsētas kanalizācijai", statuss:"open",
    summa:"1 000–2 000 € atkarībā no pieslēguma garuma (dažās apkaimēs līdz 1 800 € + 739 € projektēšanai)",
    termins:"Pieejams; Berģos, Imantā, Beberbeķos, Ziepniekkalnā un Teikā pieslēgums jāizbūvē līdz 31.12.2026",
    kam:"Rīgas privātmāju īpašnieki, kuru ielā jau ir centralizētā kanalizācija. Sāc ar pieteikumu SIA \"Rīgas ūdens\".",
    avots:"https://lvportals.lv/dienaskartiba/389372-bierinu-pleskodales-katlakalna-bisumuizas-un-bolderajas-iedzivotajiem-mainiti-lidzfinansejuma-nosacijumi-pieslegumiem-centralizetajiem-inzeniertikliem-2026",
    f:{ reg:["riga"], maj:["privatmaja"], ipas:["ja"], plani:["kanalizacija"] } },

  { id:"h06", iest:"Pašvaldības", nos:"Pašvaldību līdzfinansējums kanalizācijas un ūdens pieslēgumiem", statuss:"open",
    summa:"Atkarīgs no pašvaldības",
    termins:"Daudzās pašvaldībās pieejams visu gadu, nosacījumi saistošajos noteikumos",
    kam:"Privātmāju īpašnieki ārpus Rīgas. Jautā savā pašvaldībā vai ūdenssaimniecības uzņēmumā.",
    avots:"https://lvportals.lv/dienaskartiba/386612-ridzinieki-arvien-aktivak-izmanto-lidzfinansejumu-kanalizacijas-pieslegumiem-2026",
    f:{ nereg:["riga"], maj:["privatmaja"], ipas:["ja"], plani:["kanalizacija"] } },

  { id:"h07", iest:"ALTUM", nos:"Mājokļa garantija ģimenēm ar bērniem", statuss:"open",
    summa:"Pirmā iemaksa no 5%; garantija līdz 10 000–50 000 € atkarībā no bērnu skaita un vietas",
    termins:"Pieejama caur bankām (2026. g. nosacījumi jāprecizē)",
    kam:"Ģimenes ar bērniem līdz 23 gadiem (arī gaidībās), darījums līdz 300 000 €. Ārpus Rīgas un Pierīgas garantija lielāka.",
    avots:"https://www.em.gov.lv/lv/majoklu-garantija-gimenem-ar-berniem",
    f:{ plani:["majoklis"], berni:["1-2","3plus"] } },

  { id:"h08", iest:"ALTUM", nos:"Grants \"Balsts\" mājokļa iegādei daudzbērnu ģimenēm", statuss:"open",
    summa:"8 000–10 000 € neatmaksājams grants (+2 000 € gandrīz nulles enerģijas ēkai)",
    termins:"Nosacījumi un pieejamība 2026. gadā jāprecizē ALTUM",
    kam:"Ģimenes ar 3+ bērniem vai bērnu ar invaliditāti; ienākumu un īpašuma ierobežojumi.",
    avots:"https://www.seb.lv/info/maja/gimenes-jaunie-specialisti-karaviri-kam-pieejams-valsts-atbalsts-majokla-iegadei",
    f:{ plani:["majoklis"], berni:["3plus"] } },

  { id:"h09", iest:"ALTUM", nos:"Mājokļa garantija jaunajiem speciālistiem", statuss:"open",
    summa:"Pirmā iemaksa no 5%; garantija līdz 20% no kredīta, maks. 50 000 €",
    termins:"Pieejamība 2026. gadā jāprecizē bankā vai ALTUM",
    kam:"18–35 gadus veci cilvēki ar profesionālo vai augstāko izglītību.",
    avots:"https://www.seb.lv/info/maja/gimenes-jaunie-specialisti-karaviri-kam-pieejams-valsts-atbalsts-majokla-iegadei",
    f:{ plani:["majoklis"], par:["jauns"] } },

  { id:"h10", iest:"ALTUM", nos:"Mājokļa garantija Nacionālo bruņoto spēku karavīriem", statuss:"open",
    summa:"Garantija līdz 25% no kredīta, maks. 20 000 €",
    termins:"Pieejama caur bankām",
    kam:"Profesionālā dienesta karavīri; darījums līdz 300 000 €.",
    avots:"https://www.seb.lv/info/maja/gimenes-jaunie-specialisti-karaviri-kam-pieejams-valsts-atbalsts-majokla-iegadei",
    f:{ plani:["majoklis"], par:["karavirs"] } },

  { id:"h11", iest:"ALTUM", nos:"Privātmāju energoefektivitātes programma", statuss:"soon",
    summa:"Atbalsts siltināšanai un elektroenerģijas ražošanai (apmērs jāprecizē)",
    termins:"Notiek kārtās; nākamā kārta jāprecizē ALTUM",
    kam:"Privātmāju īpašnieki, kas siltina māju vai uzstāda saules paneļus.",
    avots:"https://www.altum.lv/sakas-pieteiksanas-privatmaju-energoefektivitates-uzlabosanas-un-elektroenergijas-razosanas-programma/",
    f:{ maj:["privatmaja"], ipas:["ja"], plani:["siltinasana","saule"] } }
];
