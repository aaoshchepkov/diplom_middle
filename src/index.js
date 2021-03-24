  'use strict';
  import headListener from './modules/headListener';
  import scrollTopMenu from './modules/scrollTopMenu';
  import mainSlider from './modules/mainSlider';
  import gallerySlider from './modules/gallerySlider';
  import calculate from './modules/calculate';
  import sendForm from './modules/sendForm';
  import validate from './modules/validate';
  import sliderCarousel from './modules/sliderCarousel';

  
  headListener();
  scrollTopMenu();
  mainSlider();
  gallerySlider();
  calculate();
  sendForm();
  validate();

  const options = {
  main: '.services-slider-wrapper',
  wrap: '.services-slider',
  prev: '.services-slider__prev',
  next: '.services-slider__next',
  slidesToShow: 5,
  responsive: [{
    breakpoint: 1200,
    slidesToShow: 4,
  },
  {
    breakpoint: 1024,
    slidesToShow: 3,
  },
  {
    breakpoint: 768,
    slidesToShow: 2,
  },
  {
    breakpoint: 576,
    slidesToShow: 1,
  }
  ]
};
const carousel = new sliderCarousel(options);
carousel.init();
  

