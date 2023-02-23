

//Opening Modal -----------------------------------------------

//Grabbing Elements
const modal = document.getElementById('modal')
const close = document.getElementById('modal')

//Functions
const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none'
}


//Event Listeners

close.addEventListener('click', closeModal)

// Open modal after someone visits the page
setTimeout(openModal);





// Webpage Navigation -----------------------------------------------

//GET PAGE SECTIONS 
const pages = document.getElementsByTagName('section');


// GET PAGE LINKS
const pageLinks = document.querySelectorAll('nav a');
// 'nav a' targets all the a tags in the nav tag


// ADD EVENT LISTENERS TO PAGE LINKS
for (let i = 0; i < pages.length; i++) {
    pageLinks[i].addEventListener('click', () => {
        // when the page link is clicked, hide all page sections...
        for (let j = 0; j < pages.length; j++) {
            pages[j].style.display = 'none';
            // makes the other pages not display
        }
        // ...but display the page whose link was clicked
        pages[i].style.display = 'block'
    })
}

//Project Carousel -----------------------------------------------

// KEEP TRACK OF WHICH IMAGE IS SHOWING
let currentImgIndex = 0;
let previousImgIndex = 0;


// SELECT ALL IMAGE ELEMENTS
const images = document.getElementsByClassName('images');


// CREATE A FUNCTION THAT WILL CYCLE THROUGH THE IMAGES, REGARDLESS OF WHICH BUTTONW AS PRESSED
function cycle(nextToPrevious) {
    // set the index of the previous image to the index of the image that is currently being shown
    previousImgIndex = currentImgIndex
    currentImgIndex = currentImgIndex + nextToPrevious
    // hide the previous image
    images[previousImgIndex].style.display = 'none';

    // check if the next image index exists in our images array
    if (currentImgIndex >= images.length) {
        // if the next image index does not exist, rest the index back to zero
        currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
        // if the next image index does not exist, rest the index back to zero
        currentImgIndex = images.length + nextToPrevious;
    }
    // display the next image
    images[currentImgIndex].style.display = 'block'
}


// ADD EVENT LISTENER TO PREVIOUS BUTTON
const prev = document.querySelector('.prev')
prev.addEventListener('click', () => cycle(-1))


// ADD EVENT LISTENER TO NEXT BUTTON
const next = document.querySelector('.next')
next.addEventListener('click', () => cycle(1))


/*
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navbar');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
})
})*/