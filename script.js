const navElement = document.querySelector(".nav");//targetting hamburger menu that will add or remove the open class within it
const hamburgerElement = document.querySelector(".hamburger");

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle("nav--open");
    hamburgerElement.classList.toggle("hamburger--open");
}); 

navElement.addEventListener("click", () => {
    navElement.classList.remove("nav--open");
    hamburgerElement.classList.remove("hamburger--open");
});