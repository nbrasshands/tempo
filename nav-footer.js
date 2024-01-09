document.addEventListener("DOMContentLoaded", function() {
    // Set a threshold for desktop screens, for example, 1024px
    var desktopThreshold = 1024;

    // Function to add or remove focus listeners
    function updateFocusListeners(add) {
        var inputs = document.querySelectorAll(".input-wrap input");
        inputs.forEach(function(input) {
            if (add) {
                input.addEventListener("focus", onFocus);
                input.addEventListener("blur", onBlur);
            } else {
                input.removeEventListener("focus", onFocus);
                input.removeEventListener("blur", onBlur);
            }
        });
    }

    // Event handlers
    function onFocus() {
        this.parentNode.classList.add("focused");
    }

    function onBlur() {
        this.parentNode.classList.remove("focused");
    }

    // Initial setup based on current screen width
    updateFocusListeners(window.innerWidth >= desktopThreshold);

    // Update listeners on window resize
    window.addEventListener("resize", function() {
        updateFocusListeners(window.innerWidth >= desktopThreshold);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var navigation = document.getElementById("navigation");

    window.addEventListener("scroll", function() {
        // Check if the page is scrolled down from the top
        if (window.scrollY > 0) {
            navigation.classList.add("shadow-small");
        } else {
            navigation.classList.remove("shadow-small");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navigation = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        // Check if the page is scrolled down from the top
        if (window.scrollY > 0) {
            navigation.classList.add("nav-scroll");
        } else {
            navigation.classList.remove("nav-scroll");
        }
    });
});
