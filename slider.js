'use strict'
const slider = document.querySelector('#slider');
let sliderSelection = document.querySelectorAll('.slider__section');
let sliderSelectionLast = sliderSelection[sliderSelection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSelectionLast);

function next() {
    let sliderSelectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSelectionFirst);
        slider.style.marginLeft = "-100%";
    },500)
    slider__btn.style.backgroundColor ="rgba(255, 255, 255, 0.24)"; 
}
function prev() {
    let sliderSelection = document.querySelectorAll('.slider__section');
let sliderSelectionLast = sliderSelection[sliderSelection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSelectionLast);
        slider.style.marginLeft = "-100%";
    },500)
}
btnRight.addEventListener('click', function () {
    next();
    

});
btnLeft.addEventListener('click', function () {
    prev();
});
setInterval(() => {
   next(); 
},4000);