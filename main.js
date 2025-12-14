const dom = { select: document.querySelector.bind(document), slectAll: document.querySelectorAll.bind(document) };
// Burger logic removed for PaperCSS
// const burger=dom.select('.navbar-burger');const menu=dom.select('.navbar-menu');burger.addEventListener('click',()=>{burger.classList.toggle('is-active');menu.classList.toggle('is-active');});
// dom.select(`.navbar-menu a[href$="${window.location.pathname}"]`).classList.add('is-active');
// Update active link for PaperCSS if needed, logic commented out for now as classes changed

// Sound Effects
// Use relative path for better compatibility
const audio = new Audio('newspaper-foley.mp3');

function playPaperSound() {
    console.log('Attempting to play sound...');
    audio.currentTime = 0;
    audio.play()
        .then(() => console.log('Audio played successfully'))
        .catch(error => console.error('Audio playback failed:', error));
}

// Add sound to hamburger menu
const menuLabel = document.querySelector('.collapsible label');
if (menuLabel) {
    menuLabel.addEventListener('click', playPaperSound);
}

// Add sound to all cards
// Note: Cards are often inside <a> tags, so the click bubbles up.
// We can attach to the card itself.
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', playPaperSound);
});