const flipCardInner = document.getElementById('flipCardInner');
let isFlipped = false;

document.getElementById('flipCard').addEventListener('click', function() {
if (isFlipped) {
flipCardInner.style.transform = 'rotateY(0deg)';
} else {
flipCardInner.style.transform = 'rotateY(180deg)';
}
isFlipped = !isFlipped;
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})