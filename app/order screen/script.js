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
            } else if (navLabel === 'Order') {
                // Already on order page
                return;
            } else if (navLabel === 'Profile') {
                window.location.href = '../profile screen/index.html';
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
            alert('Language switched to Danish');
        } else {
            currentLang = 'EN';
            alert('Language switched to English');
        }
    });
    
    // Pre-order action buttons functionality
    const pickupButtons = document.querySelectorAll('.action-button.pickup');
    pickupButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Pickup confirmed! Please collect your meal at the counter.');
        });
    });
    
    const cancelButtons = document.querySelectorAll('.action-button.cancel');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Pre-order cancelled.');
        });
    });
    
    // History item click functionality
    const historyItems = document.querySelectorAll('.history-item');
    historyItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Order details would be shown here.');
        });
    });
});
