const mainImages = document.querySelectorAll('.default .main-img img');
const thumbnails = document.querySelectorAll('.default .thumb-list div');
const lightboxMainImages = document.querySelectorAll('.lightbox .main-img img');
const lightboxThumbnails = document.querySelectorAll('.lightbox .thumb-list div');
const lightbox = document.querySelector('.lightbox');
const iconClose = document.querySelector('.icon-close')
const iconPrev = document.querySelector('.icon-prev')
const iconNext = document.querySelector('.icon-next');

let currentIndex = 0;
function changeImage(index, mainImages, thumbnails) {
    mainImages.forEach((img) => {
        img.classList.remove('active');
    })

    thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
    })

    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
    currentIndex = index;
}

lightboxThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, lightboxMainImages, lightboxThumbnails);
    })
});


thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, mainImages, thumbnails);
    })
})


mainImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active')
        changeImage(index, lightboxMainImages, lightboxThumbnails);
    })
});


iconPrev.addEventListener('click', () => {
    if (currentIndex <= 0) {
        changeImage(mainImages.length - 1, lightboxMainImages, lightboxThumbnails);
    } else {
        changeImage(currentIndex - 1, lightboxMainImages, lightboxThumbnails)
    }
})

iconNext.addEventListener('click', () => {
    if (currentIndex >= mainImages.length - 1) {
        changeImage(0, lightboxMainImages, lightboxThumbnails);
    } else {
        changeImage(currentIndex + 1, lightboxMainImages, lightboxThumbnails)
    }
})


iconClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
})

