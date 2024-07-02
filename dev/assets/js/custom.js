const burger = document.querySelector(".hamburger")
const BurgerMenu = document.querySelector(".burger-menu")
const header = document.querySelector("header")

function ShowBurgerMenu() {
    BurgerMenu.classList.toggle("show")
    document.querySelector("body").classList.toggle("overflow-hidden")
    burger.classList.toggle("is-active")
}
function removeClass() {
    BurgerMenu.classList.remove("show")
}

burger.addEventListener("click", ShowBurgerMenu)
/*header.addEventListener("click", removeClass)*/

const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 30,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })