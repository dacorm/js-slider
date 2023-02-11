const images = document.querySelectorAll('.slider__image');
const buttonLeft = document.querySelector('.slider__button');
const buttonRight = document.querySelector('.button_second');

let position = 0;

if (position === 0) {
    buttonLeft.setAttribute('style', 'display: none');
}

function moveImagesLeft() {
    position += 310;
    if (position === 0) {
        buttonLeft.setAttribute('style', 'display: none');
    }
    images.forEach((image) => {
        image.setAttribute('style', `transform: translateX(${position}px)`);
    })
}

function moveImagesRight() {
    position -= 310;
    if (position < -2170) {
        position = 0;
    }
    if (position === 0) {
        buttonLeft.setAttribute('style', 'display: none');
    }
    images.forEach((image) => {
        image.setAttribute('style', `transform: translateX(${position}px)`);
    })
    buttonLeft.setAttribute('style', 'display: block');
}

buttonRight.addEventListener('click', moveImagesRight);
buttonLeft.addEventListener('click', moveImagesLeft);