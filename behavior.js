/**behavior.js
 * Reis Taylor
 * Created March 17th, 2022
 * Last updated March 20th, 2022
 * "How to code a carousel with HTML, CSS, and Javascript from Scratch"
 * By Kevin Powell
 * https://www.youtube.com/watch?v=gBzsE0oieio
 */
//track assigned a reference for the value of the element
const track = document.querySelector('.carousel__track');
/**slides assigned the reference for [0], which holds the value
 * of the first child element ('.carousel__track')
 */
const slides = Array.from(track.children);
//Two reference variables created to access button elements in ProjectOne.html
//document is the root object of the project, and thus, also the root node
const nextButton = document.querySelector('.nextButton');
const backButton = document.querySelector('.backButton');
//assigning reference for width value of the first slide[]
const slideWidth = slides[0].getBoundingClientRect().width;


/**using an enhanced for-each loop to change the
*positioning properties of the slide elements to 
*the left, using a common width dimension value
*and this anonymous function implementation
*/
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'; //[].CSS file.orientation, but what is style.left?
})

/**
 * Declaritive approach adding event Listener
 * 'click' event
 * 'e' object to receive event data
 */
backButton.addEventListener('click', e => { 
    const currentSlide = track.querySelector('.current-slide');
    const backSlide = (currentSlide.previousElementSibling);

    moveToSlide(track, currentSlide, backSlide); //using same function backwards and forwards
});

//when I click 'next' moveToSlide is called with location data
//needs to ensure the carousel moves to the next slide
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    
});

/**
 * 
 * @param {*} track 
 * @param {*} currentSlide 
 * @param {*} targetSlide 
 */
 const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; //track.style.transform?
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide'); //sometimes "next" sometimes "back", always "target"
}