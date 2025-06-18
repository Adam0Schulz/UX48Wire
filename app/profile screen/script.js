document.addEventListener('DOMContentLoaded', function() {
    
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
            } else if (navLabel === 'My Orders') {
                window.location.href = '../order screen/index.html';
            } else if (navLabel === 'Profile') {
                // Already on profile page
                return;
            }
        });
    });
    
    // Make allergen items selectable with toggle functionality
    const allergenItems = document.querySelectorAll('.allergen-item');
    allergenItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
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
    
    // Dietary preference selection
    const preferenceOptions = document.querySelectorAll('.preference-option');
    preferenceOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all siblings
            const siblings = Array.from(this.parentNode.children);
            siblings.forEach(sibling => sibling.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
        });
    });
    
    // Add payment method button
    const addPaymentButton = document.querySelector('.add-payment-button');
    addPaymentButton.addEventListener('click', function() {
        alert('Add payment method dialog would appear here');
    });
    
    // Toggle switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const indicator = this.querySelector('.toggle-indicator');
            indicator.classList.toggle('active');
            
            const settingName = this.parentElement.querySelector('.settings-label').textContent;
            const isActive = indicator.classList.contains('active');
            alert(`${settingName} is now ${isActive ? 'enabled' : 'disabled'}`);
        });
    });
});
