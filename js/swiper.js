// import Swiper JS
// import Swiper from '../swiper/swiper.min.js';




// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from '../swiper/swiper';
// // import Swiper and modules styles
// import 'node_modules/swiper/css';
// import 'node_modules/swiper/css/navigation';
// import 'node_modules/swiper/css/pagination';


const swiper = new Swiper('.swiper-container_cards_lm', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        type: 'bullets',
        clickable: true,
        // hideOnClick: false,
        // dynamicBullets: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

        // Фракция
        // type: 'fraction',

        // Прогрессбар
        // type: 'prorgessbar',
    },

    // slideToClickedSlide: true,

    // Автовысота
    // autoHeight: true,

    slidesPerView: 1,

    // Отступы
    spaceBetween: 10,

    // Бесконечность
    loop: true,

    // autoplay: {
    //     delay: 3000,
    //     disableOnnteraction: false,  
    // },
    
    breakpoints:{
        1440: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
        
        
    }
});
