// const carouselImages = document.querySelector('.hero__image-slider');
// const images = document.querySelectorAll('.hero__image-slider img');
// let currentIndex = 0;

// function changeImage() {
//     currentIndex++;
//     if (currentIndex >= images.length) {
//         currentIndex = 0;
//     }
//     carouselImages.style.transform = `translateX(${-currentIndex * 580}px)`;
// }

// setInterval(changeImage, 2000);

const navbarButton = document.querySelector(".navbar__button");
const navbarLinks = document.querySelector(".navbar__links");
const navbarCta = document.querySelector(".navbar__cta");

navbarButton.addEventListener('click', () => {
    navbarButton.classList.toggle("active");
    navbarLinks.classList.toggle("active");
    navbarCta.classList.toggle("active");
})

const boardCard = document.querySelectorAll(".solution__board-card");

boardCard.forEach((card, index) => card.addEventListener('click', () => {
    console.log(boardCard[index-6])
    boardCard[index].classList.toggle("oculto");
    boardCard[index-6].classList.toggle("oculto");
}))