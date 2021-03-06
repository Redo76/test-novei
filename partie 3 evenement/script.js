// Exercice 1 :

const img1 = document.getElementById("img1");

img1.addEventListener("dblclick", () =>{
    img1.style.width = "400px";
})

/*******************************************************************************************/
// Exercice 2 :

const img2 = document.getElementById("img2");


img2.addEventListener("mouseover", () => {
    img2.setAttribute("src", "evgeny.jpg");
})

img2.addEventListener("mouseout", () => {
    img2.setAttribute("src", "keith.jpg");
})

/*******************************************************************************************/
// Exercice 3 :

addEventListener("keydown", (event) =>{
    if (event.key === "Enter"){
        const champ = document.getElementById("champ").value;
        alert(champ);
    }
})

/*******************************************************************************************/
// Exercice 4 :

const champ2 = document.getElementById("champ2");

champ2.addEventListener("focus", (event) => {
    champ2.style.outlineColor = "green";
})

champ2.addEventListener("blur", (event) => {
    champ2.style.border = "1px solid red";
})

/*******************************************************************************************/
// Exercice 5 :

const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");


function calHyp(adjacent, opposé) {
    return Math.pow(adjacent, 2) + Math.pow(opposé, 2);
}

btn.addEventListener("click", () => {
    let valAdjacent = Math.floor(document.getElementById("adjacent").value);
    let valOpposé = Math.floor(document.getElementById("opposé").value);

    resultat.innerHTML = `L'hypoténuse est égal à ${calHyp(valAdjacent, valOpposé)}`
})