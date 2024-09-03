document.addEventListener("DOMContentLoaded", function() {
    const toggleIcon = document.getElementById("toggle-mode");

    // Function to update the icon
    function updateIcon(isNightMode) {
        if (isNightMode) {
            toggleIcon.classList.remove("fa-lightbulb");
            toggleIcon.classList.add("fa-moon");
        } else {
            toggleIcon.classList.remove("fa-moon");
            toggleIcon.classList.add("fa-lightbulb");
        }
    }

    // Check if the user has a preferred mode stored
    const nightModeEnabled = localStorage.getItem('nightMode') === 'enabled';
    if (nightModeEnabled) {
        document.body.classList.add('night-mode');
        updateIcon(true);
    } else {
        updateIcon(false);
    }

    // Event listener for the icon
    toggleIcon.addEventListener("click", function() {
        document.body.classList.toggle("night-mode");
        const isNightMode = document.body.classList.contains("night-mode");
        updateIcon(isNightMode);

        // Store the user's preference in local storage
        if (isNightMode) {
            localStorage.setItem('nightMode', 'enabled');
        } else {
            localStorage.removeItem('nightMode');
        }
    });
});