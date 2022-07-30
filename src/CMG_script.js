// Анимация поворота карточки при клике
let card = document.querySelectorAll('.card');
function flipCard() {
    this.classList.toggle('is-flip');
}
card.forEach(card => card.addEventListener('click', flipCard));

