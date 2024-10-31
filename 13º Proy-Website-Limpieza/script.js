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