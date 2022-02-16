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

const baseline = document.querySelector(".baseline-demo");
const leading = document.querySelector(".leading-demo");
const stacked = document.querySelector(".stacked-demo");
const baselineClose = document.querySelector(".baseline-close");
const leadingClose = document.querySelector(".leading-close");
const stackedClose = document.querySelector(".stacked-close");

baseline.addEventListener("click", () => {
    document.querySelector(".snackbar-baseline").classList.remove("hide");
    setTimeout(() => document.querySelector(".snackbar-baseline").classList.add("hide"), 5000);
})

leading.addEventListener("click", () => {
    document.querySelector(".snackbar-leading").classList.remove("hide");
    setTimeout(() => document.querySelector(".snackbar-leading").classList.add("hide"), 5000);
})

stacked.addEventListener("click", () => {
    document.querySelector(".snackbar-stacked").classList.remove("hide");
    setTimeout(() => document.querySelector(".snackbar-stacked").classList.add("hide"), 5000);
})

baselineClose.addEventListener("click", () => {
    document.querySelector(".snackbar-baseline").classList.add("hide")
});

leadingClose.addEventListener("click", () => {
    document.querySelector(".snackbar-leading").classList.add("hide")
});

stackedClose.addEventListener("click", () => {
    document.querySelector(".snackbar-stacked").classList.add("hide")
});

// dark mode

const btnToggler = document.querySelectorAll(".toggler");
const logo = document.querySelectorAll(".logo");
const navItem = document.querySelectorAll(".nav-item");
let theme = localStorage.getItem("pebbleui-website");
let btnMode = localStorage.getItem("pebbleui-website-mode");
let logoMode = localStorage.getItem("pebbleui-logo-mode");

if (btnMode === null) {
    btnToggler.forEach(btn => btn.innerHTML = '<i class="fas fa-moon"></i>');
} else {
    btnToggler.forEach(btn => btn.innerHTML = btnMode);
}

if (logoMode === null) {
    logo.forEach(logoImg => logoImg.src = "/Documentation/docpage-assets/logo/logo-dark.svg");
} else {
    logo.forEach(logoImg => logoImg.src = logoMode);
}

if (theme === null) {
    document.body.classList.add("lightTheme");
    document.querySelector(".nav-header-mobile").classList.add("lightTheme");
    document.querySelector(".nav-header-desktop").classList.add("lightTheme");
    document.querySelector(".header-icon").classList.add("lightTheme");
    navItem.forEach(item => item.classList.add("lightTheme"));
} else {
    document.body.classList.add(theme);
    document.querySelector(".nav-header-mobile").classList.add(theme);
    document.querySelector(".nav-header-desktop").classList.add(theme);
    document.querySelector(".header-icon").classList.add(theme);
    navItem.forEach(item => item.classList.add(theme));
}

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
        navItem.forEach(item => item.classList.remove("lightTheme"));

        document.body.classList.add("darkTheme");
        document.querySelector(".nav-header-mobile").classList.add("darkTheme");
        document.querySelector(".nav-header-desktop").classList.add("darkTheme");
        document.querySelector(".header-icon").classList.add("darkTheme");
        navItem.forEach(item => item.classList.add("darkTheme"));

        logo.forEach(logoImg => logoImg.src = "/Documentation/docpage-assets/logo/logo-light.svg");

        btnToggler.forEach(btn => btn.innerHTML = '<i class="fas fa-sun"></i>');

        btnMode = '<i class="fas fa-sun"></i>';
        logoMode = "/Documentation/docpage-assets/logo/logo-light.svg"
    } else {
        theme = "lightTheme";
        document.body.classList.remove("darkTheme");
        document.querySelector(".nav-header-mobile").classList.remove("darkTheme");
        document.querySelector(".nav-header-desktop").classList.remove("darkTheme");
        document.querySelector(".header-icon").classList.remove("darkTheme");
        navItem.forEach(item => item.classList.remove("darkTheme"));

        logo.forEach(logoImg => logoImg.src = "/Documentation/docpage-assets/logo/logo-dark.svg");

        btnToggler.forEach(btn => btn.innerHTML = '<i class="fas fa-moon"></i>');

        btnMode = '<i class="fas fa-moon"></i>';
        logoMode = "/Documentation/docpage-assets/logo/logo-dark.svg"
    }
    localStorage.setItem("pebbleui-website", theme);
    localStorage.setItem("pebbleui-website-mode", btnMode);
    localStorage.setItem("pebbleui-logo-mode", logoMode);
}));