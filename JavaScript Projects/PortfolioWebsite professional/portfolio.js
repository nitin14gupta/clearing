const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




// to open certificate when click on the skill 

document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', function() {
        const certificateUrl = this.getAttribute('data-certificate');
        window.open(certificateUrl, '_blank');
    });
});