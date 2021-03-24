'use strict';
const scrollTopMenu = () => {
  let topMenu = document.querySelector('.top-menu');
  let head = document.querySelector('.head');
  let headSlider = document.querySelector('.head-slider');
  let totop = document.querySelector('#totop');
  totop.style.display = 'none';
  document.addEventListener(('scroll'),()=>{
    if(screen.width < 768) {
      if (topMenu.getBoundingClientRect().top < 0){
      topMenu.style.position = 'fixed'; 
      
    } else if (head.getBoundingClientRect().top >= -head.clientHeight){
      topMenu.style.position = ''; 
    }
    } else {
      topMenu.style.position = ''; 
    }
    if (headSlider.getBoundingClientRect().top < -headSlider.clientHeight){
       totop.style.display = 'block'; 
    } else {totop.style.display = 'none';}
  });
};

export default scrollTopMenu;