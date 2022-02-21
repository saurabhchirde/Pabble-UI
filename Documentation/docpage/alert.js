const alertDemoBtn = document.querySelector(".alert-demo-btn");
const alertCtaDemoBtn = document.querySelector(".alert-cta-demo-btn");
const alertCloseBtn = document.querySelector(".alert-close");

alertDemoBtn.addEventListener("click", () => {
    document.querySelector(".alert-demo").classList.remove("hide");
    setTimeout(() => document.querySelector(".alert-demo").classList.add("hide"), 3000);
})

alertCtaDemoBtn.addEventListener("click", () => {
    document.querySelector(".alert-success-btn").classList.remove("hide");
    setTimeout(() => document.querySelector(".alert-success-btn").classList.add("hide"), 3000);
})

alertCloseBtn.addEventListener("click", () => {
    document.querySelector(".alert-success-btn").classList.add("hide")
});