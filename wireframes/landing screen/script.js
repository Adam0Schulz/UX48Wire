// This is a placeholder JavaScript file for the wireframe
// In a real application, this would contain functionality for:
// - Updating canteen status
// - Loading menu data
// - Handling navigation
// - Managing pre-orders

document.addEventListener('DOMContentLoaded', function() {
    // Simulate canteen status (would come from an API in a real app)
    document.querySelector('.canteen-status p').textContent = 'Canteen Status: [Status]';
    document.querySelector('.opening-hours p').textContent = 'Opening Hours: [Hours]';
    
    // Add click event to the weekly menu button
    document.querySelector('.weekly-menu-button button').addEventListener('click', function() {
        window.location.href = '../menu screen/index.html';
    });
    
    // Make meal cards clickable
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            window.location.href = '../meal detail screen/index.html';
        });
    });
    
    // Add click events to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const navLabel = this.querySelector('.nav-label').textContent;
            
            if (navLabel === 'Menu') {
                window.location.href = '../menu screen/index.html';
            } else if (navLabel === 'Order') {
                window.location.href = '../order screen/index.html';
            } else if (navLabel === 'Profile') {
                window.location.href = '../profile screen/index.html';
            } else if (navLabel === 'Home') {
                // Already on home screen
            }
        });
    });
    
    // Language selector functionality
    const langToggle = document.querySelector('.lang-toggle');
    let currentLang = 'EN';
    
    langToggle.addEventListener('click', function() {
        // Toggle between English and Danish
        if (currentLang === 'EN') {
            currentLang = 'DA';
            // This would normally update all text content to Danish
            alert('Language switched to Danish');
        } else {
            currentLang = 'EN';
            // This would normally update all text content to English
            alert('Language switched to English');
        }
    });
    
    // Note: Dark mode is now the default theme with no toggle option
});
