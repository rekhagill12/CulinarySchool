// script.js


window.addEventListener('scroll', function() {
    var element = document.querySelector('.scroll-left');
    var position = element.getBoundingClientRect();

    // If the element is in the viewport, add the animation class
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('slideInFromLeft');
    } else {
        // Remove the animation class if the element is not in the viewport
        element.classList.remove('slideInFromLeft');
    }
});
