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
// JavaScript for Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll(".carousel-item1");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    let currentIndex = 0;

    const updateCarousel = () => {
        carouselItems.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex);
        });
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    // Swipe functionality for mobile devices
    let startX = 0;
    const container = document.querySelector(".carousel-container1");

    container.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    container.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        if (startX - endX > 50) {
            // Swipe left (next)
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        } else if (endX - startX > 50) {
            // Swipe right (prev)
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        }
    });

    // Initialize the first item as active
    updateCarousel();
});
// Carousel Functionality
document.querySelectorAll('.unique-carousel-34').forEach((carousel) => {
    const items = carousel.querySelectorAll('.carousel-item-34');
    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');

    // Set Button Classes and Text
    nextBtn.className = 'carousel-button-34 next';
    prevBtn.className = 'carousel-button-34 prev';
    nextBtn.innerHTML = '&#10095;';
    prevBtn.innerHTML = '&#10094;';

    // Add Buttons to Carousel
    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'carousel-buttons-34';
    buttonsWrapper.append(prevBtn, nextBtn);
    carousel.appendChild(buttonsWrapper);

    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    // Button Event Listeners
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    // Initialize Carousel
    updateCarousel();
});

// Interactive Section Highlights
document.querySelectorAll('.unique-content-34, .unique-content-77, .unique-content-89, .unique-content-52').forEach((section) => {
    section.addEventListener('mouseenter', () => {
        section.style.boxShadow = '0 8px 20px rgba(0, 150, 0, 0.2)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});
document.querySelectorAll('.unique-content-34, .unique-content-77, .unique-content-89, .unique-content-52, .unique-content-99').forEach((section) => {
    section.addEventListener('mouseenter', () => {
        section.style.boxShadow = '0 8px 20px rgba(0, 150, 0, 0.2)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
let sslIndex = 0;
const sslSlides = document.querySelectorAll('.ssl-slide-87');
const nextBtn = document.querySelector('.next-87');
const prevBtn = document.querySelector('.prev-87');

if (sslSlides.length && nextBtn && prevBtn) {
    function updateSSLCarousel() {
        sslSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === sslIndex);
        });
    }

    function sslNext() {
        sslIndex = (sslIndex + 1) % sslSlides.length;
        updateSSLCarousel();
    }

    function sslPrev() {
        sslIndex = (sslIndex - 1 + sslSlides.length) % sslSlides.length;
        updateSSLCarousel();
    }

    nextBtn.addEventListener('click', sslNext);
    prevBtn.addEventListener('click', sslPrev);

    let sslInterval = setInterval(sslNext, 5000); // Auto-switch

    // Pause on hover
    const sslCarouselWrapper = document.querySelector('.ssl-carousel-wrapper-87');
    if (sslCarouselWrapper) {
        sslCarouselWrapper.addEventListener('mouseenter', () => clearInterval(sslInterval));
        sslCarouselWrapper.addEventListener('mouseleave', () => {
            sslInterval = setInterval(sslNext, 5000);
        });
    }

    updateSSLCarousel();
} else {
    console.error("SSL carousel elements not found!");
}
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-content-78'); // Select all tabs
    const prevButton = document.querySelector('.prev-78'); // Previous button
    const nextButton = document.querySelector('.next-78'); // Next button

    if (!tabs.length) {
        console.error('No tabs found. Ensure .tab-content-78 elements exist in the DOM.');
        return;
    }

    let currentTab = 0; // Track the active tab index
    let tabInterval; // Interval for auto-switching

    // Function to update the visible tab
    function switchTab(direction) {
        // Remove active class from current tab
        tabs[currentTab].classList.remove('active');

        // Calculate the next tab index (loop back if necessary)
        currentTab = (currentTab + direction + tabs.length) % tabs.length;

        // Add active class to the new tab
        tabs[currentTab].classList.add('active');
    }

    // Auto-switch tabs every 10 seconds
    function autoSwitchTabs() {
        tabInterval = setInterval(() => {
            switchTab(1); // Move to the next tab
        }, 10000);
    }

    // Event listeners for previous and next buttons
    prevButton.addEventListener('click', () => {
        clearInterval(tabInterval); // Stop auto-switching
        switchTab(-1); // Move to the previous tab
        autoSwitchTabs(); // Restart auto-switching
    });

    nextButton.addEventListener('click', () => {
        clearInterval(tabInterval); // Stop auto-switching
        switchTab(1); // Move to the next tab
        autoSwitchTabs(); // Restart auto-switching
    });

    // Initialize the first tab and start auto-switching
    tabs[currentTab].classList.add('active'); // Ensure the first tab is visible
    autoSwitchTabs();
});

// Carousel for Interactive Database Insights
let currentInsight = 0;
const insights = document.querySelectorAll('.insight-slide-104');

function updateInsights() {
    insights.forEach((insight, index) => {
        insight.classList.remove('active');
        if (index === currentInsight) {
            insight.classList.add('active');
        }
    });
}

function switchInsight(direction) {
    currentInsight = (currentInsight + direction + insights.length) % insights.length;
    updateInsights();
}

// Auto-Switch Insights Every 10 Seconds
let insightInterval = setInterval(() => {
    switchInsight(1);
}, 10000);
console.log("Automation & AI webpage enhancements loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".insights-tab-8921");
    const contents = document.querySelectorAll(".tab-content-8921");
    let currentIndex = 0;

    // Function to activate a specific tab
    function activateTab(index) {
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add("active-tab-8921");
                contents[i].classList.add("active-content-8921");
            } else {
                tab.classList.remove("active-tab-8921");
                contents[i].classList.remove("active-content-8921");
            }
        });
    }

    // Add click events to all tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            currentIndex = index;
            activateTab(index);
        });
    });

    // Auto-cycle tabs every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % tabs.length;
        activateTab(currentIndex);
    }, 5000); // Change tab every 5 seconds
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".carousel-card");
    let currentIndex = 0;

    function cycleShaking() {
        // 1) Remove .shaking from ALL cards
        cards.forEach(card => card.classList.remove("shaking"));

        // 2) Add .shaking to ONLY the current card
        cards[currentIndex].classList.add("shaking");

        // 3) Move to the next card (cycle back after last card)
        currentIndex = (currentIndex + 1) % cards.length;

        // 4) Call cycleShaking again after 5 seconds
        setTimeout(cycleShaking, 5000);
    }

    // Start the infinite cycle
    cycleShaking();
});
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop(); // Get the current page filename
  const menuItems = document.querySelectorAll(".menu-list a"); // Select all links in the menu

  menuItems.forEach(item => {
    if (item.getAttribute("href") === currentPath) {
      item.classList.add("active"); // Add the 'active' class to the matching link
    }
  });
});





  // Grab all slides and the control buttons
  const slides492 = document.querySelectorAll('.carousel-slide-492');
  const nextBtn492 = document.querySelector('.next-btn-492');
  const prevBtn492 = document.querySelector('.prev-btn-492');

  let currentIndex492 = 0;
  const totalSlides492 = slides492.length;

  // Function to show a particular slide
  function showSlide492(index) {
    // Remove active class from all slides
    slides492.forEach(slide => slide.classList.remove('active-slide-492'));
    // Add active class to the targeted slide
    slides492[index].classList.add('active-slide-492');
  }

  // Next button: move forward one slide
  nextBtn492.addEventListener('click', () => {
    currentIndex492 = (currentIndex492 + 1) % totalSlides492;
    showSlide492(currentIndex492);
  });

  // Prev button: move backward one slide
  prevBtn492.addEventListener('click', () => {
    // Adding totalSlides492 ensures we never go negative
    currentIndex492 = (currentIndex492 - 1 + totalSlides492) % totalSlides492;
    showSlide492(currentIndex492);
  });

  // Auto-advance the slides every 5 seconds
  setInterval(() => {
    currentIndex492 = (currentIndex492 + 1) % totalSlides492;
    showSlide492(currentIndex492);
  }, 5000);

  // Initialize by showing the first slide
  showSlide492(currentIndex492);




document.addEventListener("DOMContentLoaded", function() {
  // Get all slide elements
  const slides = document.querySelectorAll(".baseline-slide-842");
  let currentSlideIndex = 0;

  // A utility function to show only the current slide, hide all others
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  // Display the first slide when the page loads
  showSlide(currentSlideIndex);

  // Rotate to the next slide every 5 seconds
  setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0; // wrap around to the first slide
    }
    showSlide(currentSlideIndex);
  }, 5000); // 5000ms = 5 seconds
});
