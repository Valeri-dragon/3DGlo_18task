const forms = () => {
  const nameInputs = document.querySelectorAll('input[type="text"]');
  const emailInputs = document.querySelectorAll('input[type="email"]');
  const userMessageInput = document.querySelector(".mess");
  const phoneinputs = document.querySelectorAll('input[type="tel"]');
  let str;
  let span = document.createElement("span");

  const removeError = () => {
    span.remove();
  };

  const error = (e, str) => {
    span.style.display = "block";
    span.classList.add("error");
    span.style.color = "red";
    span.style.position = `absolute`;
    span.style.bottom = `80px`;
    span.style.right = `77px`;
    span.style.padding = `5px`;
    span.style.background = `#fff`;
    span.textContent = str;
    e.before(span);
  };

  const validateCyrillic = (e) => {
    e.addEventListener("input", (ev) => {
      removeError();

      if (!/[а-я-\s]+/gi.test(ev.target.value.trim())) {
        str = "Можно использовать кириллицу, пробел или дефис";
        error(e, str);
      } else {
        removeError();
        ev.target.value;
      }
    });
  };

  const validateEmail = (e) => {
    e.addEventListener("input", (ev) => {
      if (
        /(([\-\.\_\~\*\'\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(
          ev.target.value
        )
      ) {
        removeError();
        ev.target.value;
      } else {
        error(e, str);
        str = "Введите верный e-mail";
      }
    });
  };

  const validatePhone = (e) => {
    e.addEventListener("input", (ev) => {
      if (
        /^((8|\+375|\+7)[\- ]?)?\(?\d{2,3}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(
          ev.target.value
        )
      ) {
        removeError();
        ev.target.value;
      } else {
        error(e, str);
        str = "Номер должен начинаться с +7, 8 или +375";
      }
    });
  };

  nameInputs.forEach((item) => {
    if (item.hasAttribute("name")) {
      validateCyrillic(item);
    }
  });

  emailInputs.forEach((item) => {
    validateEmail(item);
  });
  
  phoneinputs.forEach((item) => {
    validatePhone(item);
  });

  userMessageInput.addEventListener("input", () => {
    validateCyrillic(userMessageInput);
  });
};
export default forms;
