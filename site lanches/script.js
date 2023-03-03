const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("ativ");
    NavMenu.classList.toggle("ativo");
})
