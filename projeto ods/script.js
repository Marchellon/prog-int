document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById('hamburger');
    var navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
