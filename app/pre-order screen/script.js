document.addEventListener('DOMContentLoaded', function() {
    
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        window.location.href = '../meal detail screen/index.html';
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
            alert('Language switched to Danish');
        } else {
            currentLang = 'EN';
            alert('Language switched to English');
        }
    });
    
    // Portion size selection
    const portionOptions = document.querySelectorAll('input[name="portion"]');
    portionOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.checked) {
                alert(`Selected portion size: ${this.value}`);
            }
        });
    });
    
    // Container option selection
    const containerOptions = document.querySelectorAll('input[name="container"]');
    containerOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.checked) {
                alert(`Selected container option: ${this.value}`);
            }
        });
    });
    
    // Time selection
    const timeDropdown = document.querySelector('.time-dropdown');
    timeDropdown.addEventListener('change', function() {
        alert(`Selected pickup time: ${this.value}`);
    });
    
    // Submit button
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function() {
        // Get selected options
        const selectedPortion = document.querySelector('input[name="portion"]:checked').value;
        const selectedContainer = document.querySelector('input[name="container"]:checked').value;
        const selectedTime = document.querySelector('.time-dropdown').value;
        const specialInstructions = document.querySelector('.special-instructions').value;
        
        // Display brief confirmation
        alert(`[Pre-order Submitted]`);
        
        // Redirect to confirmation screen
        window.location.href = '../confirmation screen/index.html';
    });
});
