function mafunction(){
    alert("appelAPI");
    fetch('DonneMoiLeContenuDeMonPaypal.php').then((resp) => resp.json()).then(
         function(respJsonData) {
        // respJsonData est la réponse http de notre API.
        console.log(respJsonData);
        UpdateDiv("arenne",respJsonData[0]);
    }).catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error); 
    });
        
        

}


function UpdateDiv(id,text){
    var e = document.getElementById(id).innerHTML = text; 
}

var bouton = document.querySelector("#lebouton");
bouton.addEventListener("click", mafunction);
