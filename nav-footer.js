document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll(".input-wrap input");

    inputs.forEach(function(input) {
        input.addEventListener("focus", function() {
            this.parentNode.classList.add("focused");
        });

        input.addEventListener("blur", function() {
            this.parentNode.classList.remove("focused");
        });
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
