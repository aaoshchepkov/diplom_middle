'use strict';
const headListener = () => {
  document.addEventListener(('click'), (event) => {
    let target = event.target;

    const clubsList = () => {
      let clubsListItem = document.querySelector('.clubs-list > ul');
      let clubsListBtn = document.querySelector('.clubs-list > p');
      if (target === clubsListBtn && clubsListItem.style.display === 'block') {
        clubsListItem.style.display = 'none';
      } else if (target === clubsListBtn) {
        clubsListItem.style.display = 'block';
      }
      if (!target.closest('.clubs-list')) {
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
    closeIcon.forEach((item) => {
      if (target === item) {
        freeVisitForm.style.display = 'none';
        callbackForm.style.display = 'none';
        gift.style.display = 'none';
      }
    });
    overlay.forEach((item) => {
      if (target === item) {
        freeVisitForm.style.display = 'none';
        callbackForm.style.display = 'none';
        gift.style.display = 'none';
      }
    });
  });
};

export default headListener;