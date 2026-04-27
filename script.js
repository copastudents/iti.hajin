const images = document.querySelectorAll("#carousel img");
let index = 0;

function showNextImage() {
  images[index].classList.remove("active");
  
  index = (index + 1) % images.length;
  
  images[index].classList.add("active");
}

// change image every 3 seconds
setInterval(showNextImage, 3000);