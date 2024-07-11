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

const swiperFirstScreen = new Swiper('.swiper.swiper-first-screen', {
    speed: 500,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

const fileInput = document.querySelectorAll("#fileInput")

fileInput.forEach(item => {
  item.addEventListener("change", function() {
    const fileName = item.closest(".type-file").querySelector("#fileName")
    fileName.innerHTML = item.files[0].name
  })
});  

const titles = document.querySelectorAll(".template-title")
const w = window.innerWidth;

if (w<=1024) {
  titles.forEach(item => {
    item.classList.remove("title-element-in-text")
    item.classList.remove("title-align-left")
  });
}

const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length

const swiperAdvantages = new Swiper('.swiper.swiper-advantages', {
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
  },
  breakpoints: {
      1025: {
          spaceBetween: 0,
          loop: false,
          slidesPerView: advantagesSlideLength,
          simulateTouch: false,
          pagination: {
              enabled: false,
              el: '.swiper-pagination',
          }
      }
  }
});