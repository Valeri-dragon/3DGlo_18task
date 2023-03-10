import { removeMessage } from "./helpers";
const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";
  const inCorrectValue = "Введите корректные данные";
  const noValueEmail = "Поле e-mail должно быть заполнено";
  statusBlock.style.color = "azure";
  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (input.classList.contains("error")) {
        success = false;
        statusBlock.textContent = inCorrectValue;
        removeMessage(statusBlock);
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const inEmai = form.querySelector('input[type="email"]');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      if (val !== "") {
        formBody[key] = val;
      }
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        if (element.textContent !== "0") {
          formBody[elem.id] = element.textContent;
        }
      }
    });
    if (validate(formElements) && inEmai.value.trim() !== "") {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          removeMessage(statusBlock);
          formElements.forEach((input) => {
            input.value = "";
            input.style.border = "";
            input.classList.remove("success");
          });
if (form.closest(".popup")){
 setTimeout(() => {
form.closest(".popup").style.display = "";
 }, 2500);
}
 
          
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          removeMessage(statusBlock);
        });
    } else {
      statusBlock.textContent = noValueEmail;
      removeMessage(statusBlock);
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
