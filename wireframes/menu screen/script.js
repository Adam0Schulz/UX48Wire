document.addEventListener('DOMContentLoaded', function() {
    // Simulate canteen status (would come from an API in a real app)
    document.querySelector('.canteen-status p').textContent = 'Canteen Status: [Status]';
    document.querySelector('.opening-hours p').textContent = 'Opening Hours: [Hours]';
    
    // Add click events to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const navLabel = this.querySelector('.nav-label').textContent;
            
            // Handle navigation
            if (navLabel === 'Home') {
                window.location.href = '../landing screen/index.html';
            } else if (navLabel === 'Order') {
                window.location.href = '../order screen/index.html';
            } else if (navLabel === 'Profile') {
                window.location.href = '../profile screen/index.html';
            } else if (navLabel === 'Menu') {
                // Already on menu screen
            }
        });
    });
    
    // Make meal cards clickable
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            window.location.href = '../meal detail screen/index.html';
        });
    });
    
    // Language selector functionality
    const langToggle = document.querySelector('.lang-toggle');
    let currentLang = 'EN';
    
    langToggle.addEventListener('click', function() {
        // Toggle between English and Danish
        if (currentLang === 'EN') {
            currentLang = 'DA';
            alert('[Language switched to Danish]');
        } else {
            currentLang = 'EN';
            alert('[Language switched to English]');
        }
    });
});
