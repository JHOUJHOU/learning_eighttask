import './assets/scss/all.scss';


var swiper = new Swiper(".banner-mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: "infinite",
});


var swiper = new Swiper(".course-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
});

var swiper = new Swiper(".main-course-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 1,
    fill: 'row',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
      }
    }
  }}
);

var swiper = new Swiper(".buy-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-buy-next",
        prevEl: ".swiper-buy-prev",
      },
    }
  },
});


var swiper = new Swiper(".choose-mySwiper", {
  slidesPerView: 1,
  grid: {
    rows:2,
    fill: 'row',
  },
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows:4,
        fill: 'row',
      },
    }
  },
});


var swiper = new Swiper(".teacher-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows:1,
    fill: 'row',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows:1,
        fill: 'row',
      },
    }
  },
});