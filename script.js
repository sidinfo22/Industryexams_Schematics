function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.right === '0%') {
        menu.style.right = '-100%';
    } else {
        menu.style.right = '0%';
    }
}
const tabs = document.querySelectorAll(".tab");
const slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;

// Function to switch slides
function switchSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
});
tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
});
currentIndex = index;
}

// Auto switch tabs every 10 seconds
setInterval(() => {
const nextIndex = (currentIndex + 1) % slides.length;
switchSlide(nextIndex);
}, 10000);

// Add click event to tabs
tabs.forEach((tab, index) => {
tab.addEventListener("click", () => switchSlide(index));
});

