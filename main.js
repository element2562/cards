const createButtonSelector = document.querySelector("#createCard");
let inputField = document.getElementById("textField");
let selectButton = document.querySelector(".deleteMe");
const createConsistentDelete = () => {
}
const createCardFunction = () => {
    let textInside = inputField.value;
    let cardCreator = document.createElement("div");
    let createTextInside = document.createTextNode(textInside);
    cardCreator.appendChild(createTextInside);
    cardCreator.style.height = "200px";
    cardCreator.style.width = "200px";
    cardCreator.style.border= "2px solid red";
    let holderDiv = document.getElementById("holder");
    holderDiv.appendChild(cardCreator);
    let deleteButton = document.createElement("button");
    let deleteMessage = document.createTextNode("delete");
    deleteButton.appendChild(deleteMessage);
    cardCreator.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
        deleteButton.parentNode.remove(createCardFunction);
        });
    let bckgrndClr = document.createElement("input");
    bckgrndClr.setAttribute("type", "color");
    let bckgrndLabel = document.createTextNode("Background");
    bckgrndClr.appendChild(bckgrndLabel);
    cardCreator.appendChild(bckgrndClr);

    let fontClr = document.createElement("input");
    fontClr.setAttribute("type", "color");
    let fontLabel = document.createTextNode("Font")
    fontClr.appendChild(fontLabel);
    cardCreator.appendChild(fontClr);
    bckgrndClr.addEventListener("change", function(){
        cardCreator.style.backgroundColor = event.target.value;
    });
    fontClr.addEventListener("change", function(){
        cardCreator.style.color = event.target.value;
    })
}

createButtonSelector.addEventListener("click", createCardFunction);

