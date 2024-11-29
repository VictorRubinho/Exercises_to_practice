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

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


// Para Video

const flipCardInnerVideo = document.getElementById('flipCardInnerVideo');
let isFlippedVideo = false;

document.getElementById('flipCardVideo').addEventListener('click', function() {
if (isFlippedVideo) {
flipCardInnerVideo.style.transform = 'rotateY(0deg)';
} else {
flipCardInnerVideo.style.transform = 'rotateY(180deg)';
}
isFlippedVideo = !isFlippedVideo;
});

