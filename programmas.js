/* Grantu Radars – programmu dati kvalifikācijas testam.
   Avots: Grantu platformas štābs (programmu karte). Dati atjaunoti: skat. DATI_ATJAUNOTI.
   Lauki:
     id, nos (nosaukums), iest (iestāde), summa, termins, statuss: open | closing | soon | yearly
     lidz: "GGGG-MM-DD" – pēc šī datuma programma testā vairs netiek rādīta
     kam: īsa piezīme, kam paredzēts
     avots: oficiālā vai ziņu saite
     f: filtri (visi neobligāti)
       reg: reģioni, kuros der (riga, pieriga, vidzeme, kurzeme, zemgale, latgale)
       nereg: reģioni, kuros neder
       izm: uzņēmuma izmēri (mikro, mazs, videjs, liels)
       vecMax: uzņēmuma maksimālais vecums gados
       noz: nozares (lauks, razosana, it, pakalpojumi, turisms, tirdznieciba, cits)
       plani: vajadzīgs vismaz viens no plāniem
       zin: vajadzīgs vismaz viens: prototips, zinatne
       inv: investīcijas apjoms (lt25, 25-250, gt250)
       pier: ["ja"] – tikai pierobežas novadiem (Alūksne, Balvi, Ludza, Krāslava, Augšdaugava)
       regPiez: piezīme konkrētam reģionam
*/
window.DATI_ATJAUNOTI = "28.10.2026";

