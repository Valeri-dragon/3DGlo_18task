const forms = () => {
  const l = (lo) => {
    console.log(lo);
  };

  //name="user_name" //type="text"
  //name="user_email"// type="email"
  //name="user_phone" //type="tel"
  //name="user_message" //.mess

  const nameInputs = document.querySelectorAll('input[type="text"]');
  const emailInputs = document.querySelectorAll('input[type="email"]');
  const userMessageInput = document.querySelector(".mess");
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
    span.style.bottom = `89px`;
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
        str = "Вводите кириллицу, пробел и дефис";
        error(e, str);
      } else {
        removeError();
        ev.target.value;
      }
    });
  };

  const validateEmail = (e) => {
    e.addEventListener("input", (ev) => {
      if (/(([\-\.\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(ev.target.value)) {
        removeError();
        ev.target.value;
      } else {
        error(e, str);
        str = "ведите верные значения";
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

  userMessageInput.addEventListener("input",()=>{
validateCyrillic(userMessageInput);
  } );
};
export default forms;
