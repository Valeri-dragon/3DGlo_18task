(()=>{"use strict";(e=>{const t=document.getElementById("timer"),n=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let a,o=document.createElement("p");const s=()=>{let c=(()=>{let t=(new Date).getTime(),n=(Date.parse(e)-t)/1e3;return{timeRemaining:n,days:Math.floor(n/60/60/24),hours:Math.floor(n/60/60%24),minutes:Math.floor(n/60%60),seconds:Math.floor(n%60)}})();const i=e=>e<10?"0"+e:e;n.textContent=i(c.hours),l.textContent=i(c.minutes),r.textContent=i(c.seconds),o.setAttribute("id","timer-days"),o.textContent=`${c.days} Дн.`,t.prepend(o),clearInterval(a),c.timeRemaining>0?a=setInterval(s,1e3):c.timeRemaining<=0&&(o.textContent="0 Дн.",n.textContent=i(0),l.textContent=i(0),r.textContent=i(0))};s()})("23 febrary 2023"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};l.forEach((e=>e.addEventListener("click",r))),e.addEventListener("click",r),n.addEventListener("click",r)})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup "),n=t.querySelector(".popup-content");let l=0;const r=()=>{l++,t.clientWidth>768?(n.style.left=l*t.clientWidth/150+"px",n.style.opacity=.02*l,l<50&&requestAnimationFrame(r)):(n.style.opacity="",n.style.left="")},a=()=>{t.style.display?(l=0,t.style.display="",cancelAnimationFrame(r)):(t.style.display="flex",requestAnimationFrame(r))};e.forEach((e=>e.addEventListener("click",a))),t.addEventListener("click",(e=>{(e.target.classList.contains("popup-close")||e.target===t)&&a()}))})(),document.querySelectorAll(".calc-item~input").forEach((e=>{e.addEventListener("input",(e=>{(e=>{e.target.value=e.target.value.replace(/\D+/,"")})(e)}))})),(()=>{const e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll('input[type="email"]'),n=document.querySelector(".mess"),l=document.querySelectorAll('input[type="tel"]');let r,a=document.createElement("span");const o=()=>{a.remove()},s=(e,t)=>{a.style.display="block",a.classList.add("error"),a.style.color="red",a.style.position="absolute",a.style.bottom="80px",a.style.right="77px",a.style.padding="5px",a.style.background="#fff",a.textContent=t,e.before(a)},c=e=>{e.addEventListener("input",(t=>{o(),/[а-я-\s]+/gi.test(t.target.value.trim())?(o(),t.target.value):(r="Можно использовать кириллицу, пробел или дефис",s(e,r),t.target.value=t.target.value.replace(/[a-z\s]+/gi,""))}))};e.forEach((e=>{e.hasAttribute("name")&&c(e)})),t.forEach((e=>{var t;(t=e).addEventListener("input",(e=>{/(([\-\.\_\~\*\'\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(e.target.value)?(o(),e.target.value):(s(t,r),r="Введите верный e-mail")}))})),l.forEach((e=>{var t;(t=e).addEventListener("input",(e=>{/^((8|\+375|\+7)[\- ]?)?\(?\d{2,3}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(e.target.value)?(o(),e.target.value):(s(t,r),r="Номер должен начинаться с +7, 8 или +375")}))})),n.addEventListener("input",(()=>{c(n)}))})()})();