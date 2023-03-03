
let num = prompt("Veuillez saisir un chiffre pour calculer son factoriel :");
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
alert("Le factoriel de " + num + " est : " + factorial);