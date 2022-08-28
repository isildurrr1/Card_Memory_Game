// Анимация поворота карточки при клике
let card = document.querySelectorAll('.card');
let winText = document.querySelector('.win');
let hasFlippedCard = false;
let firstCard, secondCard;
let count = 0;
function flipCard() {
    this.classList.add('is-flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}
card.forEach(card => card.addEventListener('click', flipCard));

// Заполнение картинок в случайном порядке

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function changeImage() {
    let arr1 = ["../image/1.png", "../image/2.png", "../image/3.png", "../image/4.png", "../image/5.png",
        "../image/6.png", "../image/7.png", "../image/8.png"]
    let arr2 = ["../image/1.png", "../image/2.png", "../image/3.png", "../image/4.png", "../image/5.png",
        "../image/6.png", "../image/7.png", "../image/8.png"]
    shuffle(arr1);
    shuffle(arr2);
    for (let i = 1; i <= 8; i++) {
        document.getElementById("pic_"+i).src=arr1[i-1];
        document.getElementById("card_"+i).dataset.src=arr1[i-1];
    }
    for (let i = 9, ind = 0; i <= 16; i++, ind++) {
        document.getElementById("pic_"+i).src=arr2[ind];
        document.getElementById("card_"+i).dataset.src=arr2[ind];
    }
}
changeImage()
// проверка на совпадение
function checkForMatch() {
    if (firstCard.dataset.src === secondCard.dataset.src) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    setTimeout(function(){
        firstCard.classList.add('flip');
        secondCard.classList.add('flip');
    }, 1000);
    count++;
    console.log(count);
    if (count === 8) {
        setTimeout(function(){
            winText.textContent = "Congratulations, you won!"
        }, 1000);
    }
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('is-flip');
        secondCard.classList.remove('is-flip');
    }, 800);
}
