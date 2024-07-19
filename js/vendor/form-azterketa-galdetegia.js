

function ekarriGaldeForm(){
	var galdesorta = 
	{"galderak":	   
	[{"galdera":"Form galde lehena?", 
	"auke1":"Internet Protocol (IP)","auke2":"Uniform Resource Locator (URL) ","auke3":"Hypertext Transfer Protocol (HTTP)",
	"eranfb1":"Erantzun zuzena: Uniform Resource Locator (URL). IPa, Internet Protocol, ordenagailua sarean identifikatzeko protokoloa da. Horrela, nabigatzaileak, IPa baliatuz, zerbitzaria bilatzen du dokumentua bidaltzeko eskatu aurretik.",
	"eranfb2":"Webgunearen helbideari URL esaten diogu eta hiru zati izaten ditu: HTTP komunikazio protokoloa, domeinuaren izena eta deskargatu nahi den baliabidearen izena.",
	"eranfb3":"Erantzun zuzena: Uniform Resource Locator (URL). Hypertext Transfer Protocol (HTTP) edo (HTTPS) komunikazio-protokoloa irudikatzen duen karaktere-katea da. 'S' letrak adierazten du konexioa enkriptatu egiten dela."	},
	
	{"galdera":"Webguneko orrien dokumentuen erreferentziak dira.",
	"auke1":"Hiperestekak","auke2":"Fitxategiak","auke3":"Nabigatzaileak",
	"eranfb1":"Erantzun zuzena: Hiperestekak. Fitxategiak webgunea zein web-orriak osatzeko behar ditugun baliabideak dira: html fitxategiak, irudi fitxategiak, css fitxategiak, audio fitxategiak, bideo fitxategiak...",
	"eranfb2":"Hiperesteka horien bitartez orrialdeen artean nabiga daiteke. Saguarekin esteka batean klik eginez, nabigatzaileak erreferentzia horri jarraitzen dio URLak adierazitako dokumentua pantailan erakusteko.",
	"eranfb3":"Erantzun zuzena: Hiperestekak. Web nabigatzaileak World Wide Web (WWW) saretik hipertestu bidezko dokumentuak eskuratzea ahalbidetzen duen aplikazioa da."	},
	
	{"galdera":"Zeri esaten diogu domeinu webguneez dihardugunean?",
	"auke1":"URL helbideari","auke2":"IP helbideari","auke3":"Zerbitzariaren izenari",
	"eranfb1":"Erantzun zuzena: Zerbitzariaren izenari. URL helbidea webgune bateko baliabide jakin bat deskargatzeko erabiltzen dugun helbidea da.",
	"eranfb3":"Internetek zerbitzari bakoitza izen jakin batekin identifikatzen duen sistema bat erabiltzen du. Izen pertsonalizatu hauek, domeinu deituak, edonork gogora ditzakeen identifikatzaile errazak dira.",
	"eranfb2":"Erantzun zuzena: Zerbitzariaren izenari. IPa zenbakiz osatua dago eta konputagailuari bere hizkuntzan helbidea adierazteko. Domeinua IP helbideari esteka izango litzateke."},
	
	{"galdera":"Interneteko zerbait ikusteko lehenengo lana da",
	"auke1":"Datu basean artikulua bilatzea","auke2":"Zerbitzariari datu basearen berri ematea","auke3":"Nabigatzaileari webgunearen helbidea jakinaraztea",
	"eranfb1":"Erantzun zuzena: Nabigatzaileari webgunearen helbidea (URL) jakinaraztea. Nabigatzaileak helbideari dagokion zerbitzarira joko du eta hark eskaera aztertu, behar dituen testu, irudi, audio etab. bilatuko ditu datu basean, antolatu egingo ditu eta guztiarekin HTML dokumentu bat osatuko du bezeroaren pantailan deskargatzeko.",
	"eranfb3":"Erantzun zuzena: Nabigatzaileari webgunearen helbidea (URL) jakinaraztea. Nabigatzaileak helbideari dagokion zerbitzarira joko du eta hark eskaera aztertu, behar dituen testu, irudi, audio etab. bilatuko ditu datu basean, antolatu egingo ditu eta guztiarekin HTML dokumentu bat osatuko du bezeroaren pantailan deskargatzeko.",
	"eranfb2":"Erantzun zuzena: Nabigatzaileari webgunearen helbidea (URL) jakinaraztea. Nabigatzaileak helbideari dagokion zerbitzarira joko du eta hark eskaera aztertu, behar dituen testu, irudi, audio etab. bilatuko ditu datu basean, antolatu egingo ditu eta guztiarekin HTML dokumentu bat osatuko du bezeroaren pantailan deskargatzeko."},
	
	{"galdera":"URL erlatiboetako hasierako bi puntuek (../)",
	"auke1":"Dokumentua uneko direktorioaren gainekoan dagoela","auke2":"Dokumentua uneko direktorioaren barruan dagoela","auke3":"Dokumentua edozein direktoriotan egon daitekeela",
	"eranfb2":"Erantzun zuzena: Dokumentua uneko direktorioaren gainekoan dagoela. Izan ere URL erlatiboek beheranzko ibilbideaz gain, hierarkiaren gorako bidea ere zehaz dezakete. Horretarako ibilbidearen hasieran bi puntu eta marra inklinatua jarriz (../) ibilbideak gorantz egin dezan (../irudiak/artxiboa.png).",
	"eranfb1":"Erantzun zuzena: Dokumentua uneko direktorioaren gainekoan dagoela. Izan ere URL erlatiboek beheranzko ibilbideaz gain, hierarkiaren gorako bidea ere zehaz dezakete. Horretarako ibilbidearen hasieran bi puntu eta marra inklinatua jarriz (../) ibilbideak gorantz egin dezan (../irudiak/artxiboa.png).",
	"eranfb3":"Erantzun zuzena: Dokumentua uneko direktorioaren gainekoan dagoela. Izan ere URL erlatiboek beheranzko ibilbideaz gain, hierarkiaren gorako bidea ere zehaz dezakete. Horretarako ibilbidearen hasieran bi puntu eta marra inklinatua jarriz (../) ibilbideak gorantz egin dezan (../irudiak/artxiboa.png)."},
	
	{"galdera":"Estekek bihurtzen dute fitxategi multzoa webgune", 
	"auke1":"Ez da egia","auke2":"Egia da","auke3":"Datubaseak egiten du webgunea",
	"eranfb1":"Erantzun zuzena: Egia da. Izan ere, webgune bat sortzeko, orri bakoitzean txertatutako elementuak programatu behar dituzu, eta bertan kokatu erabiltzaileak haietako bakoitzera sartzeko jarrai dezakeen ibilbidea ezartzen duten estekak.",
	"eranfb2":"Erantzun zuzena: Egia da. Izan ere, webgune bat sortzeko, orri bakoitzean txertatutako elementuak programatu behar dituzu, eta bertan kokatu erabiltzaileak haietako bakoitzera sartzeko jarrai dezakeen ibilbidea ezartzen duten estekak.",
	"eranfb3":"Erantzun zuzena: Egia da. Izan ere, webgune bat sortzeko, orri bakoitzean txertatutako elementuak programatu behar dituzu, eta bertan kokatu erabiltzaileak haietako bakoitzera sartzeko jarrai dezakeen ibilbidea ezartzen duten estekak."}
	] };
	
	return galdesorta;
}
