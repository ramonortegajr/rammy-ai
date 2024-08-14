// Constants
const ACTIVE_TIME_MS = 5000;
const DEACTIVATION_TIME_MS = 750;

// Variables
var rammy = document.getElementById("rammy");
var responseFrame = document.getElementById("response-frame");
var responseMessage = document.getElementById("response-message");
var userMadeDecision = false;

var jokes = [
    'Gikaon nako ang orasan ba, grabe ka time-consuming.',
    'Ngano nga dili mosalig ang mga siyentipiko sa mga atomo? Kay sila ra ang nagmugna sa tanan!',
    'Unsa imong tawag sa peke nga spaghetti? Impasta.',
    'Giunsa sa penguin ang paghimo sa iyang balay? Gi-igloo niya.',
    'Ngano nga nakadawat ug award ang scarecrow? Kay siya outstanding sa iyang field.',
    'Unsa imong makuha kung imong i-cross ang snowman ug vampire? Frostbite.',
    'Ngano nga dili mag-away ang mga skeleton? Kay wala sila’y guts.',
    'Unsa ang gibuhat sa ubas kung naapil siya? Wala, nagpagawas ra siya ug gamay nga wine.',
    'Giunsa sa mag-uuma ang pagkwenta sa iyang mga baka? Pinaagi sa cowculator.',
    'Unsa ang gisulti sa usa ka dingding sa pikas dingding? Magkita ta sa kanto.',
    'Ngano nga nagmasulob-on ang libro sa matematika? Kay daghan siya ug problema.',
    'Unsay orange ug sounds sama sa parrot? Carrot.',
    'Ngano nga nahulog ang bisikleta? Kay duha siya ka-buntot.',
    'Giunsa nimo pag-organisar ang party sa space? Imo kining planetahon.',
    'Unsa imong tawag sa keso nga dili imo? Nacho cheese.',
    'Ngano nga dili mosuroy ang uban nga magtiayon sa gym? Kay ang uban nga relasyon dili mag-work out.',
    'Giunsa sa iring ang pagpreparar sa iyang steak? Rare.',
    'Unsa ang brown ug sticky? Stick.',
    'Ngano nga namula ang kamatis? Kay nakita niya ang salad dressing.',
    'Unsa imong makuha kung imong i-cross ang snowman ug iro? Frostbite.',
    'Ngano nga nagmasulob-on ang libro sa matematika? Kay daghan siya ug problema.',
    'Unsa imong tawag sa alligator nga nagsuot ug vest? Investigator.',
    'Giunsa nimo pagpakilos sa tissue? Ibutang nimo ug gamay nga boogie.',
    'Unsa ang gisulti sa janitor paglukso niya gikan sa closet? Supplies!',
    'Ngano nga gibugnaw ang computer? Kay gibyaan niya ang Windows niya nga bukas.',
    'Unsa ang paboritong prutas sa vampire? Nectarine.',
    'Ngano nga nagdala ang golfer ug duha ka pares nga pantalon? Kung makakuha siya ug hole in one.',
    'Giunsa nimo pagdakop ang squirrel? Mosaka ka sa kahoy ug magpakasama ka sa nut.',
    'Ngano nga nagdala ang golfer ug duha ka pares nga pantalon? Kung makakuha siya ug hole in one.',
    'Giunsa nimo pag-organisar ang party sa space? Imo kining planetahon.',
    'Ngano nga nagmasulob-on ang libro sa matematika? Kay daghan siya ug problema.',
    'Ngano nga nag-suot ug bell ang mga baka? Kay dili mo trabaho ang ilang mga horns.',
    'Giunsa paglihok sa penguin sa iyang balay? Gi-igloo niya.',
    'Ngano nga dili mosalig ang mga siyentipiko sa hagdang? Kay pirmi sila nga nagbuhat ug dautan.',
    'Ngano nga dili magsulat gamit ang broken pencil? Wala’y pulos.',
    'Giunsa sa mag-uuma ang pagkwenta sa iyang mga baka? Pinaagi sa cowculator.',
    'Unsa imong tawag sa boomerang nga dili mobalik? Stick.',
    'Ngano nga nakadawat ug promotion ang scarecrow? Kay siya outstanding sa iyang umahan.',
    'Unsa ang gisulti sa saging pag-adto niya sa doktor? Dili ko maayo.',
    'Ngano nga niadto ang mushroom sa party? Kay siya usa ka fungi.',
    'Unsa ang gisulti sa usa ka dagat sa pikas dagat? Wala, nag-wave lang sila.',
    'Ngano nga gikumpuni ang belt? Kay gipugos niya ang pantalon.',
    'Unsa imong tawag sa dinosaur nga daghang bokabularyo? Thesaurus.',
    'Ngano nga nahulog ang walis? Kay siya nasweep.',
    'Ngano nga gikapoy ang computer pag-abot niya sa balay? Kay daghan siya ug mga tab nga open.',
    'Giunsa sa penguin ang paghimo sa iyang balay? Gi-igloo niya.',
    'Unsa ang labing maayo bahin sa Switzerland? Wala ko kahibalo, pero ang bandera kay dako nga plus.',
    'Ngano nga nagdala ang golfer ug duha ka pares nga pantalon? Kung makakuha siya ug hole in one.',
    'Giunsa nimo pagpakilos sa tissue? Ibutang nimo ug gamay nga boogie.',
    'Unsa imong tawag sa bunos sa mga iring? Meowtain.',
    'Unsa ang green ug nagkanta? Elvis Parsley.',
    'Ngano nga nahulog ang bisikleta? Kay duha siya ka-buntot.',
    'Unsa ang gisulti sa Atlantic Ocean sa Estados Unidos? Wala, nag-wave lang siya.',
    'Ngano nga nagmasulob-on ang libro sa math? Kay daghan siya ug problem.',
    'Ngano nga gibugnaw ang computer? Kay gibyaan niya ang Windows niya nga open.',
    'Unsa imong tawag sa isda nga walay mata? Fsh.',
    'Giunsa sa snowman ang paglihok? Pinaagi sa pag-ride sa “icicle.”',
    'Unsa ang brown ug sticky? Stick.',
    'Ngano nga namula ang kamatis? Kay nakita niya ang salad dressing.',
    'Ngano nga dili mosalig ang mga siyentipiko sa hagdang? Kay pirmi sila nga nagbuhat ug dautan.',
    'Giunsa nimo pag-organisar ang party sa space? Imo kining planetahon.',
    'Unsa ang gibuhat sa ubas kung naapil siya? Wala, nagpagawas ra siya ug gamay nga wine.',
    'Ngano nga nahulog ang bisikleta? Kay duha siya ka-buntot.',
    'Giunsa nimo pag-organisar ang party sa space? Imo kining planetahon.',
    'Unsa ang gisulti sa kape sa asukal? Imo akong kinabuhi nga tam-is.',
    'Unsa imong tawag sa alligator nga nagsuot ug vest? Investigator.',
    'Ngano nga dili mosuroy ang uban nga magtiayon sa gym? Kay ang uban nga relasyon dili mag-work out.',
    'Ngano nga nagdala ang golfer ug duha ka pares nga pantalon? Kung makakuha siya ug hole in one.',
    'Ngano nga nag-suot ug bell ang mga baka? Kay dili mo trabaho ang ilang mga horns.',
    'Giunsa nimo pagdakop ang squirrel? Mosaka ka sa kahoy ug magpakasama ka sa nut.'
];


