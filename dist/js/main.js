(()=>{"use strict";(e=>{const t=document.getElementById("timer"),n=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let r,s=document.createElement("p");const a=()=>{let c=(()=>{let t=(new Date).getTime(),n=(Date.parse(e)-t)/1e3;return{timeRemaining:n,days:Math.floor(n/60/60/24),hours:Math.floor(n/60/60%24),minutes:Math.floor(n/60%60),seconds:Math.floor(n%60)}})();const i=e=>e<10?"0"+e:e;n.textContent=i(c.hours),l.textContent=i(c.minutes),o.textContent=i(c.seconds),s.setAttribute("id","timer-days"),s.textContent=`${c.days} Дн.`,t.prepend(s),clearInterval(r),c.timeRemaining>0?r=setInterval(a,1e3):c.timeRemaining<=0&&(s.textContent="0 Дн.",n.textContent=i(0),l.textContent=i(0),o.textContent=i(0))};a()})("23 febrary 2023"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),o=()=>{t.classList.toggle("active-menu")};l.forEach((e=>e.addEventListener("click",o))),e.addEventListener("click",o),n.addEventListener("click",o)})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup "),n=t.querySelector(".popup-content");let l=0;const o=()=>{l++,t.clientWidth>768?(n.style.left=l*t.clientWidth/150+"px",n.style.opacity=.02*l,l<50&&requestAnimationFrame(o)):(n.style.opacity="",n.style.left="")},r=()=>{t.style.display?(l=0,t.style.display="",cancelAnimationFrame(o)):(t.style.display="flex",requestAnimationFrame(o))};e.forEach((e=>e.addEventListener("click",r))),t.addEventListener("click",(e=>{(e.target.classList.contains("popup-close")||e.target===t)&&r()}))})(),document.querySelectorAll(".calc-item~input").forEach((e=>{e.addEventListener("input",(e=>{(e=>{e.target.value=e.target.value.replace(/\D+/,"")})(e)}))})),(()=>{const e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll('input[type="email"]'),n=document.querySelector(".mess");let l,o=document.createElement("span");const r=()=>{o.remove()},s=(e,t)=>{o.style.display="block",o.classList.add("error"),o.style.color="red",o.style.position="absolute",o.style.bottom="89px",o.style.right="77px",o.style.padding="5px",o.style.background="#fff",o.textContent=t,e.before(o)},a=e=>{e.addEventListener("input",(t=>{r(),/[а-я-\s]+/gi.test(t.target.value)?(r(),t.target.value):(l="Вводите кириллицу, пробел и дефис",s(e,l))}))};e.forEach((e=>{e.hasAttribute("name")&&a(e)})),t.forEach((e=>{var t;(t=e).addEventListener("input",(e=>{/(([\-\.\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(e.target.value)?(r(),e.target.value):(s(t,l),l="ведите верные значения")}))})),n.addEventListener("input",(()=>{a(n)}))})()})();