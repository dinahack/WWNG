// Sample Events Data (Fallback - will be overridden by localStorage)
let eventsData = [
    {
        id: 1,
        title: "Community Picnic",
        date: "2024-05-15",
        time: "12:00 PM",
        location: "Central Park",
        description: "Join us for a fun community picnic with food, games, and great company!",
        category: "social",
        image: "assets/images/placeholder-1.jpg"
    },
    {
        id: 2,
        title: "Financial Planning Workshop",
        date: "2024-05-20",
        time: "6:00 PM",
        location: "Community Center",
        description: "Learn tips for budgeting and financial planning from local experts.",
        category: "educational",
        image: "assets/images/placeholder-2.jpg"
    },
    {
        id: 3,
        title: "Neighborhood Cleanup Day",
        date: "2024-05-22",
        time: "9:00 AM",
        location: "Various Locations",
        description: "Help us make our neighborhood beautiful by joining our cleanup event.",
        category: "charity",
        image: "assets/images/placeholder-3.jpg"
    },
    {
        id: 4,
        title: "Summer Sports Day",
        date: "2024-06-01",
        time: "10:00 AM",
        location: "Sports Field",
        description: "Participate in friendly sports competitions and outdoor activities.",
        category: "sports",
        image: "assets/images/placeholder-4.jpg"
    },
    {
        id: 5,
        title: "Health & Wellness Seminar",
        date: "2024-06-05",
        time: "3:00 PM",
        location: "Community Center",
        description: "Learn about healthy living, nutrition, and fitness from health professionals.",
        category: "educational",
        image: "assets/images/placeholder-5.jpg"
    },
    {
        id: 6,
        title: "Food Drive",
        date: "2024-06-10",
        time: "8:00 AM",
        location: "Community Center",
        description: "Help us collect food donations for families in need.",
        category: "charity",
        image: "assets/images/placeholder-6.jpg"
    }
];

// Initialize Events Display
function initializeEvents() {
    loadEventsFromStorage();
    displayHomeEvents();
    setupEventFilters();
}

// Display Events on Home Page
function displayHomeEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;

    const upcomingEvents = eventsData.slice(0, 3);
    
    container.innerHTML = upcomingEvents.map(event => `
        <div class="event-card">
            <div class="event-date">${formatDate(event.date)}</div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                <p><i class="fas fa-clock"></i> ${event.time}</p>
                <p>${event.description}</p>
                <a href="events.html" class="read-more">Learn More →</a>
            </div>
        </div>
    `).join('');
}

// Display All Events on Events Page
function displayAllEvents(filter = 'all') {
    const container = document.getElementById('events-list');
    if (!container) return;

    const filteredEvents = filter === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.category === filter);

    container.innerHTML = filteredEvents.map(event => `
        <div class="event-card">
            <div class="event-date">${formatDate(event.date)}</div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <p><strong>Date & Time:</strong> ${event.date} at ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Category:</strong> <span style="background-color: #f0f0f0; padding: 5px 10px; border-radius: 4px; display: inline-block;">${event.category}</span></p>
                <p>${event.description}</p>
                <button class="btn btn-primary" onclick="registerEvent(${event.id})">Register</button>
            </div>
        </div>
    `).join('');
}

// Setup Event Filters
function setupEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            // Display filtered events
            const filter = e.target.getAttribute('data-filter');
            displayAllEvents(filter);
        });
    });
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Load Events from Admin Storage
function loadEventsFromStorage() {
    const storedEvents = localStorage.getItem('communityEvents');
    if (storedEvents) {
        try {
            eventsData = JSON.parse(storedEvents);
        } catch (e) {
            console.log('Using default events');
        }
    }
}

// Register for Event
function registerEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    alert(`Thank you for registering for "${event.title}"! We'll send you more details soon.`);
}

// Setup Gallery Filters
function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filters .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');

            const filter = e.target.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
}

// Handle Newsletter Subscription
function setupNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form, .newsletter-form-sidebar');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
                form.reset();
            }
        });
    });
}

// Handle Volunteer Form
function setupVolunteerForm() {
    const form = document.getElementById('volunteer-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const firstName = formData.get('first-name');
        alert(`Thank you for registering, ${firstName}! We'll be in touch soon with more information.`);
        form.reset();
    });
}

// Handle Contact Form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        alert(`Thank you for your message, ${name}! We'll get back to you as soon as possible.`);
        form.reset();
    });
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Highlight Active Navigation Link
function updateActiveNavLink() {
    const links = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    initializeEvents();
    setupGalleryFilters();
    setupNewsletter();
    setupVolunteerForm();
    setupContactForm();
    setupSmoothScroll();
    updateActiveNavLink();

    // Add placeholder images if not found
    document.querySelectorAll('img[src*="placeholder"]').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="20"%3EPlaceholder Image%3C/text%3E%3C/svg%3E';
        });
    });
});

// Listen for events updated from admin panel
window.addEventListener('eventsUpdated', () => {
    loadEventsFromStorage();
    displayHomeEvents();
});

// Listen for photos updated from admin panel
window.addEventListener('photosUpdated', () => {
    location.reload();
});

// Add Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.about-card, .event-card, .link-card, .opportunity-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        eventsData,
        formatDate,
        registerEvent
    };
}
