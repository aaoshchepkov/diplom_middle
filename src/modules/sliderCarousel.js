export default class sliderCarousel {
  constructor({ main, wrap, next, prev, position = 0, slidesToShow = 5, responsive = [] }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.slides = document.querySelector(wrap).children;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow
    };
    this.responsive = responsive;
  }

  init() {
    this.addClass();
    this.addStyle();
    this.controlSlider();
    this.responseInit();
  }

  addClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    style.textContent = `    
      .glo-slider__item {
        flex: 0 0 ${this.options.widthSlide}%;
      }
    `;
    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      this.next.style.display = 'block';
      if (this.options.position === 0) {
        this.prev.style.display = 'none';
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      this.prev.style.display = 'block';
      if (this.options.position === this.options.maxPosition) {
        this.next.style.display = 'none';
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }

    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}