let slideNumber = 1;
showSlides(slideNumber);

// Next/previous controls
function nextPicture(n) {
  showSlides(slideNumber += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pictures");

  if (n > slides.length) {slideNumber = 1}
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNumber-1].style.display = "block";

} 