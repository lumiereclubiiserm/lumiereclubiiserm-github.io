const about = document.querySelector("#about");
const image_container = document.querySelector(".imgContainer");
const content = document.querySelector(".content");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let about_height = about.offsetHeight;

window.addEventListener('scroll', () => {
        //about section
        let scroll = window.pageYOffset;
        let aboutY = about.getBoundingClientRect();
        let scroll_about = scroll - 2 * document.body.clientHeight;


        opacity.forEach(element => {
            element.style.opacity = scroll_about / (aboutY.top + about_height);
        });
        
        content.style.transform = `translateY(${scroll_about / (about_height + aboutY.top) * 50 - 50}px)`;
        image_container.style.transform = `translateY(${scroll_about / (about_height + aboutY.top) * -50 + 50}px)`;
    
        border.style.width = `${scroll_about / (about_height + aboutY.top) * 50}%`;
})