//DADOS
const dado1 = document.getElementById("dado");
const dado2 = document.getElementById("dado2");
function dados() {
    dado1.textContent = Math.floor(Math.random() * 6 + 1);
    dado2.textContent = Math.floor(Math.random() * 6 + 1);
}
//CONTADOR
const numeroDiv = document.getElementById("cont");
let Contador = 1
function addCount() {
    numeroDiv.textContent = Contador++;
}
//COLOR
const colored = document.getElementById("colorDiv");
colored.style.userSelect = "none";
function changeColor() {
    colored.style.backgroundColor = "#" + Math.floor(Math.random() * 999999);
    colored.style.color = "white";
}
colored.addEventListener("click", changeColor);
colored.addEventListener("mouseenter", changeColor);
colored.addEventListener("mouseleave", changeColor);
//CREACIÓN
const section = document.getElementById("newdivs-section")
function createDiv() {
    let newdiv = document.createElement("div");
    let title = document.getElementById("creation-title");
    section.appendChild(newdiv);
    title.scrollIntoView();
}
document.getElementById("touch-me-more").addEventListener("click", createDiv);
//DESTRUCCIÓN
function deleteDiv() {
    section.removeChild(section.lastChild);
}
document.getElementById("touch-me-not").addEventListener("click", deleteDiv);
//ADDITION
function addToDiv() {
    const divs = section.children;
    let message = prompt("Add a message...",);
    let index = Math.floor(Math.random() * divs.length);
    divs[index].textContent = message;
}
document.getElementById("touch-me-maybe").addEventListener("click", addToDiv);

//COLOR PT2
function newColour() {
    let newcolor = prompt("choose a new colour to be...", "1.Orange; 2.Purple; 3.Green");
    switch (newcolor) {
        case "1":
            this.style.backgroundColor = "#ee964b";
            break;
        case "2":
            this.style.backgroundColor = "#240F3B";
            this.style.color = "white";
            break;
        case "3":
            this.style.backgroundColor = "#87B854";
            break;
        default:
            alert("No se ha podido cambiar de color");
    }
} /*idk exactly why yet, but if I try the inline onclick attribute method
instead of an event listener it just won't change colour*/ 
document.getElementById("paint-me1").addEventListener("click", newColour);
document.getElementById("paint-me2").addEventListener("click", newColour);
document.getElementById("paint-me3").addEventListener("click", newColour);
document.getElementById("paint-me4").addEventListener("dblclick", newColour);

