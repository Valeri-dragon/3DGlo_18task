const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const toggleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
  menuBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
};
export default menu;
