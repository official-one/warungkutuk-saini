// Animasi sederhana saat scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      card.style.opacity = 1;
    }
  });
});
