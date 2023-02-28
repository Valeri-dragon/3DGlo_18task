const menu = () => {
  const body = document.querySelector("body");
  const menu = document.querySelector("menu");
  let ID;
  const toggleMenu = () => {
    menu.classList.toggle("active-menu");
  };
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
  body.addEventListener("click", (e) => {
    if (e.target.matches(".close-btn") || e.target.closest(".menu")) {
      toggleMenu();
    } else if (e.target.closest("#link_service")) {
      scroll(e);
    } else if (e.target.closest("ul>li>a")) {
      scroll(e);
      toggleMenu();
    }
  });
};
export default menu;
