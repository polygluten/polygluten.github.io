const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
];

let currentImageIndex = 0;
const imageElement = document.getElementById("slideshow-image");

function changeImage() {
  // Add transitioning class for special effects
  imageElement.classList.add('transitioning');
  
  // Add scale and blur effect during transition
  imageElement.style.transition = "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
  imageElement.style.opacity = "0";
  imageElement.style.transform = "scale(1.05)";
  imageElement.style.filter = "blur(3px)";

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Preload the next image for smoother transition
    const nextImage = new Image();
    nextImage.onload = () => {
      imageElement.src = images[currentImageIndex];
      
      // Reset and animate back to normal state
      setTimeout(() => {
        imageElement.style.opacity = "1";
        imageElement.style.transform = "scale(1)";
        imageElement.style.filter = "blur(0px)";
        
        // Remove transitioning class after animation completes
        setTimeout(() => {
          imageElement.classList.remove('transitioning');
        }, 600);
      }, 50);
    };
    nextImage.src = images[currentImageIndex];
  }, 600);
}

// Start slideshow when page loads
window.addEventListener("load", () => {
  setInterval(changeImage, 10000); // Change image every 10 seconds
});
