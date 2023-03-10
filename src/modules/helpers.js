const animate = ({ timing, draw, duration }) => {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    let progress = timing(1, timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};
const removeMessage = (elem)=>{
 setTimeout(()=>{
elem.textContent = "";
 },5000) 
}
export { animate,removeMessage };
