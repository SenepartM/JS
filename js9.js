/*           9.1 Name 


function modifierDivs() {
    var divs = document.getElementsByName("lesdivs");
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerHTML = "Bonjour par méthode getElementsByName";
    }
  }  

//*/





/*             9.2 TagName  
function modifierDivs() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerHTML = "Bonjour par méthode getElementsByTagName";
    }
  }  
//*/




/*          9.3 ClassName 
function modifierDivs() {
  var divs = document.getElementsByClassName("lesdivs");
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = "Bonjour par méthode getElementsByClassName";
  }
}

  
//*/