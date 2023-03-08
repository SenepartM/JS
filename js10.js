var compteur = 0;
var compteur2 =0;

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("click",UneProcedureQuiChangeLeText);

var MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("mouseover",UneProcedureQuiSurvole);
MaDiv.addEventListener("mouseout", function(evenement) {
  evenement.target.style.visibility = "visible";
});

var MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown",UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement){
    evenement.target.innerHTML = "On a appuyé sur : "+evenement.key;
}

function UneProcedureQuiChangeLeText(evenement){
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois";
    evenement.target.className = "new-css-class-name";
}

function UneProcedureQuiSurvole(evenement){
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" pixel";
    evenement.target.style.visibility = "hidden";
    
}
