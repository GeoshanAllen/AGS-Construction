// ========== Navigation Menu Toggle ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== Smooth Scroll Function ==========
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== Carousel Functionality ==========
let carouselIndex = 1;
let carouselAutoplay;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        carouselIndex = 1;
    }
    if (n < 1) {
        carouselIndex = slides.length;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[carouselIndex - 1].classList.add('active');
    dots[carouselIndex - 1].classList.add('active');
}

function changeSlide(n) {
    clearInterval(carouselAutoplay);
    carouselIndex += n;
    showSlide(carouselIndex);
    resetAutoplay();
}

function currentSlide(n) {
    clearInterval(carouselAutoplay);
    carouselIndex = n;
    showSlide(carouselIndex);
    resetAutoplay();
}

function autoplayCarousel() {
    carouselIndex++;
    showSlide(carouselIndex);
}

function resetAutoplay() {
    carouselAutoplay = setInterval(autoplayCarousel, 5000);
}

// Initialize carousel
window.addEventListener('load', () => {
    showSlide(carouselIndex);
    resetAutoplay();
});

// ========== Project Tab Switching ==========
function switchProjectTab(event, tabName) {
    // Hide all project categories
    const categories = document.querySelectorAll('.project-category');
    categories.forEach(cat => cat.classList.remove('active'));

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show the selected category
    const selectedCategory = document.getElementById(tabName);
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// ========== Project Details Data ==========
const projectDetails = {
    proj1: {
        title: 'Modern Residential Complex',
        category: 'Residential',
        description: 'A stunning modern residential complex featuring 150 units with contemporary architecture. The project includes state-of-the-art amenities, green spaces, and a community center.',
        details: 'Location: Downtown District | Completion: 2023 | Area: 45,000 sq ft | Budget: $2.5M'
    },
    proj2: {
        title: 'Luxury Apartments',
        category: 'Residential',
        description: 'Exclusive luxury apartment complex with 80 premium units. Each unit features high-end finishes, panoramic views, and access to exclusive clubhouse and wellness center.',
        details: 'Location: Waterfront | Completion: 2022 | Area: 35,000 sq ft | Budget: $12M'
    },
    proj3: {
        title: 'Family Housing Complex',
        category: 'Residential',
        description: 'A comprehensive family housing complex with 200 spacious units designed for families. Features playgrounds, community gardens, and shopping facilities.',
        details: 'Location: Suburban Area | Completion: 2024 | Area: 55,000 sq ft | Budget: $18M'
    },
    proj4: {
        title: 'Downtown Office Building',
        category: 'Commercial',
        description: 'A 15-story commercial office building in the heart of the downtown business district. Features modern office spaces, retail shops on ground floor, and advanced building management systems.',
        details: 'Location: Business District | Completion: 2023 | Area: 120,000 sq ft | Budget: $8.5M'
    },
    proj5: {
        title: 'Shopping Mall Complex',
        category: 'Commercial',
        description: 'A comprehensive shopping mall featuring 200+ retail stores, dining establishments, and entertainment venues. Total built area includes parking for 2,000 vehicles.',
        details: 'Location: Shopping District | Completion: 2023 | Area: 350,000 sq ft | Budget: $45M'
    },
    proj6: {
        title: 'Tech Park Complex',
        category: 'Commercial',
        description: 'A modern tech park featuring 5 interconnected buildings designed for innovation and collaboration. Includes startups incubator, research facilities, and high-speed connectivity.',
        details: 'Location: Innovation Hub | Completion: 2024 | Area: 200,000 sq ft | Budget: $30M'
    },
    proj7: {
        title: 'Highway Extension Project',
        category: 'Services',
        description: 'Major infrastructure project involving the expansion and modernization of the main highway corridor. Includes new lanes, improved drainage systems, and enhanced safety features.',
        details: 'Location: Regional Highway | Completion: 2024 | Length: 12 km | Budget: $15M'
    },
    proj8: {
        title: 'Bridge Construction',
        category: 'Services',
        description: 'State-of-the-art cable-stayed bridge spanning 1.5 km river crossing. Designed with modern engineering standards and built to withstand seismic activity.',
        details: 'Location: River Valley | Completion: 2024 | Span: 1.5 km | Budget: $25M'
    },
    proj9: {
        title: 'Utility Infrastructure',
        category: 'Services',
        description: 'Comprehensive citywide utility infrastructure project including water supply, sewage systems, and electrical networks. Built with latest environmental standards.',
        details: 'Location: City-wide | Completion: 2024 | Network: 25 km | Budget: $20M'
    }
};

// ========== Modal Functions ==========
const modal = document.getElementById('projectModal');

function openModal(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>Category:</strong> ${project.category}</p>
            <p>${project.description}</p>
            <p><strong>Project Details:</strong></p>
            <p>${project.details}</p>
            <button class="cta-button" onclick="closeModal()" style="width: 100%; margin-top: 1rem;">Close</button>
        `;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// ========== Form Validation and Submission ==========
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    // Don't prevent default - let Formspree handle the submission
    // e.preventDefault();

    // Get form values for client-side validation only
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset error messages
    resetErrors();

    // Validation
    let isValid = true;

    if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters');
        e.preventDefault(); // Prevent submission if validation fails
        isValid = false;
    }

    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        e.preventDefault(); // Prevent submission if validation fails
        isValid = false;
    }

    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
        e.preventDefault(); // Prevent submission if validation fails
        isValid = false;
    }

    // If valid, let the form submit to Formspree
    if (isValid) {
        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });
}

// Real-time validation
document.getElementById('name').addEventListener('blur', () => {
    const name = document.getElementById('name').value.trim();
    if (name.length > 0 && name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters');
    } else {
        document.getElementById('nameError').classList.remove('show');
    }
});

document.getElementById('email').addEventListener('blur', () => {
    const email = document.getElementById('email').value.trim();
    if (email.length > 0 && !isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
    } else {
        document.getElementById('emailError').classList.remove('show');
    }
});

document.getElementById('message').addEventListener('blur', () => {
    const message = document.getElementById('message').value.trim();
    if (message.length > 0 && message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
    } else {
        document.getElementById('messageError').classList.remove('show');
    }
});

// ========== Scroll Animation on Element Visibility ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and project cards on page load
window.addEventListener('load', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// ========== Active Nav Link Highlighting ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========== Initialize ==========
console.log('AGS Construction Services website loaded successfully!');
