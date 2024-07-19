/*Formularioak atalari dagokion azterketaren kudeaketa. */

var emaitzatzi1, emaitzatzi2, emaitzatzi3, emaitzatzi4, emaitzatzi5, emaitzatzi6;
var auke1,auke2,auke3;

function hasiFormAzter(){
	var itaunak = ekarriGaldeForm();
	
	document.getElementById('atzibatena').innerHTML = itaunak.galderak[0].galdera; 
	document.getElementById('atzibatbaga').innerHTML = itaunak.galderak[0].auke1; 
	document.getElementById('atzibatbiga').innerHTML = itaunak.galderak[0].auke2; 
	document.getElementById('atzibathiga').innerHTML = itaunak.galderak[0].auke3; 
	
	document.getElementById('atzibiarena').innerHTML = itaunak.galderak[1].galdera;
	document.getElementById('atzibibaga').innerHTML = itaunak.galderak[1].auke1; 
	document.getElementById('atzibibiga').innerHTML = itaunak.galderak[1].auke2; 
	document.getElementById('atzibihiga').innerHTML = itaunak.galderak[1].auke3; 	
	
	document.getElementById('atziruarena').innerHTML = itaunak.galderak[2].galdera; 
	document.getElementById('atzihirubaga').innerHTML = itaunak.galderak[2].auke1; 
	document.getElementById('atzihirubiga').innerHTML = itaunak.galderak[2].auke2; 
	document.getElementById('atzihiruhiga').innerHTML = itaunak.galderak[2].auke3; 
	
	document.getElementById('atzilauarena').innerHTML = itaunak.galderak[3].galdera; 
	document.getElementById('atzilaubaga').innerHTML = itaunak.galderak[3].auke1; 
	document.getElementById('atzilaubiga').innerHTML = itaunak.galderak[3].auke2; 
	document.getElementById('atzilauhiga').innerHTML = itaunak.galderak[3].auke3; 
	
	document.getElementById('atzibostarena').innerHTML = itaunak.galderak[4].galdera; 
	document.getElementById('atzibostbaga').innerHTML = itaunak.galderak[4].auke1; 
	document.getElementById('atzibostbiga').innerHTML = itaunak.galderak[4].auke2; 
	document.getElementById('atzibosthiga').innerHTML = itaunak.galderak[4].auke3; 
	
	document.getElementById('atziseiarena').innerHTML = itaunak.galderak[5].galdera; 
	document.getElementById('atziseibaga').innerHTML = itaunak.galderak[5].auke1; 
	document.getElementById('atziseibiga').innerHTML = itaunak.galderak[5].auke2; 
	document.getElementById('atziseihiga').innerHTML = itaunak.galderak[5].auke3; 

	var botbukatu = document.getElementById("atziados");
	botbukatu.addEventListener("click", adostuAtzizkia);
	botbukatu.disabled = false;

	}
	
function adostuAtzizkia(){
	
	var itaunak = ekarriGaldeForm();

	if(document.getElementById("radiobat1").checked){	
		document.getElementById("eranBagatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[0].eranfb1; }
	if(document.getElementById("radiobat2").checked){
		document.getElementById("eranBagatzi").innerHTML = "<label style='color:green';>BIKAIN GAZTE! </label>"+itaunak.galderak[0].eranfb2; }
	if(document.getElementById("radiobat3").checked){	
		document.getElementById("eranBagatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[0].eranfb3; }

	if(document.getElementById("radiobi1").checked){	
		document.getElementById("eranBigatzi").innerHTML = "<label style='color:green';>BIKAIN GAZTE! </label>"+itaunak.galderak[1].eranfb2; }
	if(document.getElementById("radiobi2").checked){
		document.getElementById("eranBigatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[1].eranfb1; }
	if(document.getElementById("radiobi3").checked){	
		document.getElementById("eranBigatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[1].eranfb3; }

	if(document.getElementById("radiohiru1").checked){	
		document.getElementById("eranHigatzi").innerHTML = "<label style='color:red';> EZ DA ZUZENA! </label>"+itaunak.galderak[2].eranfb1;}
	if(document.getElementById("radiohiru2").checked){
		document.getElementById("eranHigatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[2].eranfb2; }
	if(document.getElementById("radiohiru3").checked){	
		document.getElementById("eranHigatzi").innerHTML = "<label style='color:green';>BIKAIN GAZTE! </label>"+itaunak.galderak[2].eranfb3; }
	
	if(document.getElementById("radiolau1").checked){	
		document.getElementById("eranLagatzi").innerHTML = "<label style='color:red';> EZ DA ZUZENA! </label>"+itaunak.galderak[3].eranfb2;}
	if(document.getElementById("radiolau2").checked){
		document.getElementById("eranLagatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[3].eranfb1; }
	if(document.getElementById("radiolau3").checked){	
		document.getElementById("eranLagatzi").innerHTML = "<label style='color:green';>BIKAIN GAZTE! </label>"+itaunak.galderak[3].eranfb3; }

	if(document.getElementById("radiobos1").checked){	
		document.getElementById("eranBogatzi").innerHTML = "<label style='color:green';> BIKAIN GAZTE! </label>"+itaunak.galderak[4].eranfb3;}
	if(document.getElementById("radiobos2").checked){
		document.getElementById("eranBogatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[4].eranfb1; }
	if(document.getElementById("radiobos3").checked){	
		document.getElementById("eranBogatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[4].eranfb2; }

	if(document.getElementById("radiosei1").checked){	
		document.getElementById("eranSegatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[5].eranfb1;}
	if(document.getElementById("radiosei2").checked){
		document.getElementById("eranSegatzi").innerHTML = "<label style='color:green';> BIKAIN GAZTE! </label>"+itaunak.galderak[5].eranfb3;}
	if(document.getElementById("radiosei3").checked){	
		document.getElementById("eranSegatzi").innerHTML = "<label style='color:red';>EZ DA ZUZENA! </label>"+itaunak.galderak[5].eranfb2; }
	
}


