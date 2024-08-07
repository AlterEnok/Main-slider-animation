const video = document.querySelector('.video-background');
const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mouseWheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});


swiperText.on('slideChange', function () {
    gsap.to(video, {
        duration: 1.6,
        currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
        ease: "power2.out"
    });
});


swiperText.on('slideChangeTransitionStart', function () {
    video.classList.add('change');
});

swiperText.on('slideChangeTransitionEnd', function () {
    video.classList.remove('change');
});