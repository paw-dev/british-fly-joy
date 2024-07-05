// import Swiper JS
// import Swiper from '../swiper/swiper.min.js';




// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from '../swiper/swiper';
// // import Swiper and modules styles
// import 'node_modules/swiper/css';
// import 'node_modules/swiper/css/navigation';
// import 'node_modules/swiper/css/pagination';

// function initializeSwiper(selector) {
//     return new Swiper(selector, {
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
    
//         pagination: {
//             el: '.swiper-pagination',
//             // Буллеты
//             type: 'bullets',
//             clickable: true,
//             // hideOnClick: false,
//             // dynamicBullets: true,
//             // renderBullet: function (index, className) {
//             //     return '<span class="' + className + '">' + (index + 1) + '</span>';
//             // },
    
//             // Фракция
//             // type: 'fraction',
    
//             // Прогрессбар
//             // type: 'prorgessbar',
//         },
    
//         // slideToClickedSlide: true,
    
//         // Автовысота
//         // autoHeight: true,
    
//         slidesPerView: 1,
    
//         // Отступы
//         spaceBetween: 10,
    
//         // Бесконечность
//         loop: true,
    
//         // autoplay: {
//         //     delay: 3000,
//         //     disableOnnteraction: false,  
//         // },
        
//         breakpoints:{
//             1440: {
//                 slidesPerView: 3,
//             },
//             768: {
//                 slidesPerView: 2,
//             },
//             480: {
//                 slidesPerView: 1,
//             },
            
            
//         }
//     });
// }

// const swiper1 = initializeSwiper('.swiper-container_cards_lm');
// const swiper2 = initializeSwiper('.swiper-container_cards_cruises');

// // import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// // register Swiper custom elements
// register();

const swiper_lm = new Swiper('.swiper-container_cards_lm',  {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

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
         320: {
            slidesPerView: 1,
        },
             700: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
   
       
        
        
    }
});


const swiper_cruises = new Swiper('.swiper-container_cards_cruises',  {
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
        320: {
           slidesPerView: 1,
       },
            700: {
           slidesPerView: 2,
       },
       1215: {
           slidesPerView: 3,
       },
    }
});
const swiper_villas = new Swiper('.swiper-container_cards_villas',  {
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

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

    // slidesPerView: 1,
    centeredSlides: true,

    slidesPerView: "auto", 

    // Отступы
    spaceBetween: 30,

    // Бесконечность
    // loop: true,

    // autoplay: {
    //     delay: 3000,
    //     disableOnnteraction: false,  
    // },
    
    // breakpoints:{
    //     1400: {
    //         slidesPerView: 2,
    //     },
    //     1440: {
    //         slidesPerView: 1.25,
    //     },
        
        // 768: {
        //     slidesPerView: 2,
        // },
        // 480: {
        //     slidesPerView: 1,
        // },
        
        
    // }
});
