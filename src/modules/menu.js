const menu = () => {
  const body = document.querySelector("body");
  const menu = document.querySelector("menu");
  let ID;

  const scroll = (e) => {
    e.preventDefault();
    if (e.target.hasAttributes("href") && e.target.tagName === "A") {
      ID = e.target.getAttribute("href").substr(1);
    } else {
      ID = e.target.parentNode.getAttribute("href").substr(1);
    }
    document
      .getElementById(ID)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMenu = () => {
    body.addEventListener("click", (e) => {
      if (e.target.matches(".close-btn") || e.target.closest(".menu")) {
        menu.classList.toggle("active-menu");
      } else if (e.target.closest("#link_service")) {
        scroll(e);
      } else if (e.target.closest("ul>li>a")) {
        scroll(e);
        menu.classList.remove("active-menu");
      } else if (e.target !== menu.closest(".active-menu")) {
        menu.classList.remove("active-menu");
      }
    });
  };

  toggleMenu();
};
export default menu;
