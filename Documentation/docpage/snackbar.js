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