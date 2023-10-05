const sliderMain = new Swiper(".slider-events", {
    freeMode: true,
    centeredSlides: true,
    // mousewheel: true,
    cssmode: true,
    scrollbar: {
        draggable: true
    },
    // autoplay: {
    //     delay: 5000,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
    },
    parallax: true,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 2.5,
    //         spaceBetween: 20
    //     },
    //     680: {
    //         slidesPerView: 3.5,
    //         spaceBetween: 60
    //     }
    // }
});

const click_btn = document.querySelector(".reveal-button");
const main_container = document.querySelectorAll(".main-container");
const picture_container = document.querySelector(".picture-container");

photos_container = document.querySelector(".photos-container");

let btn = 'main';

click_btn.addEventListener('hover', () => {
    click_btn.style.transform = 'scale(1.05) translateY(-5%)';
    console.log('hovered');
})

click_btn.addEventListener('click', () => {
    if (btn == 'main') {
        main_container.forEach(main_container_element => {
            main_container_element.style.transform = 'translateY(-50%)';
        })
        picture_container.style.transform = 'translateY(-100%)';
        click_btn.style.background = 'rgb(63, 76, 192)';
        click_btn.style.transform = 'rotate(180deg)';
        photos_container.style.opacity = '1';
        photos_container.style.transform = 'scale(0.95)';
        btn = 'pic';
    } else if (btn == 'pic') {
        main_container.forEach(main_container_element => {
            main_container_element.style.transform = 'translateY(0)';
        })
        picture_container.style.transform = 'translateY(0)';
        click_btn.style.background = 'orange';
        click_btn.style.transform = 'rotate(0)';
        photos_container.style.opacity = '0';
        photos_container.style.transform = 'scale(0.5)';
        btn = 'main';
    }
});

const selected_photos = document.querySelectorAll(".selected-img");
selected_photos.forEach(selected_photo => {
    selected_photo.addEventListener('click', () => {
        selected_photo.style.display = 'block';
        selected_photo.style.height = '100%';
        selected_photo.style.width = '100%';
        var url = selected_photo.getAttribute('src');
        window.open(url, '_self', 'Image', 'width=selected_photo.style.width,height=selected_photo.style.height,resizable=1');
    });
});

const textButtons = document.querySelectorAll('.main-container-contact-btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform:
    rotate(${index*13}deg)">${character}</span>`).join('')
});

const events = document.querySelector("#events");
const main_container_left = document.querySelectorAll(".main-container-left");
const main_container_right = document.querySelector(".main-container-rignt");
const container_opacity = document.querySelectorAll(".container-opacity");
const main_container_border = document.querySelectorAll(".main-container-border");

let events_height = events.offsetHeight;

window.addEventListener('scroll', () => {
    //events section
    let scroll = window.pageYOffset;
    let eventsY = events.getBoundingClientRect();
    let scroll_events = scroll;


    container_opacity.forEach(element => {
        element.style.opacity = scroll_events / (eventsY.top + events_height);
    });
    
    // main_container_right.style.transform = `translateY(${scroll_events / (events_height + eventsY.top) * 50 - 50}px)`;
    main_container_left.forEach(main_container_left_element => {
        main_container_left_element.style.transform = `translateY(${scroll_events / (events_height + eventsY.top) * -50 + 50}px)`;
    })

    main_container_border.forEach(main_container_border_element => {
        main_container_border_element.style.width = `${scroll_events / (events_height + eventsY.top) * 50}%`;
    })
});