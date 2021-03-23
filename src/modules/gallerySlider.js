"use strict";
const gallerySlider = () => {
  const gallerySliders = () => {
    const addDots = () => {
      const slide = document.querySelectorAll(".gallery-slider > .slide");
      const dotsWrapper = document.querySelector(".gallery-slider");
      dotsWrapper.style.position = "relative";
      let li;
      let ul;
      let button;
      ul = document.createElement("ul");
      ul.classList.add("slider-dots");
      dotsWrapper.appendChild(ul);
      slide.forEach((item, i) => {
        li = document.createElement("li");
        button = document.createElement("button");
        li.classList.add("slider-dot");
        button.classList.add("dot");
        if (i === 0) {
          li.classList.add("slick-active");
        }
        if (i < slide.length) {
          ul.appendChild(li);
          li.appendChild(button);
        }
      });
    };
    addDots();

    const slide = document.querySelectorAll(".gallery-slider > .slide");
    const slider = document.querySelector(".gallery-slider");
    const dot = document.querySelectorAll(".slider-dots > li");
    const button = document.querySelectorAll(".dot");
    let interval;
    let currentSlide = 0;
    slide.forEach((item, i) => {
      slide[i].style.display = "none";
      slide[0].style.display = "block";
    });

    const autoPlaySlide = () => {
      slide[currentSlide].style.display = "none";
      dot[currentSlide].classList.remove("slick-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      slide[currentSlide].style.display = "block";
      dot[currentSlide].classList.add("slick-active");
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches(".dot")) {
        return;
      }
      slide[currentSlide].style.display = "none";
      dot[currentSlide].classList.remove("slick-active");
      if (target.matches(".dot")) {
        button.forEach((elem, index) => {
          if (target === elem) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      slide[currentSlide].style.display = "block";
      dot[currentSlide].classList.add("slick-active");
    });

    slider.addEventListener("mouseover", (event) => {
      let target = event.target;
      if (target.closest(".slide") || target.closest(".slider-dot")) {
        stopSlide();
      }
    });
    slider.addEventListener("mouseout", (event) => {
      let target = event.target;
      if (target.closest(".slide") || target.closest(".slider-dot")) {
        startSlide();
      }
    });

    startSlide(3000);
  };
  gallerySliders();
};
export default gallerySlider;
