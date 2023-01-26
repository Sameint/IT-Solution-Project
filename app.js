const tgButton=document.querySelector(".toggle");
const nav=document.querySelector(".navigation");

tgButton.addEventListener("click",() => {
    tgButton.classList.toggle("active");
    nav.classList.toggle('active');
});

nav.addEventListener("click", () => {
    tgButton.classList.toggle("active");
    nav.classList.toggle('active');
});