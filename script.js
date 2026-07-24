// Scroll Reveal

const revealElements=[
    ...document.querySelectorAll(".section-header"),
    ...document.querySelectorAll(".about-content"),
    ...document.querySelectorAll(".skill-card"),
    ...document.querySelectorAll(".education-card"),
    ...document.querySelectorAll(".journey-card"),
    ...document.querySelectorAll(".project-card"),
    ...document.querySelectorAll(".resume-card"),
    ...document.querySelectorAll(".certificate-card"),
    ...document.querySelectorAll(".achievement-card"),
    ...document.querySelectorAll(".contact-card"),
    ...document.querySelectorAll(".contact-form")
];

revealElements.forEach((element,index)=>{
    element.classList.add("reveal");
    element.style.transitionDelay=`${index*60}ms`;
});

const revealObserver=new IntersectionObserver((entries,observer)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

    });

},{
    threshold:.15,
    rootMargin:"0px 0px -60px 0px"
});

revealElements.forEach(element=>{

    revealObserver.observe(element);

});

// Sticky Header & Active Navigation

const header=document.querySelector("header");
const navLinks=document.querySelectorAll(".nav-links a");
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

// Mobile Navigation

const menuToggle=document.querySelector(".menu-toggle");

// const navLinks=document.querySelector(".nav-links");

if(menuToggle && navLinks){

    const toggleMenu=()=>{

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    };

    menuToggle.addEventListener("click",toggleMenu);

    navLinks.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

}

// Current Year

const currentYear=document.getElementById("currentYear");

if(currentYear){
    currentYear.textContent=new Date().getFullYear();
}