

//Opening Modal -----------------------------------------------
const modal = document.getElementById('modal')
const close = document.getElementById('modal')

const openModal = () => {
    
    modal.style.display = 'block';
}

const closeModal = () => {
    
    modal.style.display = 'none';
}

close.addEventListener('click', closeModal)
setTimeout(openModal);

// Webpage Navigation -----------------------------------------------

const pages = document.getElementsByTagName('section');
const pageLinks = document.querySelectorAll('nav a');

for (let i = 0; i < pages.length; i++) {
    pageLinks[i].addEventListener('click', () => {
        for (let j = 0; j < pages.length; j++) {
            pages[j].style.display = 'none';
        }
        pages[i].style.display = 'block'
    })
}

//Project Carousel -----------------------------------------------

let currentImgIndex = 0;
let previousImgIndex = 0;
const images = document.getElementsByClassName('images');

function cycle(nextToPrevious) {
    previousImgIndex = currentImgIndex
    currentImgIndex = currentImgIndex + nextToPrevious
    images[previousImgIndex].style.display = 'none';
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
        currentImgIndex = images.length + nextToPrevious;
    }
    images[currentImgIndex].style.display = 'block'
}

const prev = document.querySelector('.prev')
prev.addEventListener('click', () => cycle(-1))

const next = document.querySelector('.next')
next.addEventListener('click', () => cycle(1))