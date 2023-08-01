/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const suits = ["Corazones", "Picas", "Clubes", "Diamantes"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jota",
  "Reina",
  "Rey",
  "As"
];

function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return `${randomValue} de ${randomSuit}`;
}

function updateCard() {
  const cardElement = document.getElementById("card");
  cardElement.textContent = getRandomCard();
}

// Actualizar la carta aleatoriamente al cargar la página
updateCard();

// Actualizar la carta aleatoriamente cada vez que el sitio web se actualice
window.addEventListener("load", function() {
  setInterval(updateCard, 5000); // Actualizar cada 5 segundos (puedes ajustar el tiempo según tus necesidades)
});
