const menu = () => {
  const menu = document.querySelector("menu");
const closeBtn = document.querySelector(".close-btn");
  document.addEventListener("click", (e) => {
     e.target.closest(".menu") && menu.classList.toggle("active-menu");
    e.target.matches(".close-btn") &&  menu.classList.remove("active-menu");
    e.target.closest("menu>ul>li>a") && menu.classList.remove("active-menu"); 
    e.target.closest("#link_service") && menu.classList.remove("active-menu");
    if (e.target === closeBtn) {
       e.preventDefault();
     }
  });
};
export default menu;
