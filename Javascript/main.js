document.getElementById('nav-toggler').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');

    this.classList.toggle('active');
});
