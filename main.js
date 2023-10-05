// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled',
    scrollY > 0);
})

//for responsive nav menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

// for closing nav menu after being clicked
const nav = document.querySelector('.dropdown-menu')

if (document.body.clientWidth < 850) {
    nav.querySelectorAll(`li a`).forEach(navLink => {
        navLink.addEventListener('click', toggleBtn.onclick);
    })
}

// for responsive header and about part
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const about = document.querySelector("#about");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

const gallery = document.querySelector("#gallery");
const slider = document.querySelector(".slider");
const descrip = document.querySelector(".description");

let header_height = header.offsetHeight;
let about_height = about.offsetHeight;
let gallery_height = gallery.offsetHeight;

window.addEventListener('scroll', () => {
  //header section
    let scroll = window.pageYOffset;
    let aboutY = about.getBoundingClientRect();
    let galleryY = gallery.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    //gallery section
    slider.style.top = `${scroll / (gallery_height + galleryY.top) * -50 + 30}vh`;
    slider.style.opacity = scroll / (galleryY.top + gallery_height);
    if (scroll > (galleryY.top + gallery_height)) {
      slider.style.opacity = (galleryY.top + gallery_height) / scroll;
    }
    descrip.style.left = `${scroll / (gallery_height + galleryY.top) * 50 - 45}vw`;

    //about section
    let scroll_about = scroll - 2 * document.body.clientHeight;

    opacity.forEach(element => {
        element.style.opacity = scroll_about / (aboutY.top + about_height);
    });

    big_title.style.opacity = - scroll_about / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll_about / (about_height + aboutY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll_about / (about_height + aboutY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (about_height + aboutY.top) * 10}%`;


});

// animation of the big title in home

"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

//slider for gallery
const sliderMain = new Swiper(".slider_main", {
  // freeMode: true,
  centeredSlides: true,
  // mousewheel: true,
  parallax: true,
  keyboard: {
    enabled: true
  },
  breakpoints: {
      0: {
          slidesPerView: 1.5,
          spaceBetween: 20
      },
      750: {
          slidesPerView: 2.5,
          spaceBetween: 60
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 60
      }
  }
});

const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slide_item').forEach(item => {
  item.addEventListener('click', event => {
      item.classList.toggle("open");
  });
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
})

// showcase section
slider1 = new Swiper('.slider1', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

slider2 = new Swiper('.slider2', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

slider3 = new Swiper('.slider3', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

slider4 = new Swiper('.slider4', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

function bindSwipers(...swiperList) {
  for (const swiper of swiperList) {
      swiper.setTranslate = function(translate, byController, doNotPropagate){
          if (doNotPropagate) {
              Swiper.prototype.setTranslate.apply(this, arguments);
          } else {
              for (const swiper of swiperList) {
                  swiper.setTranslate(translate, byController, true);
              }
          }
      };
      swiper.setTransition = function(duration, byController, doNotPropagate){
          if (doNotPropagate) {
              Swiper.prototype.setTransition.apply(this, arguments);
          } else {
              for (const swiper of swiperList) {
                  swiper.setTransition(duration, byController, true);
              }
          }
      };
  }
}

bindSwipers(slider1, slider2, slider3, slider4);