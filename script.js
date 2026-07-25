
// Optimized Scroll Reveal
const revealElements = document.querySelectorAll(".section-header, .about-content, .skill-card, .education-card, .journey-card, .project-card, .resume-card, .certificate-card, .achievement-card, .contact-card, .contact-form");

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        
        entry.target.classList.add("active");
        entry.target.style.transitionDelay = "0ms"; 
        
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Sticky Header & Active Navigation

const header=document.querySelector("header");
const navLinks=document.querySelectorAll(".nav-menu a");
const sections=document.querySelectorAll("section");

const updateActiveLink=()=>{

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.scrollY>=sectionTop){
            currentSection=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.toggle(
            "active",
            link.getAttribute("href")==="#" + currentSection
        );

    });

};

window.addEventListener("scroll",()=>{

    header.classList.toggle("scrolled",window.scrollY>20);

    updateActiveLink();

},{passive:true});

// Reading Progress

const progressBar=document.querySelector(".progress-bar");

const updateProgress=()=>{

    const scrollTop=window.scrollY;

    const pageHeight=
        document.documentElement.scrollHeight-window.innerHeight;

    const progress=(scrollTop/pageHeight)*100;

    progressBar.style.width=`${progress}%`;

};

window.addEventListener("scroll",updateProgress,{passive:true});

// Mobile Navigation Fix
// --- FIX 3: Fixed JS Crash for Mobile Navigation ---
const menuToggle = document.querySelector(".menu-toggle");
const navMenuElement = document.querySelector(".nav-menu"); // Changed to target the ul tag

if(menuToggle && navMenuElement){
    const toggleMenu=()=>{
        menuToggle.classList.toggle("active");
        navMenuElement.classList.toggle("active"); // Fixed toggle
        document.body.classList.toggle("menu-open");
    };

    menuToggle.addEventListener("click",toggleMenu);

    // Close menu when a link is clicked
    navMenuElement.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>{
            menuToggle.classList.remove("active");
            navMenuElement.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

    document.addEventListener("keydown",(event)=>{
        if(event.key==="Escape"){
            menuToggle.classList.remove("active");
            navMenuElement.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });
}

    // Close menu when clicking a link
    navMenuElement.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>{
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });

    document.addEventListener("keydown",(event)=>{
        if(event.key==="Escape"){
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });


// Current Year

const currentYear=document.getElementById("currentYear");

if(currentYear){
    currentYear.textContent=new Date().getFullYear();
}
//  form sumbit code
const contactForm = document.getElementById("contactForm");
if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Rokega empty submit hone se
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(!name || !email || !message) {
            alert("Please fill all required fields before submitting.");
            return;
        }
        
        // Agar sab theek hai
        alert("Message sent successfully!");
        contactForm.reset();
    });
}