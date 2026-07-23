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