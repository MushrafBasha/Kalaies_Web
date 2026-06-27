/*=========================================
PORTFOLIO JAVASCRIPT
=========================================*/

// 240

// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// Close menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*=========================================
STICKY NAVBAR
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*=========================================
ACTIVE NAVIGATION LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

    ".hero-content, .hero-image, .about-content, .about-image, .timeline-item, .skill-card, .education-card, .achievement-card, .contact-card"

);

const reveal = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("fade-in");

        }

    });

};

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);


/*=========================================
COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".achievement-card h2");

const runCounter = () => {

    counters.forEach(counter => {

        const text = counter.innerText;

        const target = parseInt(text);

        if (isNaN(target)) return;

        let count = 0;

        const speed = target / 60;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = text;

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector("#achievements");

    if (!section || counterStarted) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 150) {

        runCounter();

        counterStarted = true;

    }

});


/*=========================================
CURRENT YEAR
=========================================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}


console.log("Portfolio Loaded Successfully");



