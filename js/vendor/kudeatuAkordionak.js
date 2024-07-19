/*Aurkibideetako akordionak ----------------------HASI------ */
function gidadidaFuntzioa(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("gidadidaontzia") == -1) {
	  x.className += " gidadidaontzia";
	} else { 
	  x.className = x.className.replace(" gidadidaontzia", "");
	}
  }
  
var acc = document.getElementsByClassName("accordion");
var i;
  
  for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  var panel = this.nextElementSibling;
	  if (panel.style.display === "block") {
		panel.style.display = "none";
	  } else {
		panel.style.display = "block";
	  }
	});
  }
  /*Aurkibideetako akordionak ----------------------BUKA------ */