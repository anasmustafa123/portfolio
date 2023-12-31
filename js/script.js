/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#social-media-btn");
let navbar = document.querySelector("nav.navbar");
menuIcon.addEventListener("click", (e) => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("hide");
});
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target)) {
    navbar.classList.add("hide");
    menuIcon.classList.remove("bx-x");
  }
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let scrolHeight = window.scrollY;
    let sectionTop = section.offsetTop - 300;
    let sectionHeight = section.offsetHeight;
    let id = section.getAttribute("id");
    if (
      scrolHeight >= sectionTop &&
      scrolHeight <= sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`[href = "#${id}"].header-option`)
        .classList.add("active");
    }
  });

  /*==================== sticky navbar ====================*/

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.add("hide");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .projects, .form", { origin: "bottom" });
ScrollReveal().reveal(" .about-img, .heading2 ", { origin: "left" });
ScrollReveal().reveal(" .home-introduction ", { origin: "right" });

/*==================== typed js ====================*/
const types = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Chess Player', 'Engineering Student', 'book reader'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:  true
})