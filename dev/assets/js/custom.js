const burger = document.querySelector(".burger")
const BurgerMenu = document.querySelector(".burger-menu")
const header = document.querySelector("header")

function ShowBurgerMenu() {
    BurgerMenu.classList.toggle("show")
    burger.classList.toggle("cross")

}
function removeClass() {
    BurgerMenu.classList.remove("show")
}

burger.addEventListener("click", ShowBurgerMenu)
/*header.addEventListener("click", removeClass)*/