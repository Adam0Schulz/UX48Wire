document.addEventListener('DOMContentLoaded', function() {
    // Simulate canteen status (would come from an API in a real app)
    document.querySelector('.canteen-status p').textContent = 'Canteen Status: Open';
    document.querySelector('.opening-hours p').textContent = 'Opening Hours: 11:00 - 14:00';
    
    // Add click events to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const navLabel = this.querySelector('.nav-label').textContent;
            
            // Handle navigation
            if (navLabel === 'Home') {
                window.location.href = '../landing screen/index.html';
            } else if (navLabel === 'Menu') {
                window.location.href = '../menu screen/index.html';
            } else {
                alert(`${navLabel} page would open here`);
            }
        });
    });
    
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        window.location.href = '../menu screen/index.html';
    });
    
    // Language selector functionality
    const langToggle = document.querySelector('.lang-toggle');
    let currentLang = 'EN';
    
    langToggle.addEventListener('click', function() {
        // Toggle between English and Danish
        if (currentLang === 'EN') {
            currentLang = 'DA';
            alert('Language switched to Danish');
        } else {
            currentLang = 'EN';
            alert('Language switched to English');
        }
    });
    
    // Pre-order button functionality
    const preOrderButton = document.querySelector('.pre-order-button');
    preOrderButton.addEventListener('click', function() {
        window.location.href = '../pre-order screen/index.html';
    });
    
    // No bring container functionality in wireframe
});
