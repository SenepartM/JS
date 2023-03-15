var contenuAPI=document.getElementById("contenuAPI");
function mafunction() {
    fetch("API5.php", {
        method: 'POST',
        body: JSON.stringify((
        val1 = "toto",
        val2 = "tata"))
        }
      )
      .then(response => response.json())
      .then(function(data){
        contenuAPI.innerHTML = data;
        alert(data);
      })
      .catch(function(error){
        console.error(error);
      });
    }