// Countdown (unchanged)
function countdown() {
  var seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    const timer = document.getElementById("timer");
    timer.textContent = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.textContent = "";
    }
  }
  tick();
}

// --- Slideshow ---
let slideIndex = 1;

// Run after DOM is ready (also works because we use 'defer' in HTML)
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot (thumbnail) controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots   = document.getElementsByClassName("dot");
  let i;

  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1)             { slideIndex = slides.length; }

  // Hide all slides & remove active class
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("is-active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show the current slide
  slides[slideIndex - 1].classList.add("is-active");
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
}
