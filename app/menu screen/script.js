document.addEventListener('DOMContentLoaded', function() {
    
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
    
    // Make individual meal cards clickable
    const mealCards = document.querySelectorAll('.meal-card');
    mealCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            // Get the meal name from the card's heading
            const mealName = this.querySelector('h3').textContent;
            // Navigate to meal detail page with meal name as query parameter
            window.location.href = `../meal detail screen/index.html?meal=${encodeURIComponent(mealName)}`;
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