window.PROGRAMMAS = [
  { id:"p81", iest:"ALTUM", nos:"Bezprocentu aizdevums uzņēmumiem pierobežā", statuss:"open", lidz:"2027-06-30",
    summa:"0% procentu aizdevums (de minimis atbalsts); summa un termiņš jāprecizē ALTUM",
    termins:"Pieteikties līdz 30.06.2027 (jāprecizē ALTUM)",
    kam:"Uzņēmumi, arī lauksaimnieki, Alūksnes, Balvu, Ludzas, Krāslavas un Augšdaugavas novadā. Procentu atlaide samazina uzņēmuma de minimis limitu.",
    avots:"https://www.lsm.lv/raksts/zinas/ekonomika/21.07.2026-dala-lauksaimnieku-pierobeza-kritize-altum-bezprocentu-aizdevumu-var-ierobezot-citas-atbalsta-iespejas.a655324/",
    f:{ reg:["latgale","vidzeme"], pier:["ja"] } },
  { id:"p02", iest:"LIAA", nos:"Inovāciju vaučeri", statuss:"open",
    summa:"45–100% izmaksu, līdz 25 000 € vienam produktam",
    termins:"Kamēr ir finansējums (projekti līdz 29.02.2028)",
    kam:"Jauna produkta vai tehnoloģijas izstrāde kopā ar zinātnisku institūciju: izpēte, dizains, testēšana, intelektuālais īpašums.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ izm:["mikro","mazs","videjs"], zin:["zinatne"], plani:["produkts","ip"] } },

  { id:"p03", iest:"LIAA", nos:"Jaunuzņēmumu atbalsts augsti kvalificētiem darbiniekiem", statuss:"open",
    summa:"45% no darba algas izmaksām, līdz 300 000 €",
    termins:"Kamēr ir finansējums (līdz 29.02.2028)",
    kam:"Jaunuzņēmumi ar riska kapitāla investīciju vai produktu, kas gatavs pirmajiem klientiem.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ vecMax:5, izm:["mikro","mazs","videjs"], zin:["prototips","zinatne"], plani:["darbinieki","kapitals"] } },

  { id:"p04", iest:"LIAA", nos:"Zinātnietilpīgu jaunuzņēmumu atbalsts", statuss:"open",
    summa:"50%, līdz 150 000 €",
    termins:"Kamēr ir finansējums (līdz 29.02.2028)",
    kam:"Jaunuzņēmumi līdz 5 gadiem, kas komercializē zinātniskas institūcijas tehnoloģiju.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ vecMax:5, zin:["zinatne"] } },

  { id:"p05", iest:"LIAA", nos:"Atbalsts Eiropas Komisijas projektu sagatavošanai (Horizon Europe u.c.)", statuss:"open",
    summa:"50%, līdz 15 000 €",
    termins:"Līdz 31.08.2029",
    kam:"Uzņēmumi, kas gatavo pieteikumu Eiropas Komisijas pētniecības vai inovāciju programmām.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ zin:["prototips","zinatne"], plani:["produkts"] } },

  { id:"p06", iest:"LIAA", nos:"MVU eksporta atbalsta darbību plāns", statuss:"open",
    summa:"60%, līdz 40 000 € gadā",
    termins:"Līdz 31.12.2027 vai kamēr ir finansējums",
    kam:"Mazie un vidējie uzņēmumi, kas plāno ieiet ārvalstu tirgos.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/liaa-programmas-eksportam",
    f:{ izm:["mikro","mazs","videjs"], plani:["eksports"] } },

  { id:"p07", iest:"LIAA", nos:"Dalība nacionālajos stendos starptautiskās izstādēs", statuss:"open",
    summa:"Daļēji sedz dalības izmaksas (apmērs jāprecizē LIAA)",
    termins:"Līdz 31.12.2028",
    kam:"Uzņēmumi, kas piedalās izstādēs Latvijas nacionālajā stendā.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/liaa-programmas-eksportam",
    f:{ plani:["eksports"] } },

  { id:"p08", iest:"LIAA", nos:"Tirdzniecības misijas ārvalstīs", statuss:"open",
    summa:"Daļēji sedz dalības izmaksas (apmērs jāprecizē LIAA)",
    termins:"Līdz 31.03.2028",
    kam:"Uzņēmumi, kas brauc LIAA organizētās tirdzniecības misijās un amatpersonu vizītēs.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/liaa-programmas-eksportam",
    f:{ plani:["eksports"] } },

  { id:"p09", iest:"LIAA", nos:"Eksporta atbalsts lielajiem uzņēmumiem", statuss:"closing", lidz:"2026-11-15",
    summa:"Kopējais budžets 1 milj. € (2026)",
    termins:"Līdz 31.10. vai 15.11.2026 (precizē LIAA)",
    kam:"Lielie uzņēmumi, kas attīsta eksportu.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/liaa-programmas-eksportam",
    f:{ izm:["liels"], plani:["eksports"] } },

  { id:"p10", iest:"LIAA", nos:"Mini MBA \"Inovāciju vadība\"", statuss:"soon",
    summa:"Bezmaksas apmācība vadītājiem",
    termins:"Reģistrācija no 17.11.2026",
    kam:"Mazo un vidējo uzņēmumu vadītāji un inovāciju vadītāji.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ izm:["mikro","mazs","videjs"], plani:["apmacibas","produkts"] } },

  { id:"p12", iest:"ALTUM", nos:"Uzņēmējdarbības zaļināšana ar kapitāla atlaidi", statuss:"open",
    summa:"Aizdevums līdz 10 milj. €, kapitāla atlaide līdz 30%",
    termins:"Kamēr ir finansējums",
    kam:"Energoefektivitāte un atjaunojamā enerģija pašpatēriņam. Pirms pieteikuma vajadzīgs energoaudits.",
    avots:"https://www.altum.lv/pakalpojumi/biznesam/uznemejdarbibas-zalinasanas-aizdevums-vai-garantija-ar-kapitala-atlaidi/",
    f:{ plani:["energo"], regPiez:{ riga:"Rīgas uzņēmumiem pieteikšanās atveras 16.11.2026.", pieriga:"Pierīgas uzņēmumiem pieteikšanās atveras 16.11.2026." } } },

  { id:"p13", iest:"ALTUM", nos:"Starta aizdevums", statuss:"open",
    summa:"Līdz 250 000 €, likme no 4,9%",
    termins:"Pieejams pastāvīgi",
    kam:"Jauni uzņēmumi un pašnodarbinātie līdz 7 gadiem. Var pieteikties arī pirms uzņēmuma reģistrācijas.",
    avots:"https://www.altum.lv/pakalpojumi/biznesam/starta-aizdevums/",
    f:{ vecMax:7, plani:["iekartas","produkts","energo","darbinieki","digi","eksports"] } },

  { id:"p14", iest:"ALTUM", nos:"Investīciju un apgrozāmo līdzekļu aizdevumi", statuss:"open",
    summa:"Investīcijām līdz 5 milj. €, apgrozāmajiem līdzekļiem līdz 1 milj. €",
    termins:"Pieejams pastāvīgi",
    kam:"Iekārtas, citas investīcijas un apgrozāmie līdzekļi.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ plani:["iekartas","energo","produkts","digi"] } },

  { id:"p15", iest:"ALTUM", nos:"Mazie aizdevumi lauku teritorijās ar kapitāla atlaidi", statuss:"open",
    summa:"20 000–250 000 €, kapitāla atlaide līdz 50% (maks. 100 000 €)",
    termins:"Atvērts kopš 16.09.2026 (beigu termiņš jāprecizē)",
    kam:"Gados jaunie lauksaimnieki līdz 40 gadiem, kā arī lauksaimnieki un pārtikas ražotāji, kas uzsāk jaunu darbību.",
    avots:"https://www.lsm.lv/raksts/zinas/ekonomika/16.09.2026-valsts-atbalsta-programma-gados-jaunajiem-lauksaimniekiem-bus-pieejami-27-miljoni-eiro.a663471/",
    f:{ noz:["lauks"], nereg:["riga"], plani:["iekartas","produkts","energo"] } },

  { id:"p18", iest:"CFLA", nos:"Atbalsts dalībai kapitāla tirgos", statuss:"open", lidz:"2026-12-31",
    summa:"50%, līdz 200 000 € (akcijas) vai 120 000 € (obligācijas)",
    termins:"Līdz 31.12.2026",
    kam:"Konsultāciju izmaksas akciju vai obligāciju emisijai.",
    avots:"https://www.cfla.gov.lv/lv/1213-uznemuma-atbalsts-dalibai-kapitala-tirgos",
    f:{ izm:["mazs","videjs","liels"], plani:["kapitals"] } },

  { id:"p19", iest:"CFLA", nos:"Nozaru apmācības darbiniekiem (prasmju fondi)", statuss:"open",
    summa:"Līdz 70–95% apmācību izmaksu",
    termins:"Projekti līdz 2029. gadam, pieteikšanās caur nozares asociāciju",
    kam:"Darbinieku kvalifikācijas celšana caur nozares asociāciju vai prasmju fondu.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ plani:["apmacibas"] } },

  { id:"p21", iest:"CFLA", nos:"Mazo un vidējo uzņēmumu kiberdrošība", statuss:"soon",
    summa:"Iepriekšējās kārtās līdz 60 000 € (50%)",
    termins:"Jauns uzsaukums gaidāms (datums jāprecizē)",
    kam:"Kiberdrošības uzlabošana mazajos un vidējos uzņēmumos.",
    avots:"https://ifinanses.lv/zinas/actual-pieskirs-finansejumu-kiberdrosibas-stiprinasanai-uznemumos/31623",
    f:{ izm:["mikro","mazs","videjs"], plani:["digi"] } },

  { id:"p22", iest:"CFLA", nos:"Kompetences centri", statuss:"open",
    summa:"25–80% atkarībā no izpētes veida un uzņēmuma lieluma",
    termins:"Katram centram savi termiņi",
    kam:"Inovatīvi produkti, digitāli risinājumi un pētniecība kopā ar nozares kompetences centru.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ zin:["prototips","zinatne"], plani:["produkts","digi"] } },

  { id:"p23", iest:"Patentu valde", nos:"MVU fonds \"Idejas spēcīgākam uzņēmumam\"", statuss:"closing", lidz:"2026-12-04",
    summa:"50–90%, kopā līdz 8 040 € uzņēmumam",
    termins:"Patentu vaučeri līdz 04.12.2026; preču zīmju vaučeri atsāksies novembrī",
    kam:"Preču zīmju, dizainparaugu un patentu reģistrācija.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ izm:["mikro","mazs","videjs"], plani:["ip"] } },

  { id:"p24", iest:"Capitalia", nos:"Mikroaizdevumi ar Eiropas Investīciju fonda garantiju", statuss:"open",
    summa:"Līdz 50 000 €, bez nekustamā īpašuma ķīlas",
    termins:"Pieejams",
    kam:"Mazie uzņēmumi Baltijā.",
    avots:"https://balansis.lv/en/blog/eu-funding-latvia-small-business-2026",
    f:{ izm:["mikro","mazs"], inv:["lt25","25-250"], plani:["iekartas","produkts","digi","eksports","energo","darbinieki"] } },

  { id:"p27", iest:"LAD", nos:"Gados jaunie lauksaimnieki: uzņēmējdarbības uzsākšana", statuss:"closing", lidz:"2026-11-03",
    summa:"60 000 € vienreizējs maksājums",
    termins:"Pieteikšanās līdz 03.11.2026 LAD EPS",
    kam:"Gados jaunais lauksaimnieks, kas pirmo reizi izveido vai pārņem saimniecību.",
    avots:"https://kurzemesregions.lv/pieejams-atbalsts-jaunajiem-lauksaimniekiem-uznemejdarbibas-uzsaksanai/",
    f:{ noz:["lauks"], vecMax:1 } },

  { id:"p63", iest:"LAD", nos:"Ieguldījumi lauku saimniecību konkurētspējai (rudens kārta)", statuss:"soon", lidz:"2026-12-09",
    summa:"Apmērs vēl nav publicēts",
    termins:"Pieteikšanās 09.11.–09.12.2026",
    kam:"Lauksaimnieki: ražošanas pamatlīdzekļi un būvniecība. Var pieteikties arī kooperatīvi.",
    avots:"https://www.lad.gov.lv/lv/katalogs/la-411-atbalsts-ieguldijumiem-lauku-saimniecibas-konkuretspejai",
    f:{ noz:["lauks"], plani:["iekartas","produkts"] } },

  { id:"p64", iest:"LAD", nos:"Preventīvie ieguldījumi: aizsardzība pret plēsējiem, salnu un krusu", statuss:"soon", lidz:"2027-04-09",
    summa:"Apmērs vēl nav publicēts",
    termins:"Pieteikšanās 09.11.2026–09.04.2027",
    kam:"Aitu un kazu audzētāji (žogi, aprīkojums) un dārzkopji.",
    avots:"https://www.lad.gov.lv/lv/katalogs/la-411-atbalsts-ieguldijumiem-lauku-saimniecibas-konkuretspejai",
    f:{ noz:["lauks"] } },

  { id:"p65", iest:"LAD", nos:"Emisiju samazināšana, atjaunojamā enerģija un energoefektivitāte saimniecībās", statuss:"soon", lidz:"2026-12-09",
    summa:"Apmērs vēl nav publicēts",
    termins:"Pieteikšanās 09.11.–09.12.2026",
    kam:"Lauksaimnieki, kas investē klimata pasākumos, saules paneļos vai energoefektivitātē.",
    avots:"https://www.lad.gov.lv/lv/katalogs/la-412-atbalsts-ieguldijumiem-seg-un-amonjaka-emisijas-samazinosajiem-pasakumiem-un-klimata-parmainu-mazinasanai-un-pielagosanas-pasakumu-istenosanai-lauku-saimniecibas",
    f:{ noz:["lauks"], plani:["energo"] } },

  { id:"p77", iest:"Norvēģijas granti", nos:"Zaļā uzņēmējdarbība un inovācijas", statuss:"soon",
    summa:"Granti no 50 000 € līdz 3 milj. €",
    termins:"Pirmie konkursi 2027. gadā",
    kam:"Zaļas inovācijas: jauni produkti, prototipi un esošu risinājumu mērogošana.",
    avots:"https://lvportals.lv/dienaskartiba/395911-ar-norvegijas-grantu-atbalstu-latvijas-uznemumu-zalajas-inovacijas-ieguldis-3254-miljonus-eiro-2026",
    f:{ plani:["energo","produkts"] } },

  { id:"p32", iest:"ALTUM un LIAA", nos:"Lielo investīciju aizdevums ar kapitāla atlaidi", statuss:"soon",
    summa:"Kapitāla atlaide līdz 30%, projekti no 10 milj. €",
    termins:"Nākamā kārta 2027. gadā",
    kam:"Lieli investīciju projekti ražošanā.",
    avots:"https://liaa.business.gov.lv/atbalsta-iespejas/attistibai-un-inovacijam",
    f:{ izm:["videjs","liels"], inv:["gt250"], plani:["iekartas"] } }
];

/* Pašvaldību konkursi: notiek parasti reizi gadā. Rāda pēc reģiona. */
window.PASVALDIBAS = [
  { id:"p34", reg:"riga", nos:"Rīga: jaunuzņēmumu ekosistēmas atbalsta programma", summa:"Pēc nolikuma", termins:"Nākamais konkurss 2026. g. beigās vai 2027. g. sākumā", statuss:"soon", avots:"https://www.liveriga.com/lv/11698-jaunuznemumu-ekosistemas-atbalsta-programma" },
  { id:"p45r", reg:"riga", nos:"Rīga: grantu programma \"Augšup\" (ar SEB)", summa:"Līdz 8 000 €", termins:"Parasti pavasarī (nākamā kārta 2027)", statuss:"yearly", piez:"Jauniem uzņēmumiem.", avots:"https://www.riga.lv/lv/jaunums/rigas-pasvaldiba-2026gada-turpina-dalibu-grantu-programma-augsup-pieteiksanas-no-1marta" },
  { id:"p29", reg:"riga", nos:"Rīga: līdzfinansējums sociālajiem uzņēmumiem", summa:"Līdz 15 000 €, līdz 90%", termins:"Parasti no marta", statuss:"yearly", piez:"Tikai uzņēmumiem ar sociālā uzņēmuma statusu.", avots:"https://uznemeji.riga.lv/vel-turpinas-pieteiksanas-socialajiem-uznemejiem-lidz-15-000-eiro-pieejamibas-uzlabosanai/" },

  { id:"p66", reg:"pieriga", nos:"Jūrmala: atbalsts ieguldījumiem uzņēmējdarbībā", summa:"Līdz 10 000 €", termins:"Parasti martā–aprīlī", statuss:"yearly", avots:"https://dokumenti.jurmala.lv/docs/m26/l/pdf/m260122.pdf" },
  { id:"p67", reg:"pieriga", nos:"Mārupe: \"Mammu bizness Mārupē\"", summa:"Līdz 6 000 €", termins:"Parasti rudenī (2026. g. datumi jāprecizē)", statuss:"yearly", piez:"Sievietēm, kas audzina bērnu līdz 8 gadiem.", avots:"https://must.marupe.lv/uznemejdarbiba/" },
  { id:"p68", reg:"pieriga", nos:"Sigulda: \"Māmiņa. Uzņēmēja.\"", summa:"Līdz 3 000 €", termins:"Parasti pavasarī", statuss:"yearly", piez:"Sievietēm, kas audzina bērnu līdz 10 gadiem.", avots:"https://sigulda.lv/media/uploads/Konkursa-Mamina.-Uznemeja.-nolikums.pdf" },
  { id:"p70", reg:"pieriga", nos:"Ķekava, Ādaži, Ropaži, Salaspils: atbalsts remigrantiem", summa:"Līdz 12 000 €", termins:"Parasti rudenī (2026. g. kārta jāprecizē)", statuss:"yearly", piez:"Remigrantiem, kas sāk uzņēmējdarbību.", avots:"https://rpr-business.lv/pierigas-novados-ar-granta-programmu-atbalstis-remigrantu-uznemumu-un-jaunu-darbavietu-veidosanu/" },
  { id:"p45p", reg:"pieriga", nos:"Jūrmala: grantu programma \"Augšup\" (ar SEB)", summa:"Līdz 8 000 €", termins:"Parasti pavasarī", statuss:"yearly", piez:"Jauniem uzņēmumiem.", avots:"https://www.riga.lv/lv/jaunums/rigas-pasvaldiba-2026gada-turpina-dalibu-grantu-programma-augsup-pieteiksanas-no-1marta" },

  { id:"p41", reg:"vidzeme", nos:"Madonas novads: \"Madona var labāk!\"", summa:"Līdz 6 000 € jauniem, līdz 2 000 € pārējiem", termins:"Līdz 30.10.2026 plkst. 16.00; kārtas 4 reizes gadā", statuss:"closing", lidz:"2026-10-30", avots:"https://businessmadona.lv/madona-var-labak/" },
  { id:"p35", reg:"vidzeme", nos:"Valmiera: atbalsta programma \"ZĪLE\"", summa:"2 000–10 000 €", termins:"Parasti februārī–martā", statuss:"yearly", avots:"https://developvalmiera.lv/atbalsta-programma-zile/" },
  { id:"p36", reg:"vidzeme", nos:"Cēsis: grantu konkurss \"Uzrāviens\"", summa:"Līdz 5 000 € (+3 000 € aprites ekonomikai)", termins:"Parasti pavasarī", statuss:"yearly", avots:"https://www.cesis.lv/lv/novads/aktualitates/zinas/uznemejdarbiba/izsludinats-cesu-novada-uznemejdarbibas-grantu-konkurss-uzraviens-2026/" },
  { id:"p43", reg:"vidzeme", nos:"Smiltene: \"Esi uzņēmējs Smiltenes novadā!\"", summa:"Līdz 4 000 €", termins:"Parasti maijā–jūnijā", statuss:"yearly", avots:"https://www.smiltenesnovads.lv/lv/jaunums/desmito-reizi-izsludinats-konkurss-esi-uznemejs-smiltenes-novada" },
  { id:"p44", reg:"vidzeme", nos:"Limbaži: atbalsts komercdarbības uzsākšanai", summa:"Līdz 5 000 €", termins:"Parasti pavasarī", statuss:"yearly", avots:"https://www.limbazunovads.lv/lv/jaunums/atverta-pieteiksanas-konkursam-atbalsts-komercdarbibas-uzsaksanai-limbazu-novada-2025gada" },
  { id:"p46", reg:"vidzeme", nos:"Gulbene: \"Uzņēmīgi Gulbenes novadā\"", summa:"Līdz 10 000 € eksportam, 5 000 € jaunam produktam", termins:"Parasti pavasarī un rudenī", statuss:"yearly", avots:"https://dzirkstele.lv/vietejas-zinas/grantu-konkursa-uznemigi-gulbenes-novada-pirmaja-karta-atbalsta-visas-tris-iesniegtas-biznesa-idejas/" },
  { id:"p48", reg:"vidzeme", nos:"Valka: \"Attīsti uzņēmējdarbību Valkas novadā!\"", summa:"Līdz 1 500 € (2024. g.)", termins:"Parasti pavasarī", statuss:"yearly", avots:"https://www.valka.lv/lv/jaunums/aicinam-iesniegt-projektu-pieteikumus-grantu-programmai-attisti-uznemejdarbibu-valkas-novada-2025" },

  { id:"p30", reg:"kurzeme", nos:"Tukums: \"Radi Tukuma novadam\"", summa:"Līdz 5 000 €", termins:"Parasti aprīlī–maijā", statuss:"yearly", piez:"Jauniem uzņēmumiem līdz 3 gadiem.", avots:"https://lvportals.lv/dienaskartiba/388073-iespeja-sanemt-lidz-5000-eur-sava-biznesa-saksanai-tukuma-novada-izsludinats-uznemejdarbibas-atbalsta-konkurss-2026" },
  { id:"p40", reg:"kurzeme", nos:"Dienvidkurzeme: līdzfinansējuma konkurss", summa:"Līdz 4 000 €, līdz 70%", termins:"Parasti janvārī", statuss:"yearly", avots:"https://raca.lv/izsludinats-pasvaldibas-lidzfinansejuma-konkurss-uznemejdarbibas-veicinasanai-2026-gada/" },
  { id:"p42", reg:"kurzeme", nos:"Liepāja: MVU līdzfinansējuma konkurss", summa:"Līdz 10 000 €", termins:"Termiņš jāprecizē", statuss:"yearly", avots:"https://business.gov.lv/en/support-opportunities/kurzeme-region" },
  { id:"p47", reg:"kurzeme", nos:"Kuldīga: jauno uzņēmēju biznesa ideju konkurss", summa:"Līdz 5 000 €", termins:"Termiņš jāprecizē", statuss:"yearly", avots:"https://kuldigasnovads.lv/izsludinats-konkurss-pasvaldiba-palielina-atbalstu-jauno-uznemeju-biznesa-idejam-lidz-5000-eiro/" },
  { id:"p69", reg:"kurzeme", nos:"Ventspils: atbalsts telpu nomas maksai", summa:"Provizoriski 10 000 € gadā", termins:"Kārtība jāprecizē", statuss:"yearly", avots:"https://www.ventspils.lv/app/uploads/2026/03/Pasvaldibas_atbalsts-1.pdf" },

  { id:"p38", reg:"zemgale", nos:"Jelgava: atbalsts komersantiem", summa:"Līdz 20 000 €", termins:"Nākamā kārta jāprecizē", statuss:"yearly", avots:"https://www.jelgava.lv/jaunumi/uznemejdarbibas-atbalsta-grantu-konkursa-finansejumu-sanem-devini-uznemumi/" },
  { id:"p39", reg:"zemgale", nos:"Dobele: \"Attīsti uzņēmējdarbību Dobeles novadā\"", summa:"Līdz 3 000 €", termins:"Parasti aprīlī", statuss:"yearly", piez:"Jauniem uzņēmumiem līdz 3 gadiem.", avots:"https://pic.dobele.lv/lv/izsludinata-pieteiksanas-grantu-konkursam-attisti-uznemejdarbibu-dobeles-novada-2026/" },
  { id:"p78", reg:"zemgale", nos:"Aizkraukle: \"Esi uzņēmējs Aizkraukles novadā\"", summa:"Līdz 5 000 €", termins:"Parasti aprīlī", statuss:"yearly", piez:"Biznesa uzsācējiem un uzņēmumiem līdz 2 gadiem.", avots:"https://uznemejiem.aizkraukle.lv/en/business-idea-competition-be-entrepreneur-aizkraukle-region" },
  { id:"p45z", reg:"zemgale", nos:"Jelgava: grantu programmas \"Augšup\" un \"(ie)dvesma\" (ar SEB)", summa:"Līdz 8 000–12 000 €", termins:"Parasti pavasarī", statuss:"yearly", piez:"Jauniem uzņēmumiem.", avots:"https://www.riga.lv/lv/jaunums/rigas-pasvaldiba-2026gada-turpina-dalibu-grantu-programma-augsup-pieteiksanas-no-1marta" },

  { id:"p37", reg:"latgale", nos:"Daugavpils: grantu programma \"Impulss\"", summa:"5 000–20 000 €", termins:"Parasti februārī–aprīlī", statuss:"yearly", piez:"Jauniem uzņēmumiem līdz 2 gadiem un remigrantiem.", avots:"https://www.daugavpils.lv/pilseta/pilsetas-attistiba/uznemejdarbiba-daugavpili/grantu-programma-impulss/" },
  { id:"p73", reg:"latgale", nos:"Rēzeknes novads: uzņēmējdarbības projektu konkurss", summa:"Jāprecizē", termins:"2026. g. izsludināts, termiņš jāprecizē", statuss:"yearly", avots:"https://rezeknesnovads.lv/en/izsludinats-2026-gada-uznemejdarbibas-projektu-konkurss-uznemumu-radisanai-un-attistisanai/" }
];
