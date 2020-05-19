const menuSign = document.querySelector(".burgerMenu");
const navBar = document.querySelector(".navBar");

menuSign.addEventListener("click", () => {
    navBar.classList.toggle("change");
});