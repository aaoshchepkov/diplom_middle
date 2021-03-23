"use strict";
const mainSlider = () => {
      const slide = document.querySelectorAll(".main-slider > .slide");
      const slider = document.querySelector(".main-slider");
      let interval;
      let currentSlide = 0;

      const autoPlaySlide = () => {
        slide[currentSlide].style.display ='none';
        currentSlide++;
        if (currentSlide >= slide.length) {
          currentSlide = 0;
        } 
        slide[currentSlide].style.display ='flex';  
      };

      const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
      };

      const stopSlide = () => {
        clearInterval(interval);
      };

      slider.addEventListener('mouseover', (event) => {
       let target = event.target;
        if (target.closest(".slide")) {
          stopSlide();
        }
      });
      slider.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.closest(".slide")) {
          startSlide();
        }
      });

      startSlide(3000);
  };
  export default mainSlider;