/* eslint-disable */
import "bootstrap";
import "./styles.css";
const suits = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
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
  "Ass"
];

function cartaRandom() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return `${randomValue} ${randomSuit}`;
}

function cartaActualizar() {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = cartaRandom();
}

// Actualizar la carta aleatoriamente al cargar la página
cartaActualizar();

// Actualizar la carta aleatoriamente cada vez que el sitio web se actualice
window.addEventListener("load", function() {});
