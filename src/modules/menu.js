const menu = () => {
  const body = document.querySelector("body");
  const menu = document.querySelector("menu");

  const toggleMenu = () => {
    menu.classList.toggle("active-menu");
  };
  const scroll = (e) => {
    e.preventDefault();
    const ID = e.target.getAttribute("href").substr(1);
    document
      .getElementById(ID)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  body.addEventListener("click", (e) => {
    if (e.target.matches(".close-btn") || e.target.closest(".menu")) {
      toggleMenu();
    } else if (e.target.id === "link_service" || e.target.closest("ul>li>a")) {
      scroll(e);
      if (e.target.closest("ul>li>a")) {
        toggleMenu();
      }
    }
  });
};
export default menu;
