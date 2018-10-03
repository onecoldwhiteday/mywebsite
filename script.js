let slides = document.querySelectorAll('.slide');

var current = 0;


(function renderSlides() {

    // CONTROLS BLOCK

    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    prev.addEventListener('click', goPrev);
    next.addEventListener('click', goNext);

    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 39 && current != 4) {
            goNext();
        } else if (event.keyCode == 37 && current != 0) {
            goPrev();
        }
    });


    // ACTIONS BLOCK

    slides[0].classList.add('showMe');
    prev.setAttribute('disabled', 'disabled');

    function goNext() {
        prev.removeAttribute('disabled', 'disabled');
        hideCurrent();
        current++;
        if (current == 4) {
            next.setAttribute('disabled', 'disabled');
        }
        showAnother();
    };
    
    function goPrev() {
        next.removeAttribute('disabled', 'disabled');
        hideCurrent();
        current--;
        if (current == 0) {
            prev.setAttribute('disabled', 'disabled');
        };
        showAnother();
    };
    
    // INTERMEDIATE FUNCTIONS

    function hideCurrent() {
        slides[current].classList.add('hideMe');
        slides[current].classList.remove('showMe');
    };
    
    function showAnother() {
        slides[current].classList.add('showMe');
        slides[current].classList.remove('hideMe');
    };
}());

