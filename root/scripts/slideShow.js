document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active"); 
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].classList.add("active"); // Show the current slide
        // This sets the duration of the slides for 4 seconds allowing for the images to rotate
        setTimeout(showSlides, 4000); 
    }
// This calls the function which displays the slides 
    showSlides(); 
});