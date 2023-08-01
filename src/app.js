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
  "J",
  "Q",
  "K",
  "A"
];

function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return `${randomValue} ${randomSuit}`;
}

function updateCard() {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = getRandomCard();
}

// Actualizar la carta aleatoriamente al cargar la página
updateCard();

// Actualizar la carta aleatoriamente cada vez que el sitio web se actualice
window.addEventListener("load", function() {});
