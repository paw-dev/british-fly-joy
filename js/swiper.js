// import Swiper JS
// import Swiper from '../swiper/swiper.min.js';




// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from '../swiper/swiper';
// // import Swiper and modules styles
// import 'node_modules/swiper/css';
// import 'node_modules/swiper/css/navigation';
// import 'node_modules/swiper/css/pagination';


const swiper = new Swiper('.swiper-container_cards', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slideToClickedSlide: true,

    // Автовысота
    // autoHeight: true,

    slidesPerView: 1,

    // Отступы
    spaceBetween: 24,

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
