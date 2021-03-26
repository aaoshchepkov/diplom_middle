"use strict";
const sendForm = () => {
  const errorMessage = "Что-то пошло не так...";
  const successMessage =
    "Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.";
  const forms = document.querySelectorAll("form");
  const thanks = document.getElementById("thanks");
  const loader = document.querySelector('.loader');

  const answerHandler = (form, message) => {
    if (form.closest(".popup")) {
      form.closest(".popup").style.display = "none";
    }
    thanks.style.display = "block";
    loader.style.display = 'none';
    thanks.querySelector(".form-wrapper").style.display = "block";
    thanks.querySelector("p").innerHTML = message;
    form.reset();
    setTimeout(() => {
      thanks.style.display = "none";
    }, 5000);
  };

  const createError = (block, text) => {
    const errorMessage = block.parentNode.querySelector(".error");
    if (!errorMessage) {
      const errorMessage = document.createElement("div");
      errorMessage.textContent = text;
      errorMessage.classList.add("error");
      block.parentNode.append(errorMessage);
    } else {
      errorMessage.style.display = "block";
    }
  };
  const deleteError = (block) => {
    const errorMessage = block.parentNode.querySelector(".error");
    if (errorMessage) {
      errorMessage.style.display = "none";
    }
  };
  const checkCheckbox = (block) => {
    if (!block.checked) {
      createError(block, "Нужно ваше согласие");
      return false;
    } else {
      deleteError(block);
      return true;
    }
  };

  let submitBtn = document.querySelectorAll('[type="submit"]');
  forms.forEach((itemForm) => {
    itemForm.addEventListener("click", (event) => {
      const personal = itemForm.querySelector(".personal-data > input");
      const tel = itemForm.querySelector('[type="tel"]');
      const clubs = itemForm.querySelectorAll('.club > input');
      const choseClubs = itemForm.querySelector('.choose-club > h5');
      let target = event.target;
      submitBtn.forEach((itemBtn) => {
        if (target !== itemBtn) {
          itemBtn.disabled = false;
        }
        if (itemBtn === target) {
          if (personal) {
            if (!personal.checked) {
              itemBtn.disabled = true;
              checkCheckbox(personal);
            }
          }
          if (tel.value.length < 18) {
           itemBtn.disabled = true; 
           
          }
          if(choseClubs) {
            if (clubs[0].checked || clubs[1].checked){
             choseClubs.style.color = '#ffd11a';
             return;
            } else {  itemBtn.disabled = true;
              choseClubs.style.color = '#ff0000';}
          }
          
        }
        if (target === clubs[0] || target === clubs[1] ) {
          choseClubs.style.color = '#ffd11a';
        }
      });
    });
  });

  
  const validate = () => {
    let promoCode = document.querySelector('[placeholder="Промокод"]');
    document.body.addEventListener("input", (e) => {
      const target = e.target;
      if (target.name === "name" && target !== promoCode) {
        target.value = target.value.replace(/[^а-яё\s]+/i, "");
      }
      if (target === promoCode) {
        target.value = target.value.replace(/[^а-яё\s][^0-9]+/i, "");
      }

      const checkPhone = (item) => {
        const patternPhone = /^\+?[78]\s?([-()]*\s?\d){10}$/;
        return patternPhone.test(item);
      };
      if (target.type === "tel") {
        if (!checkPhone(target.value) || target.value < 18 ) {
          target.style.border = "2px solid red";
          return;
        }
        target.style.border = "";
      }
    });
    const personalData = document.querySelectorAll(".personal-data > input");
    personalData.forEach((item) => {
      item.addEventListener("change", () => {
        checkCheckbox(item);
      });
    });
  };

  const postData = (body) =>
    fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  validate();

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.closest('.popup')) {
        form.closest('.popup').style.display = 'none';
      }
      // запускается прелоадер
      thanks.style.display = 'block';
      loader.style.display = 'flex';
      thanks.querySelector('.form-wrapper').style.display = 'none';




      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("status network not 200");
          }
          answerHandler(form, successMessage);
        })
        .catch((error) => {
          answerHandler(form, errorMessage);
          console.log(error);
        });
    });
  });
};

export default sendForm;