var lifehacks = [
    'Ang kape nga init makatabang sa pagdali sa imong adlaw, pero ayaw kalimot sa pagpalamig sa dili pa mag-abot ang init.',
    'Kung maglisod ka ug katulog, suwayi ug magbasa ug libro nga dili ka ganahan. Moabot ra ang tulog.',
    'Ang paglikay sa traffic? Siguroha nga sayo ka moabot sa imong destinasyon, or better yet, maglakaw nalang ka.',
    'Ang pagtago sa imong snacks gikan sa imong mga kauban sa balay? Himoa nga secret stash sa taas sa cabinet.',
    'Kung nagduda ka sa imong kahimtang, tan-awa kung ang imong sapatos nagkahiusa ba. Baka di na nimo mabantayan.',
    'Kung gusto ka mohumok ang imong biskwit, ibutang kini sa usa ka silya sa sulod sa usa ka tinapay.',
    'Ang paghimo sa lista sa imong mga tasks makatabang sa pag-organize sa imong adlaw. Pero ayaw kalimot nga i-check ang lista!',
    'Sa dihang magluto ka, i-prepare ang tanan nga ingredients sa wala pa magsugod. Dali ra ang proseso ug makalikay ka sa stress.',
    'Kung gusto ka mag-save sa kuryente, gamita ang natural nga kahayag sa adlaw imbis sa ilawom sa panimalay.',
    'Ang pagdula sa mga board games sa pamilya makahatag ug bonding moments ug makapalayo sa gadgets.',
    'Ang pagtuon sa bag-ong abilidad usa ka maayo nga paagi sa pag-killing sa oras ug pag-expand sa imong knowledge.',
    'Kung gusto ka magbawas sa timbang, pangitaa ang mga healthy alternatives sa imong paborito nga pagkaon.',
    'Ang paggamit sa timer sa kusina makatabang sa paglikay sa overcooking sa imong mga pagkaon.',
    'Kung naay duga sa imong mga baso, sulayi ang pagbutang ug asin ug tubig sa sulod ug ipa-abot ug pila ka minuto.',
    'Ang pagpanglimpyo sa imong cellphone screen ug keyboard makatabang sa pagpalayo sa mga bacteria.',
    'Kung nagproblema ka sa pag-organize sa imong mga papeles, gamita ang mga label aron mas dali nimo kini mahibal-an.',
    'Ang paghatag sa imong mga panit ug adlaw-adlaw nga pag-atiman makatabang sa pagpanalipod sa imong panit gikan sa mga kagaw.',
    'Kung gusto ka mag-relax, mag-set aside ug oras para sa pagmeditate o pag-yoga sa imong adlaw.',
    'Ang pagplano sa imong mga pagkaon sa semana makatabang sa pag-save sa oras ug kwarta sa grocery.',
    'Kung naa kay mga plano nga importante, isulat kini sa kalendaryo aron dili ka malimot.',
    'Ang paggamit sa mga reusable nga mga bag makatabang sa pag-reduce sa plastik nga basura.',
    'Kung gusto ka magpabilin nga hydrated, dad-a ang imong reusable nga botelya bisan asa ka moadto.',
    'Ang pagbutang sa paborito nimong musika sa background makatabang sa pag-improve sa imong mood ug productivity.',
    'Kung gusto ka mag-save sa kwarta sa mga paborito nimong cafe, pangitaa ang mga coupons o discount vouchers.',
    'Ang paglimpyo sa imong balay kada semana makatabang sa paglikay sa dako nga trabaho sa paglimpyo sa katapusan sa bulan.',
    'Kung magluto ka ug mga lutong pagkaon, siguroha nga i-prepare ang mga ingredients sa dili pa magsugod sa pagluto.',
    'Ang pagbutang sa mga fresh herbs sa imong mga pagkaon makatabang sa pagdugang sa lami ug nutrients.',
    'Kung naay problema sa imong internet connection, usahay ang pag-restart sa modem makatabang.',
    'Ang pag-gamit sa mga app sa pag-track sa imong budget makatabang sa pag-monitor sa imong mga gasto.',
    'Kung mag-dala ka ug lunch sa trabaho o eskwela, gamita ang insulated nga lunch bag aron magpabilin nga fresh ang imong pagkaon.',
    'Ang pag-ampo sa imong mga adlaw-adlaw nga gikinahanglan makatabang sa pag-set sa imong priorities.',
    'Kung magamit ka ug wireless nga earbuds, siguroha nga i-charge kini sa dili pa magamit.',
    'Ang pag-dala sa imong reusable nga shopping bag makatabang sa paglikay sa mga single-use plastic bags.',
    'Kung maghimo ka ug mga kape, usahay ang pag-add ug pinch sa asin makatabang sa pag-enhance sa flavor.',
    'Ang pag-set sa mga reminders sa imong phone makatabang sa paghinumdum sa mga importanteng butang.',
    'Kung gusto ka mag-improve sa imong fitness, pangitaa ang mga exercise routines nga nindot ug madali ra buhaton.',
    'Ang pag-always nga pag-verify sa imong mga passwords makatabang sa pagpanalipod sa imong online accounts.',
    'Kung gusto ka mag-save sa panahon sa pagluto, gamita ang mga pre-chopped vegetables.',
    'Ang pag-organize sa imong closet makatabang sa pag-save sa oras sa pagpangita sa imong mga sinina.',
    'Kung naay mga unwanted nga files sa imong computer, pangitaa ang mga tools sa pag-delete ug mga duplicates.',
    'Ang pag-keep sa imong car clean makatabang sa pag-maintain sa good condition sa imong vehicle.',
    'Kung gusto ka mag-improve sa imong skills sa pag-pinta, pangitaa ang mga tutorials online.',
    'Ang pag-assign sa mga specific tasks sa mga adlaw makatabang sa pag-organize sa imong week.',
    'Kung mag-bake ka, i-preheat ang oven sa wala pa magsugod sa pag-mix sa imong mga ingredients.',
    'Ang pag-gamit sa mga reusable nga straw makatabang sa pag-reduce sa plastik nga basura.',
    'Kung gusto ka mag-save sa kuryente, unplug ang mga appliances nga dili gigamit.',
    'Ang pag-butang sa mga reminder sa imong phone makatabang sa pag-remember sa mga deadlines.',
    'Kung magkaon ka ug mga fruits, siguroha nga hugasan kini sa dili pa i-consume.',
    'Ang pag-set sa mga goals sa imong adlaw makatabang sa pag-improve sa imong productivity.',
    'Kung naay mga spills sa imong carpet, i-blot dayon gamit ang cloth para ma-absorb ang liquid.',
    'Ang pag-gamit sa mga vacuum bags sa pag-store sa imong seasonal clothes makatabang sa pag-save sa space.',
    'Kung mag-study ka, pangitaa ang mga lugar nga hilom ug wala’y distraksyon.',
    'Ang pag-organize sa imong workspace makatabang sa pag-improve sa imong focus ug efficiency.',
    'Kung mag-tanom ka ug mga tanum, siguroha nga magdilig ka kada adlaw para sa maayo nga pagtubo.',
    'Ang pag-keep sa mga grocery receipts makatabang sa pag-monitor sa imong mga gastos.',
    'Kung maglakaw ka sa madugay nga distansya, pangitaa ang comfortable nga sapatos para sa maayo nga support.',
    'Ang pag-allocate ug time sa imong self-care makatabang sa pag-maintain sa imong mental health.',
    'Kung maghimo ka ug mga presentations, gamita ang mga visuals para mas dali masabtan ang imong mensahe.',
    'Ang pag-laundry sa imong sinina kada semana makatabang sa pag-maintain sa cleanliness sa imong wardrobe.',
    'Kung magluto ka ug mga pagkaon nga nagkinahanglan ug marinating, i-prep kini sa gabii para sa maayo nga flavor.',
    'Ang pag-check sa weather forecast makatabang sa pag-plano sa imong outdoor activities.',
    'Kung mag-ayo ka ug mga butang, siguroha nga gamiton ang husto nga tools para sa mas efficient nga pagtrabaho.',
    'Ang pagbutang sa mga labels sa imong pantry makatabang sa pag-organize sa imong mga ingredients.',
    'Kung mag-research ka, pangitaa ang mga reliable nga sources para sa accurate nga impormasyon.',
    'Ang pag-maintain sa imong health records makatabang sa pag-monitor sa imong wellness.',
    'Kung magkuha ka ug mga photos, i-check ang lighting ug angles para sa nindot nga resulta.',
    'Ang pag-prepare sa imong mga gamit sa gabii sa wala pa ang adlaw makatabang sa pag-save sa oras sa buntag.',
    'Kung mag-plant ka ug herbs, gamita ang mga pots nga adunay drainage para malikayan ang overwatering.',
    'Ang pag-gamit sa mga timers sa imong tasks makatabang sa pag-manage sa imong oras.',
    'Kung mag-browse ka sa internet, siguroha nga dili ka ma-overwhelmed sa daghang information.',
    'Ang pag-organize sa imong digital files makatabang sa pag-save sa oras sa pag-pangita sa mga documents.',
    'Kung magdula ka ug sports, siguroha nga mag-warm up ug mag-cool down para malikayan ang injuries.',
    'Ang pag-butang sa mga emergency numbers sa imong phone makatabang sa pag-prepare sa mga unexpected nga sitwasyon.',
    'Kung mag-travel ka, gamita ang mga travel apps para sa pag-plan ug pag-book sa imong mga flights ug accommodation.',
    'Ang pag-keep sa imong kitchen organized makatabang sa pag-improve sa imong cooking experience.',
    'Kung maghimo ka ug mga DIY projects, siguroha nga magbasa ug mga instructions ug tutorials para sa husto nga resulta.',
    'Ang pag-gamit sa mga reusable containers sa pag-store sa imong leftovers makatabang sa pag-reduce sa basura.',
    'Kung mag-exercise ka, pangitaa ang mga routines nga enjoyable para sa mas sustainable nga fitness journey.',
    'Ang pag-check sa expiry dates sa imong mga food products makatabang sa pag-avoid sa food waste.',
    'Kung magbasa ka sa libro, i-set aside ang specific nga oras kada adlaw para sa uninterrupted nga pagtuon.',
    'Ang pag-laminate sa mga importanteng documents makatabang sa pag-preserve sa ilang condition.',
    'Kung mag-gamit ka ug social media, siguroha nga mag-set ug time limits para dili ma-overuse.',
    'Ang pag-assign sa mga specific tasks sa mga adlaw makatabang sa pag-improve sa imong time management.',
    'Kung magbantay ka sa mga plants, i-monitor ang moisture level sa soil para sa husto nga pagdilig.',
    'Ang pag-gamit sa mga recipe apps makatabang sa pag-discover ug mga bag-ong pagkaon nga lutuon.',
    'Kung magbuhat ka ug mga exercise routines, i-track ang imong progress para sa mas maayo nga motivation.',
    'Ang pag-allocate sa specific nga oras sa pag-research makatabang sa pagkuha ug maayo nga resulta.',
    'Kung maghimo ka ug mga plans, gamita ang mga planners ug calendars para sa organized nga schedule.',
    'Ang pag-set sa mga priorities sa imong daily tasks makatabang sa pag-achieve sa imong mga goals.',
    'Kung magbuhat ka ug mga DIY repairs, i-follow ang mga safety guidelines para malikayan ang accidents.',
    'Ang pag-keep sa imong car maintenance records makatabang sa pag-monitor sa condition sa imong vehicle.',
    'Kung mag-try ka ug mga bag-ong activities, i-embrace ang mga opportunities para sa personal growth.',
    'Ang pag-organize sa imong mga gadgets ug accessories makatabang sa pag-save sa oras sa pag-pangita.',
    'Kung maghimo ka ug mga gift ideas, i-consider ang mga personal preferences sa recipient para sa memorable nga regalo.',
    'Ang pag-check sa mga reviews sa mga products makatabang sa pagpili sa mga high-quality items.',
    'Kung mag-set ka ug goals, i-break down ang mga goals sa smaller steps para sa mas manageable nga proseso.',
    'Ang pag-keep sa imong workspace clean makatabang sa pag-improve sa imong focus ug efficiency.',
    'Kung maghimo ka ug mga budget plans, i-monitor ang imong expenses ug savings para sa financial stability.',
    'Ang pag-desisyon sa imong mga meal plans sa wala pa ang semana makatabang sa pag-save sa oras sa pag-grocery.',
    'Kung magbuhat ka ug mga creative projects, i-explore ang mga new techniques para sa mas innovative nga resulta.',
    'Ang pag-set sa mga reminders sa imong phone makatabang sa pag-manage sa imong daily responsibilities.',
    'Kung mag-study ka, i-allocate ang specific nga oras kada adlaw para sa focused nga pagtuon.',
    'Ang pag-gamit sa mga travel organizers makatabang sa pag-keep sa imong mga gamit nga magpabilin nga organized.',
    'Kung maghimo ka ug mga meal prep, i-prepare ang mga ingredients sa dili pa magsugod sa cooking para sa efficiency.',
    'Ang pag-gamit sa mga sleep aids makatabang sa pag-improve sa kalidad sa imong pagkatulog.',
    'Kung magbuhat ka ug mga home improvements, i-allocate ang budget ug resources para sa efficient nga resulta.',
    'Ang pag-set sa mga clear boundaries sa imong personal ug professional life makatabang sa pag-maintain sa balance.',
    'Kung maghimo ka ug mga gift lists, i-consider ang mga preferences sa recipient para sa personalized nga regalo.',
    'Ang pag-keep sa imong finances organized makatabang sa pag-monitor sa imong spending ug saving habits.',
    'Kung magbuhat ka ug mga online courses, i-set aside ang specific nga oras kada adlaw para sa focused learning.',
    'Ang pag-organize sa imong mga digital files makatabang sa pag-save sa oras sa pag-pangita sa mga importanteng documents.',
    'Kung mag-prepare ka ug mga meals, i-consider ang mga healthy alternatives sa imong mga recipes.',
    'Ang pag-assign sa mga specific tasks sa imong daily schedule makatabang sa pag-improve sa imong time management.',
    'Kung magbuhat ka ug mga home organization projects, i-keep ang focus sa functionality ug aesthetics.',
    'Ang pag-monitor sa imong fitness progress makatabang sa pag-maintain sa motivation ug consistency.',
    'Kung magbuhat ka ug mga budget plans, i-review ang imong expenses ug savings sa regular nga intervals.',
    'Ang pag-set sa mga daily goals makatabang sa pag-achieve sa imong mga long-term objectives.',
    'Kung magbuhat ka ug mga DIY home projects, i-follow ang mga safety protocols para sa husto nga execution.',
    'Ang pag-gamit sa mga time management techniques makatabang sa pag-improve sa imong productivity.',
    'Kung magbuhat ka ug mga creative endeavors, i-explore ang mga innovative ideas para sa unique nga resulta.'
];

