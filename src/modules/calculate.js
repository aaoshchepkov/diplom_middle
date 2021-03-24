'use strict';
const calculate = () => {
  const priceMozaika = ['1999', '9900', '13900', '19900'];
  const priceSchelkovo = ['2999', '14990', '21990', '24990'];
  let time = document.querySelectorAll('.time > input');
  let priceTotal = document.querySelector('#price-total');
  const cardOrder = document.querySelector('#card_order');
  const cardLetoMozaika = document.querySelector('#card_leto_mozaika');
  const inputPrice = document.querySelector('.price-message > input');
  let price;
  const calc = () => {
    priceTotal.textContent = price;

  };
  cardOrder.addEventListener(('input'),() => {
    if (cardLetoMozaika.checked === true ){
      time.forEach((item, i) => {
      if (item.checked) {price = priceMozaika[i];}
     });   
    } else 
    if(cardLetoMozaika.checked === false) {
      time.forEach((item, i) => {
      if (item.checked) {price = priceSchelkovo[i];}
    });
    }
    if (inputPrice.value === 'ТЕЛО2020'){
      price = Math.floor((price/100) *70);
    } 
   calc ();
  });

  
};

export default calculate;