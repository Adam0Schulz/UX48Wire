document.addEventListener('DOMContentLoaded', function() {
    // Simulate canteen status (would come from an API in a real app)
    document.querySelector('.canteen-status p').textContent = 'Canteen Status: [Status]';
    document.querySelector('.opening-hours p').textContent = 'Opening Hours: [Hours]';
    
    // Back to Home button functionality
    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', function() {
        window.location.href = '../landing screen/index.html';
    });
    
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
                window.location.href = '../order screen/index.html';
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
            alert('[Language switched to Danish]');
        } else {
            currentLang = 'EN';
            alert('[Language switched to English]');
        }
    });
    
    // Simulate loading order details (would come from an API or localStorage in a real app)
    // This is just for demonstration purposes
    function loadOrderDetails() {
        // In a real app, this would fetch the order details from an API or localStorage
        // For the wireframe, we'll just use placeholder text
        document.querySelector('.confirmation-message h1').textContent = '[Order Confirmed]';
        document.querySelector('.confirmation-message p').textContent = '[Your pre-order has been confirmed]';
        document.querySelector('.confirmation-details').textContent = '[You will receive a notification when your order is ready]';
        document.querySelector('.confirmation-id').textContent = '[Order ID: #12345]';
        document.querySelector('.confirmation-time').textContent = '[Date and Time]';
    }
    
    // Call the function to load order details
    loadOrderDetails();
});
