// change nav style on scroll


//for responsive nav menu



// for responsive header and events part
const translate = document.querySelectorAll(".translate");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

const gallery = document.querySelector("#gallery");
const slider = document.querySelector(".slider");
const descrip = document.querySelector(".description");

let gallery_height = gallery.offsetHeight;

window.addEventListener('scroll', () => {
  //header section
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




});

// animation of the big title in home



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