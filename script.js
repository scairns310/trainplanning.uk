console.log("trainplanning site loaded successfully")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

document.getElementById("year").textContent = new Date().getFullYear();