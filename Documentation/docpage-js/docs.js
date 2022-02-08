// hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    console.log("clicked ham");
    document.querySelector(".nav-mobile").style.display="flex";
})

document.querySelector(".nav-close-btn").addEventListener("click", () => {
    console.log("clicked close")
    document.querySelector(".nav-mobile").style.display="none";
})

// media query

const mediaQueryMobile = window.matchMedia('(max-width: 560px)');

if (mediaQueryMobile.matches) {
    document.querySelector(".nav-mobile").style.display="none";
}