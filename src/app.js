/* eslint-disable */
import "bootstrap";
import "./styles.css";
const palo = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
const valores = [
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
  const randomPalo = palo[Math.floor(Math.random() * palo.length)];
  const randomValores = valores[Math.floor(Math.random() * valores.length)];
  return `${randomValores} ${randomPalo}`;
}

function cartaActualizar() {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = cartaRandom();
}

// Actualizar la
cartaActualizar();

// Actualizar al f4
window.addEventListener("load", function() {});
