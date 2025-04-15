// Get all images with class "foto"
const images = document.querySelectorAll('.foto, .foto2, .foto3, .foto4');

// Add event listeners to each image
images.forEach(image => {
    image.addEventListener('mouseenter', function() {
        // Start animation when mouse enters
        
        image.classList.remove('slide-up-down');
    });

    image.addEventListener('mouseleave', function() {
        // Stop animation when mouse leaves
        image.classList.add('slide-up-down');
        
    });
});
