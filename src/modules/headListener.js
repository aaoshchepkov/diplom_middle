'use strict';
const headListener = () => {
  document.addEventListener(('click'), (event) => {
    let target = event.target;

    const clubsList = () => {
      let clubsListItem = document.querySelector('.clubs-list > ul');
      clubsListItem.style.zIndex = 1200;
      let clubsListBtn = document.querySelector('.clubs-list > p');
      if (target === clubsListBtn && clubsListItem.style.display === 'block') {
        clubsListItem.style.display = 'none';
      } else if (target === clubsListBtn) {
        clubsListItem.style.display = 'block';
      }
      if (!target.closest('.club-select')) {
        clubsListItem.style.display = 'none';
      }
    };
    clubsList();

    let freeVisitForm = document.querySelector('#free_visit_form');
    let callbackForm = document.querySelector('#callback_form');
    let gift = document.querySelector('#gift');
    let closeIcon = document.querySelectorAll('.close_icon');
    let overlay = document.querySelectorAll('.overlay');
    let fixedGift = document.querySelector('.fixed-gift');
    let btnMenu = document.querySelector('.menu-button > img');
    let popupMenu = document.querySelector('.popup-menu');
    let closeMenuBtn = document.querySelector('.close-menu-btn > img');
    let thanks = document.querySelector('#thanks');
    if (target.closest('.open-popup')) {
      freeVisitForm.style.display = 'block';
    }
    if (target.closest('#callback_form-btn')) {
      callbackForm.style.display = 'block';
    }
    if (target.closest('.fixed-gift')) {
      gift.style.display = 'block';
      fixedGift.style.display = 'none';
    }
    if (target === btnMenu){
      popupMenu.style.display = 'block';
    }
    if (target.closest('.scroll > a') || target === closeMenuBtn){
      popupMenu.style.display = 'none';
    }
    if(target.closest('.close-btn')){

      if(gift){
          gift.style.display = 'none';
        }
      if(thanks){
          thanks.style.display = 'none';
        }
    }
    closeIcon.forEach((item) => {
      if (target === item) {
        if (freeVisitForm){
          freeVisitForm.style.display = 'none';
        }
        if (callbackForm){
           callbackForm.style.display = 'none';
        }
       
        if(gift){
          gift.style.display = 'none';
        }
        if(thanks){
          thanks.style.display = 'none';
        }
        
      }
    });
    overlay.forEach((item) => {
      if (target === item) {
        if (freeVisitForm){
          freeVisitForm.style.display = 'none';
        }
        if (callbackForm){
           callbackForm.style.display = 'none';
        }
       
        if(gift){
          gift.style.display = 'none';
        }
        if(thanks){
          thanks.style.display = 'none';
        }
      }
    });
  });
};

export default headListener;