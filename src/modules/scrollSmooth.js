const scrollSmooth = () => {
  const serviceBlock = document.getElementById("service-block");

  const handleScroll = (e, elem) => {
    e.preventDefault();
    elem.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollToSection = (e) => {
    const targetHref = e.target.getAttribute("href").substr(1);
    const targetElem = document.getElementById(targetHref);
    handleScroll(e, targetElem);
  };

  document.addEventListener("click", (e) => {
    e.target.closest("#link_service") && handleScroll(e, serviceBlock);
    e.target.closest("menu>ul>li>a") && scrollToSection(e);
  });
};
export default scrollSmooth;
