// scroll the page
let wheeled = false;

function pageScroll() {
    if (! wheeled) {
        window.scrollBy(0,0.5);
        scrolldelay = setTimeout(pageScroll,25);
    } else {
        scrolldelay = setTimeout(pageScroll,2000);
        wheeled = false;
    }
}
window.addEventListener('wheel', () => {
    wheeled = true;
})

pageScroll();

//offset scroll
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const img_container = document.querySelectorAll('.img-container');

window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset

    let one_rect = one.getBoundingClientRect()
    let two_rect = two.getBoundingClientRect()
    let three_rect = three.getBoundingClientRect()
    let four_rect = four.getBoundingClientRect()

    let difference_one = one_rect.height - four_rect.height
    let difference_two = two_rect.height - four_rect.height
    let difference_three = three_rect.height - four_rect.height

    one.style.top = `-${(difference_one/(four_rect.height-window.innerHeight))*scroll}px`;
    two.style.top = `-${(difference_two/(four_rect.height-window.innerHeight))*scroll}px`;
    three.style.top = `-${(difference_three/(four_rect.height-window.innerHeight))*scroll}px`;
})

img_container.forEach(element => {
    element.addEventListener('click', () => {
        // window.open(`${element.querySelector('.title').textContent}.html`, '_blank');
        location.href = `${element.querySelector('.title').textContent}.html`;
    })
})