const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
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
  setInterval(changeImage, 5000); // Change image every 5 seconds
});

// Date widget functionality
function updateDateTime() {
  const now = new Date();

  const dateOptions = {
    weekday: "short",
    day: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const currentDate = now.toLocaleDateString("en-US", dateOptions);
  const currentTime = now.toLocaleTimeString("en-US", timeOptions);

  document.getElementById("current-date").textContent = currentDate;
  document.getElementById("current-time").textContent = currentTime;
}

// Update date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
