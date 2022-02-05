// hamburger menu
// document.querySelector(".hamburger").addEventListener("click", () => {
//     document.querySelector("nav").classList.toggle("hide");
// })

// document.querySelector(".nav-close-btn").addEventListener("click", () => {
//     document.querySelector("nav").classList.toggle("hide");
// })

const navBtn = document.querySelectorAll(".nav-btn");

// active section
document.querySelector(".nav-alert").addEventListener("click", () => {
    navBtn[0].classList.add("nav-active");
    navBtn[1].classList.remove("nav-active");
    navBtn[2].classList.remove("nav-active");
    navBtn[3].classList.remove("nav-active");
    navBtn[4].classList.remove("nav-active");
    navBtn[5].classList.remove("nav-active");
    navBtn[6].classList.remove("nav-active");
})
document.querySelector(".nav-button").addEventListener("click", () => {
    navBtn[0].classList.remove("nav-active");
    navBtn[1].classList.add("nav-active");
    navBtn[2].classList.remove("nav-active");
    navBtn[3].classList.remove("nav-active");
    navBtn[4].classList.remove("nav-active");
    navBtn[5].classList.remove("nav-active");
    navBtn[6].classList.remove("nav-active");
})
document.querySelector(".nav-avatar").addEventListener("click", () => {
    navBtn[0].classList.remove("nav-active");
    navBtn[1].classList.remove("nav-active");
    navBtn[2].classList.add("nav-active");
    navBtn[3].classList.remove("nav-active");
    navBtn[4].classList.remove("nav-active");
    navBtn[5].classList.remove("nav-active");
    navBtn[6].classList.remove("nav-active");
})
document.querySelector(".nav-badge").addEventListener("click", () => {
    navBtn[0].classList.remove("nav-active");
    navBtn[1].classList.remove("nav-active");
    navBtn[2].classList.remove("nav-active");
    navBtn[3].classList.add("nav-active");
    navBtn[4].classList.remove("nav-active");
    navBtn[5].classList.remove("nav-active");
    navBtn[6].classList.remove("nav-active");
})
document.querySelector(".nav-card").addEventListener("click", () => {
    navBtn[0].classList.remove("nav-active");
    navBtn[1].classList.remove("nav-active");
    navBtn[2].classList.remove("nav-active");
    navBtn[3].classList.remove("nav-active");
    navBtn[4].classList.add("nav-active");
    navBtn[5].classList.remove("nav-active");
    navBtn[6].classList.remove("nav-active");
})
document.querySelector(".nav-img").addEventListener("click", () => {
    navBtn[0].classList.remove("nav-active");
    navBtn[1].classList.remove("nav-active");
    navBtn[2].classList.remove("nav-active");
    navBtn[3].classList.remove("nav-active");
    navBtn[4].classList.remove("nav-active");
    navBtn[5].classList.add("nav-active");
    navBtn[6].classList.remove("nav-active");
})
document.querySelector(".nav-input").addEventListener("click", () => {
    navBtn[0].classList.remove("nav-active");
    navBtn[1].classList.remove("nav-active");
    navBtn[2].classList.remove("nav-active");
    navBtn[3].classList.remove("nav-active");
    navBtn[4].classList.remove("nav-active");
    navBtn[5].classList.remove("nav-active");
    navBtn[6].classList.add("nav-active");
})

// media query

// const mediaQueryMobile = window.matchMedia('(max-width: 700px)');
// const mediaQueryDesktop = window.matchMedia('(min-width: 700px)');

// if (mediaQueryMobile.matches) {
//     document.querySelector("nav").classList.toggle("hide");
// }

// if (mediaQueryDesktop.matches) {
//     document.querySelector("nav").classList.remove("hide");
// }