// Function to toggle menu (preserved from your existing code)
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.right === '0%') {
        menu.style.right = '-100%';
    } else {
        menu.style.right = '0%';
    }
}

// Correctly select the carousel elements
const tabs = document.querySelectorAll(".nethard-tab"); // Updated class to match your HTML
const slides = document.querySelectorAll(".nethard-carousel-slide"); // Updated class to match your HTML

let currentIndex = 0; // Tracks the current active slide
let autoSwitchInterval; // For auto-switching slides

// Function to switch slides and tabs
function switchSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index); // Activate the current slide
    });
    tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index); // Activate the corresponding tab
    });
    currentIndex = index; // Update the current index
}

// Function to start auto-switching slides
function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        switchSlide(nextIndex);
    }, 10000); // Switch every 10 seconds
}

// Function to stop auto-switching when user interacts with tabs
function stopAutoSwitch() {
    clearInterval(autoSwitchInterval);
}

// Add click event listeners to tabs
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        stopAutoSwitch(); // Stop auto-switching when a tab is clicked
        switchSlide(index); // Manually switch to the clicked tab's slide
        startAutoSwitch(); // Restart auto-switching after interaction
    });
});

// Ensure smooth scrolling behavior
const carouselContainer = document.querySelector('.nethard-carousel-container');
if (carouselContainer) {
    carouselContainer.style.scrollBehavior = 'smooth';
}

// Initialize the carousel
switchSlide(currentIndex); // Set the first slide as active on load
startAutoSwitch(); // Start auto-switching slides
