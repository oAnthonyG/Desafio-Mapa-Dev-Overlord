const buttonArrowAdvance = document.querySelector(".btn-advance");
const buttonArrowBack = document.querySelector(".btn-back");
const cards = document.querySelectorAll(".main-card");
let currentCard = 0;

function hideCardSelecteds() {
  const cardSelected = document.querySelector(".selected");
  cardSelected.classList.remove("selected");
}

function showCard(indiceCartao) {
  cards[indiceCartao].classList.add("selected");
}

buttonArrowAdvance.addEventListener("click", function () {
  if (currentCard === cards.length - 1) return;

  hideCardSelecteds();

  currentCard++;
  showCard(currentCard);
});

buttonArrowBack.addEventListener("click", function () {
  if (currentCard === 0) return;

  hideCardSelecteds();

  currentCard--;
  showCard(currentCard);
});
