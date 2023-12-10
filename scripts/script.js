// JavaScript Document
console.log("hi");

// for the menu, the onscroll function NEEDS to go before the other queryselectors and functions otherwise it won't work
var navBar = document.querySelector(".menu");
var collapseBar = document.querySelector(".collapsibleMenu");
var burgerIcon = document.querySelector("#burgermenuIcon")
var stickyNav = navBar.offsetTop;

window.onscroll = function (stickyNav) {
    if (scrollY > 0) {
        navBar.classList.add("sticky");
        collapseBar.classList.add("sticky2");
    } else {
        navBar.classList.remove("sticky");
        collapseBar.classList.remove("sticky2");
    }
};

// changing characters and triforce pieces depending on what's selected
var whatCharacter = document.querySelector(".characterPortrait");
var whatTriforce = document.querySelector("#triforceOf");
var whatText = document.querySelector("#characterText");
var extraText = document.querySelector("#characterDescription");

var goLeft = document.querySelector("#arrowLeft");
var goRight = document.querySelector("#arrowRight");

var counter = 0;

var powerButton = document.querySelector(".piecePower");
var wisdomButton = document.querySelector(".pieceWisdom");
var courageButton = document.querySelector(".pieceCourage");

var glossaryCharacters= document.querySelector("#characterButton");
var glossaryItems= document.querySelector("#itemButton");

var characterList = document.querySelector("#portraits");
var itemList = document.querySelector("#items");


// eventlisteners
burgerIcon.addEventListener("click", displayMenu);

goLeft.addEventListener("click", upCharacter);
goRight.addEventListener("click", downCharacter);
powerButton.addEventListener("click", changePower);
wisdomButton.addEventListener("click", changeWisdom);
courageButton.addEventListener("click", changeCourage);

glossaryCharacters.addEventListener("click", displayCharacters);
glossaryItems.addEventListener("click", displayItems);

// funcions
function displayMenu(){
    collapseBar.classList.toggle("hidden");
}

function upCharacter() {
    counter += 1;
    console.log(counter);
    if (counter === 1) {
        changeWisdom();
    } else if (counter === 2) {
        changeCourage();
    } else if (counter === 3) {
        changePower();
        counter = 0;
        console.log(counter);
    }
}

function downCharacter(){
    counter -=1;
    console.log(counter);
    if(counter===0){
        changePower();
    } else if(counter ===1){
        changeWisdom();
    } else if(counter === -1){
        changeCourage();
        counter = 2
    }
}

function changePower() {
    whatTriforce.textContent = "Power";
    console.log("Power change");
    whatCharacter.src = "./images/zeldaAbout/Ganon-2x.png"
    whatText.textContent = "Ganondorf as seen in: The Legend of Zelda: Twilight Princess";
    extraText.textContent = "Ganondorf, the dark lord who seeks to overthrow Hyrule, posesses the Triforce of Power.";
    powerButton.classList.add("piecePowerActive");
    wisdomButton.classList.remove("pieceWisdomActive");
    courageButton.classList.remove("pieceCourageActive");
}

function changeWisdom() {
    whatTriforce.textContent = "Wisdom";
    console.log("Wisdom change");
    whatCharacter.src = "./images/zeldaAbout/Zelda-2x.png";
    whatText.textContent = "Zelda as seen in: The Legend of Zelda: Twilight Princess";
    extraText.textContent = "Zelda, the noble princess of Hyrule, who carries the Triforce of Wisdom.";
    powerButton.classList.remove("piecePowerActive");
    wisdomButton.classList.add("pieceWisdomActive");
    courageButton.classList.remove("pieceCourageActive");
}

function changeCourage() {
    whatTriforce.textContent = "Courage";
    console.log("Courage change");
    whatCharacter.src = "./images/zeldaAbout/Link-2x.png"
    whatText.textContent = "Link as seen in: The Legend of Zelda: Twilight Princess";
    extraText.textContent = "Link, the brave young hero who bears the mark of the Triforce of Courage.";
    powerButton.classList.remove("piecePowerActive");
    wisdomButton.classList.remove("pieceWisdomActive");
    courageButton.classList.add("pieceCourageActive");
}

function displayCharacters(){
    characterList.classList.remove("hidden");
    itemList.classList.add("hidden");
}

function displayItems(){
    characterList.classList.add("hidden");
    itemList.classList.remove("hidden");
}