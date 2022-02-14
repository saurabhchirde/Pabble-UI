// hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-mobile").style.display = "flex";
})

document.querySelector(".nav-close-btn").addEventListener("click", () => {
    document.querySelector(".nav-mobile").style.display = "none";
})

if (window.outerHeight > 560) {
    document.querySelector(".nav-mobile").style.display = "none";
}

// dark mode

const btnToggler = document.querySelectorAll(".toggler");
const logo = document.querySelectorAll(".logo");
const navItem = document.querySelectorAll(".nav-item");
let theme = localStorage.getItem("pebbleui-website");
let btnMode = localStorage.getItem("pebbleui-website-mode");
let navBar = localStorage.getItem("pebbleui-nav-bar");
let logoMode = localStorage.getItem("pebbleui-logo-mode");

if (btnMode === null) {
    btnToggler.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    btnToggler.innerHTML = btnMode;
}

document.body.classList.add(theme);
document.querySelector(".nav-header-mobile").classList.add(theme);
document.querySelector(".nav-header-desktop").classList.add(theme);
logo.forEach(logoImg => logoImg.src =logoMode);
document.querySelector(".header-icon").classList.add(theme);
navItem.forEach(item=>item.classList.add(theme));

btnToggler.forEach(btn => btn.addEventListener("click", () => {
    document.body.classList.toggle("darkTheme");
    localStorage.setItem(
        "pebbleui-website",
        document.body.classList.contains("darkTheme") ? "darkTheme" : "lightTheme"
    );
    if (localStorage.getItem("pebbleui-website") === "darkTheme") {
        theme = "darkTheme";

        document.body.classList.remove("lightTheme");
        document.querySelector(".nav-header-mobile").classList.remove("lightTheme");
        document.querySelector(".nav-header-desktop").classList.remove("lightTheme");
        document.querySelector(".header-icon").classList.remove("lightTheme");
        navItem.forEach(item=>item.classList.remove("lightTheme"));
                
        document.body.classList.add("darkTheme");
        document.querySelector(".nav-header-mobile").classList.add("darkTheme");
        document.querySelector(".nav-header-desktop").classList.add("darkTheme");
        document.querySelector(".header-icon").classList.add("darkTheme");
        navItem.forEach(item=>item.classList.add("darkTheme"));

        logo.forEach(logoImg => logoImg.src = "/Documentation/docpage-assets/logo/logo-light.svg");

        btnToggler.innerHTML = '<i class="fas fa-sun"></i>';
        
        btnMode = '<i class="fas fa-sun"></i>';
        logoMode = "/Documentation/docpage-assets/logo/logo-light.svg"
    } else {
        theme = "lightTheme";
        document.body.classList.remove("darkTheme");
        document.querySelector(".nav-header-mobile").classList.remove("darkTheme");
        document.querySelector(".nav-header-desktop").classList.remove("darkTheme");
        document.querySelector(".header-icon").classList.remove("darkTheme");
        navItem.forEach(item=>item.classList.remove("darkTheme"));

        logo.forEach(logoImg => logoImg.src = "/Documentation/docpage-assets/logo/logo-dark.svg");

        btnToggler.innerHTML = '<i class="fas fa-moon"></i>';

        btnMode = '<i class="fas fa-moon"></i>';
        logoMode = "/Documentation/docpage-assets/logo/logo-dark.svg"
    }
    localStorage.setItem("pebbleui-website", theme);
    localStorage.setItem("pebbleui-website-mode", btnToggler.innerHTML);
    localStorage.setItem("pebbleui-logo-mode", logoMode);
}));