console.log("Kaixo kontsola, zelan?");

var app = {};
var galderak =  function(datos){
    console.log(datos);
}
document.getElementById("results").innerHTML="Divaren barruan nago";

/**galdepila .js fitxategia da eta bariable bat bezala erabiltzen da */ 
var ekarri = ekarriGaldera(); 
console.log(ekarri.galderak[2].auke1);
console.log(ekarri.galderak[2].auke2);
console.log(ekarri.galderak[2].auke3);
document.getElementById('results').innerHTML = ekarri.galderak[2].eranfb3; 

/**galdepila .js fitxategia da eta bariable bat bezala erabiltzen da  */
