'use strict';
const scrollTopMenu = () => {
  let topMenu = document.querySelector('.top-menu');
  let head = document.querySelector('.head');
  let headSlider = document.querySelector('.head-slider');
  let totop = document.querySelector('#totop');
  document.addEventListener(('scroll'),()=>{
    if(screen.width < 768) {
      if (topMenu.getBoundingClientRect().top < 0){
      head.style.marginTop = topMenu.clientHeight + 'px';
      topMenu.style.position = 'fixed'; 
      
    } else if (head.getBoundingClientRect().top >= -head.clientHeight){
      head.style.marginTop = 0 + 'px';
      topMenu.style.position = ''; 
    }
    } else {
      head.style.marginTop = 0 + 'px';
      topMenu.style.position = ''; 
    }
    if (headSlider.getBoundingClientRect().top < -headSlider.clientHeight){
       totop.style.display = 'block'; 
    } else {totop.style.display = 'none';}
    
  });

};

export default scrollTopMenu;