// script.js
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds (2000ms)
}

showSlides(); // Start the slideshow

const word = 'Hundred of local stories await you';
const wordCounter = document.getElementById("word-counter");

for(let i= 0; i< word.length ; i++){
    const span = document.createElement("span");
    span.textContent = word[i];
    wordCounter.appendChild(span);
}
