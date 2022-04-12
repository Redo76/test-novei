// Exercice 1 :

const number1 = 1;

// alert(calcul(6));

function calcul(nbr){
    return nbr * 2 - 3
}

/*******************************************************************************************************************/
// Exercice 2 :

let val1 = 22;
let val2 = 12;

// alert(reste(val1, val2));

function reste(nbr1, nbr2){
    return  nbr1 % nbr2
}

/*******************************************************************************************************************/
// Exercice 3 :
let valeurEntree = prompt("Entrez une valeur")

// alert(calcul(valeurEntree));

function calcul(nbr){
    return nbr * 2 - 3;
}

/*******************************************************************************************************************/
// Exercice 4 :

function fois10(element){
    console.log(element * 10);
}

/*******************************************************************************************************************/
// Exercice 5 :

const string = "Hello World !"
const p = document.querySelector("p");

function compter(txt){
    return txt.length;
}

p.innerHTML = compter(string);

/*******************************************************************************************************************/
// Exercice 6 :

const h1 = document.getElementById("titre");
const paragraphes = document.querySelectorAll("p");

h1.style.textTransform = "uppercase";
paragraphes[1].style.textTransform = "lowercase";
paragraphes[2].style.color = "red";
paragraphes[3].style.visibility = "hidden";



