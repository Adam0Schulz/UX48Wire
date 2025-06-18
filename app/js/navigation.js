// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all nav items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const navLabel = this.querySelector('.nav-label').textContent.trim();
            
            // Navigate based on the nav label
            if (navLabel === 'My Orders') {
                window.location.href = '../order screen/index.html';
            } else if (navLabel === 'Profile') {
                window.location.href = '../profile screen/index.html';
            } else if (navLabel === 'Menu') {
                window.location.href = '../menu screen/index.html';
            } else if (navLabel === 'Home') {
                window.location.href = '../landing screen/index.html';
            }
        });
    });
});
