import { animate } from "./helpers";
const modal = () => {
  const popupBtns = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup ");
  const popupContent = popup.querySelector(".popup-content");

  const openPopup = () => {
    if (!popup.style.display) {
      popup.style.display = "flex";
      if (popup.clientWidth > 768) {
        animate({
          duration: 1000,
          timing(x, timeFraction) {
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
          },
          draw(progress) {
            popupContent.style.left = progress * 35.5 + "%";
            popupContent.style.top = progress * 25 + "%";
          },
        });
      }
    } else {
      popup.style.display = "";
    }
  };

  popupBtns.forEach((item) => item.addEventListener("click", openPopup));

  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-close") || e.target === popup) {
      openPopup();
    }
  });
};
export default modal;
