let slides = document.querySelectorAll('.slide');


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

prev.addEventListener('click', goPrev);

next.addEventListener('click', goNext);

var current = 0;


function renderSlides() {
    slides[0].classList.add('showMe');
}

renderSlides();

function goNext() {
    if (current == 4) {
        next.setAttribute('disabled', 'disabled');
    } else {
    prev.removeAttribute('disabled', 'disabled');
    hideCurrent();
    current++;
    showAnother();
    }
}

function goPrev() {
    if (current == 0) {
        prev.setAttribute('disabled', 'disabled');
    } else {
    next.removeAttribute('disabled', 'disabled');
    hideCurrent();
    current--;
    showAnother();
    }
}

function hideCurrent() {
    slides[current].classList.add('hideMe');
    slides[current].classList.remove('showMe');
}

function showAnother() {
    slides[current].classList.add('showMe');
    slides[current].classList.remove('hideMe');
}