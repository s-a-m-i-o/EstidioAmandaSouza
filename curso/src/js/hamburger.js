const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    console.log("Botão clicado!");
    nav.classList.toggle("active");
});
