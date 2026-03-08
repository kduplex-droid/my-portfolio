/* ===============================
   CURSOR GLOW
================================= */
const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", e => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

/* ===============================
   PAGE LOAD ANIMATION
================================= */
window.addEventListener("DOMContentLoaded", () => {

    /* HERO LETTER ANIMATION */
    const heroTitle = document.querySelector(".hero-text h2");

    if(heroTitle){
        const text = heroTitle.textContent;
        heroTitle.textContent = "";

        [...text].forEach((letter, index) => {
            const span = document.createElement("span");

            span.textContent = letter === " " ? "\u00A0" : letter;
            span.style.animationDelay = `${index * 0.09}s`;

            heroTitle.appendChild(span);
        });
    }

    // Animate hero content
    const heroText = document.querySelector(".hero-text, .hero-content");
    if(heroText){
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(40px)";
        setTimeout(() => {
            heroText.style.transition = "all 1s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 200);
    }

    // Animate project cards, CV articles, and about cards
    const fadeElements = document.querySelectorAll(".project-card, main section article, .about-card, .skills-card");
    fadeElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = `all 0.6s ease ${index * 0.2}s`;
    });

    setTimeout(() => {
        fadeElements.forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, 200);
});

/* ===============================
   PROJECT CARD HOVER (Portfolio)
================================= */
const cards = document.querySelectorAll(".project-card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 15px 35px rgba(255,106,0,0.4)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

/* ===============================
   TECH SKILLS HOVER (CV)
================================= */
const skills = document.querySelectorAll("article ul li, .skills-list span");
skills.forEach(skill => {
    skill.style.transition = "all 0.3s ease";
    skill.addEventListener("mouseenter", () => {
        skill.style.transform = "translateY(-3px) scale(1.05)";
        skill.style.color = "#ff6a00";
        skill.style.fontWeight = "600";
        skill.style.boxShadow = "0 5px 15px rgba(255,106,0,0.3)";
    });
    skill.addEventListener("mouseleave", () => {
        skill.style.transform = "translateY(0) scale(1)";
        skill.style.color = "";
        skill.style.fontWeight = "400";
        skill.style.boxShadow = "none";
    });
});

/* ===============================
   REVEAL ON SCROLL
================================= */
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight - 100;
    const fadeElements = document.querySelectorAll(".project-card, main section article, .about-card, .skills-card");
    fadeElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if(elTop < triggerBottom){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

/* ===============================
   SMOOTH NAVIGATION FADE
================================= */
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        if(link.hostname === window.location.hostname){
            e.preventDefault();
            document.body.style.opacity = "0";
            document.body.style.transition = "opacity 0.4s ease";
            setTimeout(() => {
                window.location = link.href;
            }, 400);
        }
    });
});

/* ===============================
   CURSOR GLOW CSS (Inject dynamically)
================================= */
const style = document.createElement("style");
style.innerHTML = `
.cursor-glow{
    position: fixed;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle, rgba(255,106,0,0.35) 0%, rgba(255,106,0,0.15) 40%, rgba(255,106,0,0.05) 60%, transparent 70%);
    transform: translate(-50%, -50%);
    z-index: 0;
    filter: blur(40px);
    transition: transform 0.08s linear;
}`;
document.head.appendChild(style);

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
