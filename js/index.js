        var swiper = new Swiper('.swiper-container', {

            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            lazy: true,
            spaceBetween: 30,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });