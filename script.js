// DAY 7 - PORTFOLIO JAVASCRIPT

console.log("🚀 Welcome to Neetesh Rathore's Portfolio");

// SMOOTH SCROLL

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({

            behavior: 'smooth'

        });

    });

});

// DYNAMIC COPYRIGHT YEAR

const footer = document.querySelector("footer p:last-child");

const currentYear = new Date().getFullYear();

footer.innerHTML = `© ${currentYear} All Rights Reserved.`;

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// TYPING ANIMATION
// ==========================================

const typingText = document.querySelector(".typing-text");

const words = [

    "Full Stack Web Developer",

    "Frontend Developer",

    "JavaScript Learner",

    "Open To Internship"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typingText.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            charIndex = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


// ==========================================
// SCROLL REVEAL
// ==========================================

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach((element)=>{

    element.classList.add("hidden");

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element)=>{

    observer.observe(element);

});

// ==========================================
// DARK / LIGHT THEME
// ==========================================

const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-theme");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        localStorage.setItem("theme","light");

        themeBtn.textContent="☀️";

    }else{

        localStorage.setItem("theme","dark");

        themeBtn.textContent="🌙";

    }

});

// ==========================================
// PROJECT CARD INTERACTION
// ==========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;

        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const circle=document.createElement("span");

        const diameter=Math.max(button.clientWidth,button.clientHeight);

        const radius=diameter/2;

        circle.style.width=
        circle.style.height=`${diameter}px`;

        circle.style.left=
        `${e.clientX-button.offsetLeft-radius}px`;

        circle.style.top=
        `${e.clientY-button.offsetTop-radius}px`;

        circle.classList.add("ripple");

        const ripple=button.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        button.appendChild(circle);

    });

});

// ==========================================
// SKILL BAR ANIMATION
// ==========================================

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.width = entry.target.dataset.width;

        }

    });

}, { threshold: 0.4 });

skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});

// ==========================================
// CERTIFICATE CARD INTERACTION
// ==========================================

const certificateCards = document.querySelectorAll(".certificate-card");

certificateCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ==========================================
// REUSABLE TILT EFFECT
// ==========================================

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

