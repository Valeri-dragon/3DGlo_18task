const forms = () => {
  const nameInputs = document.querySelectorAll('input[type="text"]');
  const emailInputs = document.querySelectorAll('input[type="email"]');
  const userMessageInput = document.querySelector(".mess");
  const phoneinputs = document.querySelectorAll('input[type="tel"]');
  let str;
  let span = document.createElement("span");

  const removeError = (e) => {
    span.remove();
    e.target.classList.remove("error");
    e.target.classList.add("success");
    e.target.style.border = `1px solid green`;
  };

  const error = (e, ev, str) => {
    span.style.display = "block";
    span.classList.add("error");
    span.style.color = "red";
    span.style.position = `absolute`;
    span.style.bottom = `80px`;
    span.style.right = `77px`;
    span.style.padding = `5px`;
    span.style.background = `#fff`;
    span.textContent = str;
    ev.target.classList.add("error");
    ev.target.style.border = `1px solid red`;
    e.before(span);
  };

  const validateCyrillic = (e) => {
    e.addEventListener("input", (ev) => {
      removeError(ev);

      if (!/[а-яё]+/gi.test(ev.target.value.trim())) {
        str = "Можно использовать кириллицу, пробел или дефис";
        error(e, ev, str);
        ev.target.value = ev.target.value.replace(/[a-z\s\d]+/gi, "");
      } else if (
        ev.target !== userMessageInput &&
        ev.target.hasAttributes(["name=user_name"]) &&
        ev.target.value.length <= 1
      ) {
        str = "Имя не может быть меньше 2 букв";

        error(e, ev, str);
      } else {
        removeError(ev);
        ev.target.value = ev.target.value.replace(/[a-z\s\d]+/gi, "");
      }
    });
  };

  const validateEmail = (e) => {
    e.addEventListener("input", (ev) => {
      if (
        !/(([\-\.\_\~\*\'\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(
          ev.target.value
        ) ||
        ev.target.value.trim() === ""
      ) {
        str = "Введите верный e-mail";
        ev.target.value = ev.target.value.replace(/[^\w-@\.\!\~\*\'\$]/g, "");
        error(e, ev, str);
      } else {
        removeError(ev);
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
        removeError(ev);
      } else {
        str = "Номер должен начинаться с +7, 8 или +375";
        ev.target.value = ev.target.value.replace(/[^\+\(\)\-_\d]/gi, "");
        error(e, ev, str);
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

  userMessageInput.addEventListener("input", (e) => {
    validateCyrillic(userMessageInput);
    setTimeout(() => {
      removeError(e);
    }, 1500);
  });
};
export default forms;
