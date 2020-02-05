const img = document.querySelectorAll('img');
const container = document.querySelector('.container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;


changeImage = () => {
    if (index > img.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = img.length - 1;
    }
    img.forEach((el) => {
        el.style.display = 'none';
    });
    img[index].style.display = 'block';
}

next.addEventListener('click', () => {
    index += 1;
    changeImage();
});

prev.addEventListener('click', () => {
    index -= 1;
    changeImage();
});

changeImage()