var securityhacks = [
    'Gamit ug lig-on nga password para sa imong mga account.',
    'Ayaw i-share ang imong password sa bisan kinsa.',
    'I-enable ang two-factor authentication sa imong mga account.',
    'Update kanunay ang imong operating system ug mga aplikasyon.',
    'Gamit ug antivirus software ug i-update kini kanunay.',
    'Ayaw pagklik sa mga link nga gikan sa mga dili kaila.',
    'Siguroha nga imong tan-awon ang URL sa website sa dili pa mo-login.',
    'Gamit ug firewall aron maprotektahan ang imong network.',
    'Ayaw pag-download ug mga file gikan sa mga dili kasaligan nga sources.',
    'Regular nga backup sa imong mga importante nga file.',
    'Paglikay sa paggamit sa public Wi-Fi alang sa sensitibong impormasyon.',
    'Gamit ug secure nga koneksyon sa internet (VPN) kung magtrabaho gikan sa gawas.',
    'I-verify ang identity sa mga tawo nga nangayo sa imong personal nga impormasyon.',
    'Gamit ug mga secure nga website (https) sa pagbayad online.',
    'Ayaw pag-install ug mga unnecessary nga browser plugins.',
    'Hawa sa imong computer sa dili ginagamit, ug i-lock kini.',
    'Ayaw pagtuo sa mga emails nga nag-awhag sa pag-input sa imong password.',
    'Siguroha nga imong mobile phone lock screen adunay PIN o fingerprint protection.',
    'Regular nga tan-awa ang imong bank statements ug credit reports.',
    'Gamit ug strong nga passwords para sa imong email ug social media accounts.',
    'Pag-amping sa imong personal nga impormasyon sa social media.',
    'I-delete ang mga email nga naglakip ug suspicious attachments.',
    'Paglikay sa paggamit sa mga public computer alang sa imong online transactions.',
    'Ayaw paghatag sa imong impormasyon sa bisan kinsa nga nagpasabot nga kinahanglan nila kini aron sa ilang trabaho.',
    'Gamit ug password manager aron mapadali ang pagdumala sa imong mga password.',
    'I-monitor ang imong mga online accounts alang sa mga unusual nga activity.',
    'Hawa sa mga social media account sa dili ginagamit.',
    'I-scan ang mga USB drive o external storage devices alang sa malware.',
    'Siguroha nga imong i-update ang mga apps ug software sa imong mga device.',
    'Gamit ug encryption sa imong mga sensitibong file.',
    'Pagbantay sa mga phishing scams nga nag-awhag sa pag-click sa mga link.',
    'I-verify ang security settings sa imong mga online accounts.',
    'Paglikay sa paggamit sa mga default nga passwords.',
    'Gamit ug unique nga password alang sa matag account.',
    'Ayaw pag-save sa imong passwords sa imong browser.',
    'Gamit ug secure nga payment methods sa online shopping.',
    'Pagbantay sa imong mga online transactions ug activity.',
    'I-check ang mga security settings sa imong social media profiles.',
    'Ayaw pag-download ug mga file nga gikan sa mga unknown sources.',
    'Pag-andam ug security plan alang sa imong pamilya.',
    'Gamit ug mga security tools ug software sa imong mga device.',
    'I-avoid ang paggamit sa public Wi-Fi sa pagsulod sa imong bank account.',
    'Gamit ug mga reliable nga website ug serbisyo.',
    'Pag-amping sa mga free software ug applications nga imong gi-download.',
    'I-update ang imong security questions ug answers.',
    'Gamit ug mga strong nga encryption protocols sa imong network.',
    'Pagbantay sa mga suspicious nga email addresses ug senders.',
    'I-disconnect ang imong device sa internet kung dili kini ginagamit.',
    'Siguroha nga imong i-secure ang imong home network.',
    'Gamit ug strong nga password para sa imong Wi-Fi network.',
    'I-monitor ang paggamit sa imong online accounts ug devices.',
    'Paglikay sa paggamit sa mga shared computers alang sa personal nga transactions.',
    'Gamit ug mga security plugins sa imong browser.',
    'I-avoid ang paggamit sa mga unsecured nga Wi-Fi networks.',
    'Pag-update sa imong operating system ug software regular.',
    'Gamit ug mga secure nga web browsers nga may built-in security features.',
    'Ayaw pag-share sa imong personal nga impormasyon sa mga random nga websites.',
    'Pagbantay sa imong mga online profile ug settings.',
    'I-secure ang imong email account gamit ang two-factor authentication.',
    'Gamit ug strong nga PIN alang sa imong mobile devices.',
    'Pag-amping sa mga scam calls ug messages nga nag-awhag sa paghatag sa imong impormasyon.',
    'Siguroha nga imong gi-check ang mga permissions sa apps nga imong gi-install.',
    'I-avoid ang paggamit sa mga unsecured nga websites alang sa sensitive nga impormasyon.',
    'Pag-amping sa mga links nga gi-share sa social media.',
    'I-scan ang imong computer ug mobile devices alang sa malware regularly.',
    'Paglikay sa paggamit sa mga outdated nga software ug applications.',
    'Gamit ug mga secure nga password recovery options.',
    'Pag-amping sa mga software nga gi-download gikan sa mga third-party sources.',
    'I-disable ang mga unused nga accounts ug services.',
    'Gamit ug mga security updates gikan sa mga reputable nga sources.',
    'I-monitor ang imong network traffic alang sa mga unusual nga activity.',
    'Pagbantay sa imong mga online purchases ug transactions.',
    'Gamit ug mga privacy settings sa imong social media accounts.',
    'I-scan ang imong mga email attachments alang sa malware.',
    'Pag-amping sa mga online quizzes ug surveys nga nangayo sa imong personal nga impormasyon.',
    'I-verify ang mga websites nga imong gi-access sa pag-check sa URL.',
    'Gamit ug mga secure nga cloud storage services.',
    'Pag-amping sa mga email nga nag-awhag sa pag-click sa mga links.',
    'I-update ang imong security software alang sa latest protection.',
    'Pag-amping sa imong mga digital footprints ug impormasyon nga gi-share online.',
    'Gamit ug mga reliable nga VPN services sa pag-access sa internet.',
    'Paglikay sa paggamit sa mga public computer alang sa imong financial transactions.',
    'I-avoid ang paggamit sa mga unsecured nga websites alang sa imong login credentials.',
    'Pag-monitor sa imong credit report alang sa mga fraudulent nga transactions.',
    'I-check ang mga security settings sa imong mga online accounts.',
    'Paglikay sa paggamit sa mga shared Wi-Fi networks alang sa sensitive nga impormasyon.',
    'I-avoid ang paggamit sa mga insecure nga email services.',
    'Gamit ug mga secure nga file sharing services.',
    'Pag-amping sa mga links nga gi-share sa imong mga contacts.',
    'I-secure ang imong mga digital files gamit ang strong encryption.',
    'Pag-amping sa mga email nga nag-awhag sa pag-click sa mga links.',
    'Gamit ug mga trusted nga antivirus programs.',
    'Pagbantay sa imong online identity ug impormasyon.',
    'I-disable ang mga unnecessary nga features sa imong mga device.',
    'Pag-amping sa imong mga online subscriptions ug services.',
    'Gamit ug mga security settings sa imong mobile apps.',
    'I-check ang mga privacy policies sa websites nga imong gi-access.',
    'Paglikay sa paggamit sa mga default settings sa imong mga device.',
    'Gamit ug mga secure nga authentication methods sa imong mga accounts.',
    'Pag-amping sa mga software updates ug patches nga gi-install.',
    'Pag-organize sa imong mga passwords ug security settings.',
    'Gamit ug multi-factor authentication kung available.',
    'Pag-amping sa imong mga online backups ug recovery plans.',
    'I-avoid ang pag-click sa mga pop-up ads o mga unsolicited nga offers.',
    'Pagbantay sa imong mga device sa pag-gamit sa public charging stations.',
    'Gamit ug mga security measures sa imong home network nga router.',
    'Pag-amping sa mga settings sa imong internet browser.',
    'I-avoid ang paggamit sa mga pirated nga software.',
    'Pag-monitor sa imong mga social media accounts alang sa mga potential security threats.',
    'Gamit ug mga secure nga methods sa pag-transfer sa mga sensitive nga data.',
    'Pagbantay sa imong mga online communications alang sa mga signs sa phishing.',
    'I-secure ang imong mga online transactions gamit ang secure payment gateways.',
    'Pag-amping sa paggamit sa mga third-party apps nga nag-access sa imong personal nga impormasyon.',
    'Paglikay sa paggamit sa mga shared devices sa pag-access sa imong online accounts.',
    'Gamit ug mga encryption tools sa pag-protect sa imong mga email communications.',
    'Pag-amping sa imong mga digital identity ug credentials.',
    'I-update ang imong security software regular ug i-configure ang mga settings.',
    'Pagbantay sa mga suspicious nga activities sa imong online accounts.',
    'Gamit ug mga secure nga backup solutions sa pag-preserve sa imong data.',
    'Pag-amping sa mga online forums ug chatrooms alang sa mga potential security risks.',
    'I-disable ang mga unnecessary nga services ug features sa imong mga devices.',
    'Pagbantay sa imong mga password storage solutions ug i-update kini kung kinahanglan.',
    'Gamit ug mga firewalls sa pag-secure sa imong network connections.',
    'Pag-amping sa mga settings sa imong cloud storage services.',
    'I-monitor ang mga updates ug patches sa imong mga software ug hardware.',
    'Paglikay sa paggamit sa mga unsecured nga public Wi-Fi networks.',
    'Gamit ug mga password managers nga reputable sa pag-manage sa imong mga passwords.',
    'Pag-amping sa mga changes sa imong online account settings ug security'
];


// Activate rammy and set timeout for awaiting a command.
function activateRammy() {
    userMadeDecision = false;
    rammy.classList.remove("inactive");
    rammy.classList.add("active");
    setTimeout(function() {
        if (!userMadeDecision) {
            rammy.classList.remove("active");
            rammy.classList.add("inactive");
            setTimeout(function() {
                rammy.classList.remove("inactive");
            }, 750);
        }
    }, 5000);
}

function getSecurity() {
    var index = Math.floor((Math.random() * securityhacks.length) - 1);
	responseMessage.innerText = securityhacks[index];
	showResponse();
}
function getTime() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
	responseMessage.innerText = "Siguro panahon na para makakuha ka og relo? Nagbinuang ra ko... Dili. Tinuod... Ang oras kay " + time + ".";
	showResponse();
}
function getDate() {
	var today = new Date();
	var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    responseMessage.innerText = "Ang kalendaryo usa ka maayong pamuhunan, kabalo ka; bisan ang imong computer naay kalendaryo! Tungod kay nangutana ka, karon adlaw kay " + date + ".";
	showResponse();
}
function tellJoke() {
	var index = Math.floor((Math.random() * jokes.length) - 1);
	responseMessage.innerText = jokes[index];
	showResponse();
}
function searchGoogle() {
	deactivateRammy();
	window.open("https://www.google.com/", "_blank");
}
function showlifehacks() {
    var index = Math.floor((Math.random() * lifehacks.length) - 1);
	responseMessage.innerText = lifehacks[index];
	showResponse();
}

function showResponse() {
    responseFrame.style.display = 'block';
    setTimeout(function() {
        responseFrame.style.display = 'none';
    }, 50000);
}

