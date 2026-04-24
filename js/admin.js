// Admin System Functions

// Check Admin Access
function checkAdminAccess() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn && !window.location.pathname.includes('admin-login.html')) {
        window.location.href = 'admin-login.html';
    }
}

// Setup Logout
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('adminUsername');
            window.location.href = 'admin-login.html';
        });
    }
}

// Initialize Events from localStorage
function initializeEventsFromStorage() {
    const storedEvents = localStorage.getItem('communityEvents');
    if (!storedEvents) {
        // Initialize with some sample events
        const sampleEvents = [
            {
                id: '1',
                title: "Spring Community Festival",
                date: "2024-05-18",
                time: "11:00 AM",
                location: "Central Park",
                category: "social",
                description: "Join us for our annual spring festival with food, music, and community activities!",
                image: ""
            },
            {
                id: '2',
                title: "Volunteer Orientation",
                date: "2024-05-20",
                time: "6:00 PM",
                location: "Community Center",
                category: "educational",
                description: "Learn about volunteering opportunities and make a difference in our community.",
                image: ""
            }
        ];
        localStorage.setItem('communityEvents', JSON.stringify(sampleEvents));
    }
}

// Initialize Photos from localStorage
function initializePhotosFromStorage() {
    const storedPhotos = localStorage.getItem('communityPhotos');
    if (!storedPhotos) {
        localStorage.setItem('communityPhotos', JSON.stringify([]));
    }
}

// Get all events
function getAllEvents() {
    initializeEventsFromStorage();
    return JSON.parse(localStorage.getItem('communityEvents')) || [];
}

// Get upcoming events (for home page rolling display)
function getUpcomingEvents(limit = 3) {
    const events = getAllEvents();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return events
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, limit);
}

// Get all photos
function getAllPhotos() {
    initializePhotosFromStorage();
    return JSON.parse(localStorage.getItem('communityPhotos')) || [];
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        checkAdminAccess,
        setupLogout,
        getAllEvents,
        getUpcomingEvents,
        getAllPhotos,
        initializeEventsFromStorage,
        initializePhotosFromStorage
    };
}
