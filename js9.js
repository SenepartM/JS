


function modifierDivsName() {
    var divs = document.getElementsByName("lesdivs");
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerHTML = "Bonjour par méthode getElementsByName";
    }
  }  






function modifierDivsTag() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      divs[i].innerHTML = "Bonjour par méthode getElementsByTagName";
    }
  }  






function modifierDivsClass() {
  var divs = document.getElementsByClassName("lesdivs");
  for (var i = 0; i < divs.length; i++) {
    divs[i].innerHTML = "Bonjour par méthode getElementsByClassName";
  }
}
