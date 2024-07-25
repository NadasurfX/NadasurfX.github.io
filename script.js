let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const texts = document.querySelectorAll('.text');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        texts[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    texts[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

setInterval(nextSlide, 30000); // Change slide every 30 seconds

showSlide(slideIndex);

