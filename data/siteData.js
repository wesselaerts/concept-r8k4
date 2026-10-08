// Alle website-content staat hier. Pas dit bestand aan om de site te updaten.
// Later te vervangen door een server-side endpoint die dit genereert vanuit een database.
window.SITE_DATA = {
  "bedrijf": {
    "naam":         "Allico Systems",
    "adres":        "Expeditiestraat 11, 5961 PX Horst",
    "telefoon":     "+31 6 11 67 17 19",
    "whatsapp":     "31611671719",
    "email":        "info@allico.nl",
    "linkedin":     "https://www.linkedin.com/company/allico-systems/",
    "beschrijving": "Hardware, firmware en software in eigen beheer.",
    "copyright":    "2026 Allico Systems"
  },

  // Waar de projectcheck en het terugbelverzoek naartoe gaan.
  // Leeg = het mailprogramma van de bezoeker opent met het bericht erin.
  // Invullen met bijvoorbeeld een Formspree-adres ("https://formspree.io/f/xxxxxxx"), dan komt alles direct in je inbox.
  "formulier": {
    "endpoint": ""
  },

  "home": {
    "introLabel":         "Engineering partner",
    "introTitel":         "Van concept naar bewezen systeem",
    "introTekst":         "Allico Systems ontwikkelt hardware en software voor prototyping, digitalisering, automatisering en verbeteringen op het gebied van cybersecurity.",
    "introCta":           "Onze specialisaties",
    "introFoto":          "",
    "scrollDividerTekst": "Hoe wij werken",
    "stappen": [
      {
        "tag":   "Allico Systems",
        "titel": "Van idee naar werkend product",
        "tekst": "Wij ontwikkelen elektronische systemen van concept tot eindproduct: hardware, firmware en software in eigen beheer. Scroll om te zien hoe."
      },
      {
        "tag":   "Stap 1: Concept",
        "titel": "Schematisch uitwerken",
        "tekst": "Elk project begint met een grondige analyse. Wij vertalen uw functionele wensen naar een technisch schema: componentkeuze, signaalpaden en voedingsarchitectuur."
      },
      {
        "tag":   "Stap 2: Hardware",
        "titel": "Hardware ontwerp & productie",
        "tekst": "Het schema wordt PCB-layout. Wij ontwerpen met oog voor EMC, thermisch management en maakbaarheid, en begeleiden de productie tot en met geassembleerde printplaten."
      },
      {
        "tag":   "Stap 3: Software",
        "titel": "Firmware & besturing",
        "tekst": "Hardware zonder intelligentie doet niets. Wij schrijven de firmware, communicatieprotocollen en besturingssoftware die uw systeem tot leven brengen."
      },
      {
        "tag":   "Stap 4: Oplevering",
        "titel": "Getest, gedocumenteerd, klaar",
        "tekst": "Het eindproduct wordt volledig getest en gedocumenteerd opgeleverd. Van prototype tot kleine serie; wij begeleiden het gehele traject."
      }
    ]
  },

  "specialisaties": [
    {
      "id":          "spec-1",
      "num":         "01",
      "foto":        "header van hardware.jpeg",
      "fotoAlt":     "Hardware ontwikkeling",
      "titel":       "Hardware ontwikkeling op maat",
      "samenvatting":"Schematisch ontwerp en PCB‑layout met toekomstbestendige componentkeuzes, gericht op de stap van concept naar prototype en doorontwikkeling naar product.",
      "cta": {
        "titel": "Een idee dat een eigen print nodig heeft?",
        "tekst": "Van schets tot werkend prototype: we denken mee over wat haalbaar is en wat het ongeveer kost."
      },
      "detail": {
        "topbarTag":    "01 | Hardware",
        "hero":         "Hardware compositie.jpeg",
        "lead":         "Schematisch ontwerp en PCB‑layout met toekomstbestendige componentkeuzes, gericht op de stap van concept naar prototype en doorontwikkeling naar product.",
        "aanpakAlineas": [
          "Het proces start bij het identificeren van het einddoel: waar dient het product voor en welk probleem lost het op. Vanuit die functionele eisen definiëren we een concreet concept en toetsen we de technische haalbaarheid. Vervolgens werken we dit uit tot een schema en PCB‑ontwerp dat direct bij onze productiepartners kan worden gemaakt. Na assemblage staat het eerste prototype, waarin het concept voor het eerst in de praktijk tot leven komt.",
          "Het eerste prototype zetten we op met een duidelijk plan, maar de vervolgstappen zijn bewust iteratief. Op basis van praktijktesten met het eerste functionele prototype verzamelen we inzichten die we gebruiken voor de doorontwikkeling. Zodra de hardware stabiel is, begeleiden we de stap naar kleine of middenserie productie."
        ],
        "watWijDoen": [
          "Vertaling van concept naar een technisch haalbaar plan",
          "Schematisch ontwerp en onderbouwde componentkeuze",
          "PCB-layout met aandacht voor EMC en thermisch management",
          "Prototypebouw en functioneel testen in de praktijk",
          "Begeleiding naar kleine en middenserieproductie"
        ],
        "toepassingen":  "Industriële besturing, meetapparatuur, embedded systemen, sensortechnologie, op maat gemaakte modules.",
        "technologieen": ["KiCad", "Altium", "EMC-ontwerp", "IPC-2221", "SMD/THT"],
        "meerWeten":     "Neem contact op om te bespreken wat uw project vereist."
      }
    },
    {
      "id":          "spec-2",
      "num":         "02",
      "foto":        "Sensor in veld.png",
      "fotoAlt":     "Software & communicatie",
      "titel":       "Software voor communicatie en besturing",
      "samenvatting":"Embedded firmware, protocollen en besturingssoftware die hardware intelligent maakt en systemen laat samenwerken.",
      "cta": {
        "titel": "Een installatie die slimmer kan?",
        "tekst": "Vertel ons welk systeem je hebt en wat het moet doen. We kijken waar de winst zit."
      },
      "detail": {
        "topbarTag":    "02 | Software",
        "hero":         "Sensor in veld.png",
        "lead":         "Hardware zonder de juiste slimme software heeft gemiste potentie. Allico Systems biedt de juiste oplossing voor uw installatie. Op het gebied van digitaliseren, automatiseren en slimmer maken. Complexere talen zoals C++ voor gedigitaliseerde installaties of duidelijke platte talen voor PLC-techniek worden doordacht geselecteerd voor het betreffende einddoel van de klant.",
        "aanpakAlineas": [
          "Elk softwarevraagstuk is anders, net als de hardware eromheen, daarom staat het einddoel van de installatie centraal. Bestaande systemen communiceren vaak met meerdere platforms tegelijk, Allico Systems streeft daarbij naar één geheel en volledige integratie. We werken waar nodig met eigen platformen, maar sluiten ook aan op bestaande systemen bij de klant.",
          "Er kan gecommuniceerd worden met hardware via een bekabelde en draadloze verbinding. Deze hardware kan onderdeel zijn van een groter systeem, of een standalone sensor in een afgelegen weiland.",
          "De software bouwen we modulair en inzichtelijk, zodat zowel eindgebruikers als betrokken partijen, zoals monteurs, ermee kunnen werken en het kunnen onderhouden."
        ],
        "watWijDoen": [
          "Embedded firmware in C/C++ (bare metal en RTOS)",
          "Industriële protocollen: CAN, Modbus, MQTT, OPC-UA",
          "PLC-programmering en procesbesturing",
          "Draadloze communicatie: LoRa, BLE, Wi-Fi, LTE"
        ],
        "toepassingen":  "Machinebouw, procesautomatisering, IoT-gateways, remote monitoring, slimme sensoren.",
        "technologieen": ["C / C++", "FreeRTOS", "Modbus", "MQTT", "OPC-UA", "LoRaWAN"],
        "meerWeten":     "Vertel ons over uw systeem en wij kijken hoe we het slimmer kunnen maken."
      }
    },
    {
      "id":          "spec-3",
      "num":         "03",
      "foto":        "dashboard voorbeeld bijgesneden.jpeg",
      "fotoAlt":     "Dashboards & applicaties",
      "titel":       "Dashboards en andere applicaties",
      "samenvatting":"Maatwerk dashboards en applicaties die data omzetten in bruikbare inzichten: voor datavisualisatie, besturingsplatformen en online omgevingen.",
      "cta": {
        "titel": "Zien wat je eigen data je vertelt?",
        "tekst": "We maken graag een demo op basis van jouw eigen data."
      },
      "detail": {
        "topbarTag":    "03 | Dashboards",
        "hero":         "dashboard voorbeeld.jpeg",
        "lead":         "Data krijgt pas waarde wanneer het leidt tot nieuwe inzichten, verbanden en conclusies. Met passende en helder vormgegeven dashboards maakt Allico Systems die informatie bruikbaar.",
        "aanpakAlineas": [
          "In veel situaties schiet een generiek dashboard tekort. Een losse grafiek vertelt niet altijd het hele verhaal, en een Excel-sheet al helemaal niet. Daarom ontwerpen wij dashboards op maat, afgestemd op het doel, de gebruiker en de informatie die echt nodig is.",
          "Dat kan gaan om een platform voor datavisualisatie, een besturingspaneel op een machine, een online omgeving of een combinatie daarvan. Zowel offline als online realiseren wij oplossingen die overzicht geven en passen bij de praktijk van de eindgebruiker."
        ],
        "watWijDoen": [
          "Datavisualisatie-dashboards met maatwerk vergelijkingstools",
          "Besturingsplatformen voor offline en online installaties",
          "Toepassingen voor telefoon, computer en andere apparaten"
        ],
        "toepassingen":  "Productie-monitoring, utiliteiten, gebouwbeheer, logistiek, energie-inzicht.",
        "technologieen": ["React", "Node.js", "InfluxDB", "Grafana", "REST / WebSocket"],
        "meerWeten":     "We maken graag een demo op basis van uw eigen data."
      }
    },
    {
      "id":          "spec-4",
      "num":         "04",
      "foto":        "Versleutelde beveiliging.png",
      "fotoAlt":     "Cybersecurity",
      "titel":       "Cybersecurity en beveiligde verbindingen",
      "samenvatting":"Doordachte beveiliging voor dataplatformen en installaties op afstand, afgestemd op het beveiligingsprofiel van uw systeem.",
      "cta": {
        "titel": "Hoe veilig is jouw installatie op afstand?",
        "tekst": "We bespreken de risico's van jouw systeem en wat er nodig is, ook met het oog op de Cyberbeveiligingswet."
      },
      "detail": {
        "topbarTag":    "04 | Cybersecurity",
        "hero":         "Versleutelde beveiliging.png",
        "lead":         "Het inzien van data en het op afstand besturen van installaties is een gevoelig onderwerp. Deze systemen mogen alleen toegankelijk zijn voor de partijen waarvoor ze bedoeld zijn. Daarom is een doordachte beveiliging cruciaal voor de continuïteit van het systeem.",
        "aanpakAlineas": [
          "Het gewenste beveiligingsniveau bepalen we op basis van het profiel van het systeem, de gevoeligheid van de data en de risico's bij ongeautoriseerde toegang. Voor datavisualiserende applicaties betekent dit bijvoorbeeld sterke netwerkbeveiliging, afgeschermde toegang en betrouwbare verificatie zoals 2FA.",
          "Bij systemen waarmee installaties op afstand worden bestuurd, ligt de beveiligingslat nog aanzienlijk hoger. Ongeautoriseerde toegang kan hier directe gevolgen hebben voor de continuïteit en veiligheid van het systeem. Voor dit soort trajecten werken wij samen met een vaste partner, waarbij hoog aangeschreven hardware wordt gecombineerd met gezamenlijk ontwikkelde software. Zo kunnen wij een hoog beveiligingsniveau realiseren, zoals onder meer toegepast in project Kemkens met borging van IEC 62443."
        ],
        "watWijDoen": [
          "Analyse van het benodigde beveiligingsprofiel.",
          "Opzetten van digitale beveiliging voor websites en platforms.",
          "Inrichten van VPN-tunnelbeveiliging.",
          "Versleutelde communicatie tussen systemen."
        ],
        "toepassingen":  "Industriële netwerken, kritische infrastructuur, medische apparatuur, connected producten.",
        "technologieen": ["TLS 1.3", "Secure Boot", "VPN", "IEC 62443", "NIS2"],
        "meerWeten":     "We bespreken graag de specifieke risico's van uw systeem en wat er mogelijk is."
      }
    }
  ],

  "projecten": [
    {
      "id":          "project-1",
      "num":         "P-01",
      "tag":         "PLC's · Automatisering · Remote control · Cybersecurity",
      "titel":       "Remote toegang voor testen van brandbeveiligingssystemen",
      "samenvatting":"Kemkens Brandbeveiliging zocht een betrouwbare oplossing om hun installaties op afstand te monitoren en beheren, zonder concessies aan de systeemveiligheid.",
      "foto":        "kemkens.jpeg",
      "fotoAlt":     "Kemkens brandbeveiliging",
      "cta": {
        "titel": "Ook installaties veilig op afstand beheren?",
        "tekst": "Voor Kemkens testen we brandbeveiligingsinstallaties op afstand, met beveiliging conform IEC 62443. We kijken graag wat dat voor jouw installaties kan betekenen."
      },
      "detail": {
        "topbarTag":   "P-01 · Cybersecurity · Embedded",
        "hero":        "kemkens.jpeg",
        "lead":        "Kemkens Brandbeveiliging zocht een betrouwbare manier om hun installaties op afstand te monitoren en te beheren, zonder concessies te doen aan de veiligheid van het systeem.",
        "doel":        "Om toekomstbestendig te blijven in een krappe arbeidsmarkt, zocht Kemkens Brandbeveiliging een efficiënte manier om het onderhoud van installaties te garanderen. De oplossing: testen op afstand. Het doel van dit project was het realiseren van een uiterst betrouwbare en beveiligde verbinding met brandbeveiligingsinstallaties op willekeurige locaties in Nederland. Hiermee kunnen systemen remote in werking worden gesteld en sensoren worden uitgelezen, wat direct inzicht geeft in de prestaties en functionaliteit.",
        "uitdaging":   "Brandbeveiligingssystemen zijn kritieke installaties, waardoor de beveiliging van de verbinding optimaal en volledig gecertificeerd moet zijn. Daarnaast is gebruiksgemak een harde eis: het nieuwe beheerportaal moet uiterst praktisch en toegankelijk blijven voor de werknemers die er dagelijks mee werken.",
        "aanpak":      "Voor de benodigde hardware, software en licenties om te voldoen aan een certificering op IEC 62443-niveau, werken we nauw samen met gespecialiseerde partners. Zij leveren de robuuste basis voor dit type systemen, waarna Allico Systems de integratie en het maatwerk ontwikkelt dat naadloos aansluit op het projectdoel. Vanwege de strenge veiligheidseisen rondom brandbeveiliging maken wij de exacte specificaties van de gebruikte hardware en software niet openbaar.",
        "resultaat":   "De installaties zijn nu op afstand bereikbaar voor beheer en monitoring, met een beveiligingsniveau conform IEC 62443. Storingen worden sneller gesignaleerd en kunnen op afstand worden verholpen, zonder dat de beveiliging van het systeem in het geding komt.",
        "sector":      "Brandbeveiliging · Gebouwbeheer",
        "technologieen": ["VPN-verbinding", "IEC-62443 certificering", "2FA", "PLC's"],
        "doorlooptijd":"9 maanden"
      }
    },
    {
      "id":          "project-2",
      "num":         "P-02",
      "tag":         "Software · Integratie · Beveiliging · Applicatie",
      "titel":       "Veiligheidsregistratie app",
      "samenvatting":"Maatwerkapplicatie voor de digitale registratie van veiligheidscontroles op werkplekken.",
      "foto":        "veiligheidsapp goed.jpeg",
      "fotoAlt":     "Veiligheidsregistratie applicatie",
      "cta": {
        "titel": "Ook papierwerk op de werkvloer digitaliseren?",
        "tekst": "Een app die medewerkers wél invullen, met direct inzicht voor leidinggevenden. Vertel ons welk proces je wilt verbeteren."
      },
      "detail": {
        "topbarTag":   "P-02 · Software · Applicatie",
        "hero":        "veiligheidsapp goed.jpeg",
        "lead":        "Papieren werkplekinspecties en LMRA's maakten de veiligheidsadministratie onvolledig en tijdrovend, waardoor realtime inzicht op de bouwplaats ontbrak. Allico Systems ontwikkelde een centrale applicatie die dit proces stroomlijnt. Het resultaat is een volledig geautomatiseerde administratie en actueel inzicht in de veiligheidssituatie.",
        "doel":        "Het automatiseren van tijdrovende veiligheidsadministratie om via realtime dashboards en slimme meldingen de veiligheid op de werkvloer proactief te verhogen en beheersbaar te maken.",
        "uitdaging":   "Het registratieproces op locatie moet laagdrempelig en gebruiksvriendelijk zijn. Omdat werknemers dit vaak als een administratieve en onnodige taak ervaren, moest het nieuwe proces aan de volgende eisen voldoen:",
        "uitdagingEisen": [
          { "label": "Snel en simpel",          "tekst": "Een duidelijk systeem om de administratieve last voor de werknemer op locatie zo klein mogelijk te maken." },
          { "label": "Zonder taalbarrière",     "tekst": "Gemakkelijk te begrijpen en in te vullen, ook voor werknemers en onderaannemers die geen Nederlands spreken." },
          { "label": "Direct inzichtelijk",     "tekst": "De ingevoerde resultaten moeten direct duidelijk beschikbaar zijn voor leidinggevenden op verschillende locaties." },
          { "label": "Langetermijnoverzicht",   "tekst": "Het genereren van duidelijke overzichten van de veiligheidssituatie over langere periodes." }
        ],
        "aanpak":      "Vanaf de eerste gesprekken was duidelijk dat toegankelijkheid en naadloze integratie in de bedrijfsstructuur cruciaal waren. Daarom zijn de nieuwe accounts direct gekoppeld aan bestaande e-mailadressen en is het beheer (hosting, updates en certificaten) zo ingericht dat de interne IT-afdeling dit eenvoudig zelf kan oppakken. Een bewuste keuze voor een toekomstbestendig systeem.\n\nOp basis van de heldere doelstellingen is er een strak ontwikkel- en testplan uitgerold. De bouw van het dashboard ging voorspoedig, waarna uitgebreid testen onmisbaar bleek. De praktijktest legde namelijk nog belangrijke verbeterpunten bloot. Omdat we deze feedback direct verwerkten in kleine, snelle aanpassingen, konden we de applicatie in een vlot tempo opleveren.",
        "resultaat":   "Sinds de werknemers de analyses digitaal invullen, is de impact voor leidinggevenden direct merkbaar. Onveilige situaties worden via automatische pushmeldingen onmiddellijk gemeld en opgepakt. Bovendien is het LMRA-overzicht van het voltallige werknemersbestand nu altijd compleet en actueel.",
        "sector":      "Industrie · Veiligheid",
        "technologieen": ["React", "Node.js", "REST API", "PostgreSQL"],
        "doorlooptijd":"In te vullen."
      }
    },
    {
      "id":          "project-3",
      "num":         "P-03",
      "tag":         "PCB-ontwikkeling · Prototyping · Besturingen · Dashboards",
      "titel":       "Slimme irrigatiebesturing voor Alia",
      "samenvatting":"Draadloos besturingssysteem voor irrigatie-installaties, met sensoren in het veld, LoRa-communicatie en een centraal dashboard voor monitoring en aansturing.",
      "foto":        "Alia.png",
      "fotoAlt":     "Alia irrigatiebesturing",
      "cta": {
        "titel": "Ook installaties in het veld automatisch aansturen?",
        "tekst": "Draadloze sensoren, eigen hardware en een dashboard in één hand. We kijken graag naar jouw situatie."
      },
      "detail": {
        "topbarTag":   "P-03 · Hardware · Firmware",
        "hero":        "Alia.png",
        "lead":        "Alia zocht een oplossing om hun irrigatie-installaties automatisch en op afstand aan te sturen, gebaseerd op actuele meetdata uit het veld.",
        "doel":        "Irrigatie-installaties automatisch en op afstand aansturen op basis van live velddata, betrouwbaar over grote buitengebieden zonder vaste infrastructuur.",
        "uitdaging":   "De installaties liggen verspreid over grote buitengebieden zonder bekabelde infrastructuur. De besturing moest energiezuinig zijn, bestand tegen buitenomstandigheden en schaalbaar inzetbaar over meerdere locaties.",
        "aanpak":      "Allico ontwikkelde hardware-nodes met geintegreerde sensoren voor bodemvocht en omgevingsdata. Via LoRaWAN communiceren de nodes met een centrale gateway. De firmware stuurt kleppen en pompen aan op basis van meetwaarden en ingestelde drempelwaarden. Een centraal dashboard geeft inzicht in de status van alle locaties.",
        "resultaat":   "De irrigatie wordt nu automatisch aangestuurd op basis van actuele velddata. Handmatige controles zijn sterk gereduceerd en het waterverbruik is inzichtelijk per locatie.",
        "sector":      "Agri · Utiliteit",
        "technologieen": ["LoRaWAN", "C/C++", "FreeRTOS", "MQTT", "React"],
        "doorlooptijd":"In te vullen."
      }
    }
  ],

  "nieuws": [
    {
      "id":           "nieuws-1",
      "datum":        "Augustus 2026",
      "titel":        "Allico Systems start certificeringstraject bij Phoenix Contact",
      "foto":         "phoenix-contact-logo.svg",
      "fotoAlt":      "Logo van Phoenix Contact",
      "fotoType":     "logo",
      "samenvatting": "De afgelopen periode hebben wij de Workshop PLCnext Engineer bij Phoenix Contact gevolgd. Dit traject zetten we het komende jaar voort om onze kennis en vaardigheden verder te ontwikkelen. Na een succesvolle afronding behoren we tot de opgeleide en gecertificeerde partners van Phoenix Contact.",
      "tekst": [
        "De afgelopen periode hebben wij de Workshop PLCnext Engineer bij Phoenix Contact gevolgd. Dit traject zetten we het komende jaar voort om onze kennis en vaardigheden verder te ontwikkelen. Na een succesvolle afronding behoren we tot de opgeleide en gecertificeerde partners van Phoenix Contact.",
        "Een belangrijk onderdeel van dit traject is PLCnext Technology. Dit open automatiseringsplatform combineert de klassieke betrouwbaarheid van IEC 61131 met hogere programmeertalen zoals C, C++ en MATLAB Simulink. Dankzij de open Linux-kernel kunnen deze technologieën binnen dezelfde realtime-omgeving worden toegepast.",
        "Daarmee ontstaan mogelijkheden die verder gaan dan een traditionele PLC. Denk aan HTML5-dashboards direct vanaf de besturing, beveiligde toegang op afstand en datakoppelingen naar cloud- of MES-systemen zonder aparte industriële PC in de kast.",
        "De timing is geen toeval. Met de komst van de nieuwe Cyberbeveiligingswet, de Nederlandse uitwerking van NIS2, krijgen meer bedrijven te maken met strengere eisen op het gebied van cybersecurity. Ook in de toeleveringsketen. Cybersecurity verschuift daarmee steeds meer naar iets dat je aantoonbaar op orde moet hebben.",
        "Daarbij wordt het belangrijker om te kunnen laten zien dat cybersecurity vanaf het ontwerp is meegenomen. Ontwikkelprocessen volgens IEC 62443-4-1 zijn dan geen technisch detail meer, maar onderdeel van een bredere aanpak rondom veilige industriële automatisering.",
        "Inmiddels passen we deze techniek toe in meerdere projecten. Bijvoorbeeld bij installaties die beveiligd op afstand toegankelijk zijn, met complexe besturingen en een volwaardig dashboard direct vanaf de PLC. De mogelijkheden en de kwaliteit van wat je in één besturing kunt combineren, zijn daarmee flink toegenomen.",
        "Op 15 augustus 2026 treedt de nieuwe Cyberbeveiligingswet in Nederland in werking. Vraag je je af wat dat voor jouw installaties betekent, of loop je met een project rond? Neem gerust contact met ons op. Wij denken graag mee over vraagstukken rondom automatisering, besturing en cybersecurity."
      ]
    },
    {
      "id":           "nieuws-3",
      "datum":        "Augustus 2026",
      "titel":        "Nieuwe cybersecuritywetgeving: wat NIS2 betekent",
      "foto":         "nis2-europese-commissie.jpg",
      "fotoAlt":      "Europese vlaggen voor het gebouw van de Europese Commissie in Brussel",
      "fotoBron":     "Foto: Carl Gruner via Unsplash",
      "samenvatting": "Op 15 augustus 2026 is de Cyberbeveiligingswet in werking getreden, de Nederlandse uitwerking van de Europese NIS2-richtlijn. Ruim 8.000 organisaties in essentiële en belangrijke sectoren krijgen te maken met strengere eisen — en via de keten raakt het veel meer bedrijven dan alleen die groep.",
      "tekst": [
        "Op 15 augustus 2026 is de Cyberbeveiligingswet (Cbw) in werking getreden, de Nederlandse uitwerking van de Europese NIS2-richtlijn. De wet vervangt de oude Wet beveiliging netwerk- en informatiesystemen en verbreedt de reikwijdte fors: naar schatting ruim 8.000 organisaties in essentiële en belangrijke sectoren — van energie, water en zorg tot transport en digitale infrastructuur — vallen er direct onder.",
        "Voor die organisaties draait het om een aantal kernverplichtingen. Er geldt een zorgplicht: cyberrisico's moeten risicogestuurd worden beheerst, met concrete maatregelen zoals risicoanalyse, incidentrespons, back-up en continuïteit, sterke authenticatie, patchbeheer en beveiliging van de toeleveringsketen. Daarnaast is er een meldplicht voor ernstige incidenten bij het NCSC en een registratieplicht. Belangrijk: cybersecurity is daarmee geen IT-detail meer, maar een verantwoordelijkheid tot in de directie.",
        "Het grootste effect zit misschien wel in de keten. Organisaties die onder de wet vallen, zijn verantwoordelijk voor de beveiliging van hun hele toeleveringsketen. Ook als je bedrijf zelf niet onder de Cbw valt, krijg je er dus indirect mee te maken zodra je levert aan een organisatie die er wél onder valt: die zal aantoonbare maatregelen van je vragen, via vragenlijsten, contractuele afspraken of audits. Een leverancier die dat niet kan laten zien, wordt een risico — en dat weegt mee bij een volgende opdracht.",
        "Voor industriële besturing en installaties raakt één maatregel ons vak in het bijzonder: de beveiliging van systemen bij aanschaf, ontwikkeling én onderhoud. Dat betekent beveiliging vanaf het ontwerp meenemen, in plaats van er achteraf iets omheen bouwen. Veilige toegang op afstand, doordachte netwerkscheiding en aantoonbare ontwikkelprocessen — bijvoorbeeld volgens IEC 62443-4-1 — worden zo onderdeel van compliance in plaats van een technisch detail.",
        "Daar ligt precies onze kracht. Wij ontwikkelen besturing waarin beveiliging vanaf het begin is meegenomen: beveiligde installaties die op afstand toegankelijk zijn, met de documentatie die je nodig hebt om in een audit of leveranciersvragenlijst aan te tonen dat het op orde is. Zo houd je niet alleen je eigen systeem veilig, maar versterk je ook je positie in de keten van je opdrachtgevers.",
        "Vraag je je af of de Cyberbeveiligingswet op jouw organisatie van toepassing is, of wat er via je opdrachtgevers op je afkomt? Neem gerust contact met ons op. We denken graag mee over veilige, aantoonbare besturing — van ontwerp tot onderhoud."
      ]
    },
    {
      "datum":        "Juli 2026",
      "titel":        "Allico Systems ontvangt innovatieopdracht bij Kemkens",
      "foto":         "kemkens-pand-oss.jpg",
      "fotoAlt":      "Het pand van Kemkens Brandbeveiliging in Oss",
      "fotoBron":     "Foto: Kemkens Brandbeveiliging",
      "samenvatting": "Na de eerdere samenwerking rondom beveiligd testen op afstand heeft Kemkens Brandbeveiliging Allico Systems een nieuwe innovatieopdracht gegund. Samen zetten we de volgende stap in slim, veilig en op afstand beheerbaar onderhoud van brandbeveiligingsinstallaties."
    }
  ]
}
;