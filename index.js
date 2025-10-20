const btn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu")
const bars = btn.querySelectorAll("span")
const typingElement = document.getElementById("typing-text");
const heroText = "Look Sharp. Feel Confident.";
const loaderText = "FreshFade";
const loaderEl = document.getElementById("loader-text");
let loaderIndex = 0;
let heroIndex = 0;

function typeLoader() {
  if (loaderIndex < loaderText.length) {
    loaderEl.textContent += loaderText.charAt(loaderIndex);
    loaderIndex++;
    setTimeout(typeLoader, 200);
  } else {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("opacity-0");
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        typeHero()
      }, 500);
    }, 800);
  }
}

function typeHero() {
    if (heroIndex < heroText.length) {
      typingElement.textContent += heroText.charAt(heroIndex);
      heroIndex++;
      setTimeout(typeHero, 100);
    }
  }

window.addEventListener("load", typeLoader);


btn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
})

  

  AOS.init({
    duration: 1000, 
    offset: 100, 
    once: true, 
  });