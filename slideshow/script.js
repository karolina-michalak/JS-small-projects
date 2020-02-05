let slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideIndex = 0;

changePhoto = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(changePhoto, 10000);
}

prev.addEventListener('click', () => {
    slideIndex -= 1;
    changePhoto()
})

next.addEventListener('click', () => {
    slideIndex += 1;
    changePhoto()
})

window.onload = changePhoto