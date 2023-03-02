import {slicer, animate} from './helpers'
const moduleOne =()=>{
  const one =
    "Это рыбий текст Это рыбий текст Это рыбий текст Это рыбий текст  Это рыбий текст Это рыбий текст";
    const block = document.querySelector('.block')
 setTimeout(()=>{
  animate({
    duration: 10000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      block.style.left = progress * 86.5 + "%";
      block.style.top = progress * 25 + "%";
      block.style.opacity = progress;

    },
  });
 }, 1500)
   console.log(slicer(one));
}
export default moduleOne