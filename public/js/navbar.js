const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll("#nav-links li");

const clickOnLink = () => {
    navLinks.classList.remove("open");
    links.forEach(link => {
        link.classList.remove("show-link");
    });

    hamburger.classList.remove("toggle");
};

links.forEach(link => {
    link.addEventListener('click', clickOnLink);
});

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("show-link");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});