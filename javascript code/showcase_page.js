const body = document.querySelector('body')
const parent_container_main = document.querySelector('.parent-container-main')
const navigation = document.querySelector('.navigation')
const parent_container = navigation.querySelector('.parent-container')
const navigation_showcase_container = parent_container.querySelectorAll('.showcase-container')

let scroll = parent_container_main.scrollTop
let scroll_index = scroll / (body.getBoundingClientRect().height - body.style.padding)

let parent_container_img = parent_container.querySelectorAll(`.showcase-container img`)
parent_container_img.forEach((element, index) => {
    if (Math.abs(index - scroll_index) < 0.1) {
        element.style.filter = `saturate(1)`;
    } else {
        element.style.filter = `saturate(0)`;
    }
})

navigation.style.top = `0px`

// if (navigation.getBoundingClientRect().height > (body.getBoundingClientRect().height - body.style.padding)) {
//     navigation.style.top = `${body.getBoundingClientRect().height/2}px`
// } else if (navigation.getBoundingClientRect().height <= (body.getBoundingClientRect().height - body.style.padding)) {
//     navigation.style.top = `0`
// }

// console.log(scroll / (body.getBoundingClientRect().height - body.style.padding));

parent_container_main.addEventListener('scroll', () => {
    let scroll = parent_container_main.scrollTop
    let scroll_index = scroll / (body.getBoundingClientRect().height - body.style.padding)

    let parent_container_img = parent_container.querySelectorAll(`.showcase-container img`)
    parent_container_img.forEach((element, index) => {
        if (Math.abs(index - scroll_index) < 0.4) {
            element.style.filter = `saturate(1)`;
        } else {
            element.style.filter = `saturate(0)`;
        }
    })

    let scroll_difference = parent_container_main.getBoundingClientRect().height * parent_container_img.length - body.getBoundingClientRect().height
    let top_difference = navigation.getBoundingClientRect().height - 3*body.getBoundingClientRect().height/4

    navigation.style.top = `${- top_difference / scroll_difference * scroll}px`
})

navigation_showcase_container.forEach((element, index) => {
    element.addEventListener('click', () => {
        parent_container_main.scrollTop = index * (body.getBoundingClientRect().height - body.style.padding)
    })
})