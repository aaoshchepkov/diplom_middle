'use strict';
const headListener = () => {
const headerMain = document.querySelector('.header-main');
headerMain.addEventListener(('click'), (event) => { 
let target = event.target; 
const clubsList = () => {
let clubsListItem = document.querySelector('.clubs-list > ul');
let clubsListBtn = document.querySelector('.clubs-list > p');
if (target === clubsListBtn && clubsListItem.style.display === 'block' ) 
{clubsListItem.style.display = 'none';} else if(target === clubsListBtn) {
  clubsListItem.style.display = 'block';
}
if (!target.closest('.clubs-list')) 
{clubsListItem.style.display = 'none';}
};
clubsList();

});
};

export default headListener;