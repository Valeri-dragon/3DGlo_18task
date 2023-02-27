const modal = () => {
  const popupBtns = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector(".popup ");
  const popupContent = popup.querySelector(".popup-content");

  let pos = 0;

  const myAnimation = () => {
    pos++;
    if (popup.clientWidth > 768) {
      popupContent.style.left = (pos * popup.clientWidth) / 150 + "px";
      popupContent.style.opacity = pos * 0.02;
      if (pos < 50) {
        requestAnimationFrame(myAnimation);
      }
    } else {
      popupContent.style.opacity = "";
      popupContent.style.left = "";
    }
  };

  const openPopup = () => {
    if (!popup.style.display) {
      popup.style.display = "flex";
      requestAnimationFrame(myAnimation);
    } else {
      pos = 0;
      popup.style.display = "";
      cancelAnimationFrame(myAnimation);
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
