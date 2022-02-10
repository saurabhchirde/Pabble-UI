// hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    console.log("clicked ham");
    document.querySelector(".nav-mobile").style.display="flex";
})

document.querySelector(".nav-close-btn").addEventListener("click", () => {
    console.log("clicked close")
    document.querySelector(".nav-mobile").style.display="none";
})

if (window.outerHeight > 560) {
    document.querySelector(".nav-mobile").style.display="none";
}