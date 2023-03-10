const menu = () => {
  const menu = document.querySelector("menu");

  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      menu.classList.add("active-menu");
    } else if (
      e.target.matches(".close-btn") ||
      e.target.closest("a") ||
      !e.target.closest("menu")
    ) {
      if (e.target.hasAttributes(["href=close"])) {
        e.preventDefault();
      }
      menu.classList.remove("active-menu");
    }
  });
};
export default menu;
