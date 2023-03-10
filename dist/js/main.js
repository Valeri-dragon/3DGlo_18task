(()=>{"use strict";const e=({timing:e,draw:t,duration:a})=>{let o=performance.now();requestAnimationFrame((function r(l){let n=(l-o)/a;n>1&&(n=1);let s=e(1,n);t(s),n<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const a=document.getElementById(e),o=document.createElement("div");o.style.color="azure";try{if(!a)throw new Error("Верните форму на место");a.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=a.querySelectorAll("input"),r=new FormData(a),l={};var n;o.textContent="Загрузка...",a.append(o),r.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&"0"!==t.textContent&&(l[e.id]=t.textContent)})),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("error")&&(t=!1,o.textContent="Введите корректные данные")})),t})(e)&&(n=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((t=>{o.textContent="Спасибо! Наш менеджер с вами свяжется.",e.forEach((e=>{e.value=""}))})).catch((e=>{o.textContent="Ошибка..."}))})()}))}catch(e){console.log(e.message)}},a=new Date;a.setDate(a.getDate()+2),(e=>{const t=document.getElementById("timer"),a=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l,n=document.createElement("p");e&&(l=setInterval((()=>{let s=(()=>{let t=(new Date).getTime(),a=(Date.parse(e)-t)/1e3;return{timeRemaining:a,days:Math.floor(a/60/60/24),hours:Math.floor(a/60/60%24),minutes:Math.floor(a/60%60),seconds:Math.floor(a%60)}})();const c=e=>e<10?"0"+e:e;a.textContent=c(s.hours),o.textContent=c(s.minutes),r.textContent=c(s.seconds),n.setAttribute("id","timer-days"),n.textContent=`${c(s.days)} Дн.`,0==s.days&&(n.textContent=""),t.prepend(n),s.timeRemaining<=0&&(n.textContent="0 Дн.",a.textContent=c(0),o.textContent=c(0),r.textContent=c(0),clearInterval(l))}),1e3))})(a),(()=>{const e=document.querySelector("body"),t=document.querySelector("menu");let a;const o=e=>{e.preventDefault(),a=e.target.hasAttributes("href")&&"A"===e.target.tagName?e.target.getAttribute("href").substr(1):e.target.parentNode.getAttribute("href").substr(1),document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})};e.addEventListener("click",(e=>{e.target.matches(".close-btn")||e.target.closest(".menu")?(e.target.hasAttributes(["href=close"])&&e.preventDefault(),t.classList.toggle("active-menu")):e.target.closest("#link_service")?(t.classList.contains("active-menu")&&t.classList.remove("active-menu"),o(e)):e.target.closest("ul>li>a")?(o(e),t.classList.remove("active-menu")):e.target!==t.closest(".active-menu")&&t.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),a=document.querySelector(".popup "),o=a.querySelector(".popup-content"),r=()=>{a.style.display?a.style.display="":(a.style.display="flex",a.clientWidth>768&&e({duration:1e3,timing:(e,t)=>Math.pow(t,2)*((e+1)*t-e),draw(e){o.style.left=35.5*e+"%",o.style.top=25*e+"%"}}))};t.forEach((e=>e.addEventListener("click",r))),a.addEventListener("click",(e=>{(e.target.classList.contains("popup-close")||e.target===a)&&r()}))})(),((t=100)=>{const a=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),s=document.getElementById("total");let c,d=document.createElement("span");const i=(e,t)=>{d.style.display="block",d.classList.add("error"),d.style.color="red",d.style.position="absolute",d.style.top="0px",d.style.right="77px",d.style.padding="5px",d.style.background="#fff",d.textContent=t,e.before(d)};var u;u=a,a.addEventListener("input",(a=>{a.target.value=a.target.value.trim(),a.target===r&&"0"===a.target.value?(a.target.value=a.target.value.replace(/\D+/,""),c="Введите число больше 0",a.target.value="",a.placeholder,i(u,c)):/\D+/.test(a.target.value)&&a.target!==o?a.target.value=a.target.value.replace(/\D+/,""):o&&""===o.value?(c="Нужен объект",i(u,c)):r&&""===r.value?(c="Укажите общую площадь",i(u,c)):(c="",d.remove()),(()=>{const a=+o.options[o.selectedIndex].value,c=+r.value;let d=0,i=1,u=1;l.value>1&&(i+=+l.value/10),n.value&&n.value<5&&n.value>=1?u=2:n.value&&n.value<10&&n.value>=5&&(u=1.5),d=o.value&&r.value?t*a*c*i*u:0,e({duration:1e3,timing:(e,t)=>t,draw(e){s.textContent=Math.round(d*e)}})})()}))})(100),(()=>{const e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll('input[type="email"]'),a=document.querySelector(".mess"),o=document.querySelectorAll('input[type="tel"]');let r,l=document.createElement("span");const n=e=>{l.remove(),e.target.classList.remove("error"),e.target.classList.add("success"),e.target.style.border="1px solid green"},s=(e,t,a)=>{l.style.display="block",l.classList.add("error"),l.style.color="red",l.style.position="absolute",l.style.bottom="80px",l.style.right="77px",l.style.padding="5px",l.style.background="#fff",l.textContent=a,t.target.classList.add("error"),t.target.style.border="1px solid red",e.before(l)},c=e=>{e.addEventListener("input",(t=>{n(t),/[а-яё]+/gi.test(t.target.value.trim())?t.target!==a&&t.target.hasAttributes(["name=user_name"])&&t.target.value.length<=1?(r="Имя не может быть меньше 2 букв",s(e,t,r)):(n(t),t.target.value=t.target.value.replace(/[a-z\s\d]+/gi,"")):(r="Можно использовать кириллицу, пробел или дефис",s(e,t,r),t.target.value=t.target.value.replace(/[a-z\s\d]+/gi,""))}))};e.forEach((e=>{e.hasAttribute("name")&&c(e)})),t.forEach((e=>{var t;(t=e).addEventListener("input",(e=>{/(([\-\.\_\~\*\'\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(e.target.value)?n(e):(r="Введите верный e-mail",e.target.value=e.target.value.replace(/[^\w-@\.\!\~\*\'\$]/g,""),s(t,e,r))}))})),o.forEach((e=>{var t;(t=e).addEventListener("input",(e=>{/^((8|\+375|\+7)[\- ]?)?\(?\d{2,3}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(e.target.value)?n(e):(r="Номер должен начинаться с +7, 8 или +375",e.target.value=e.target.value.replace(/[^\+\(\)\-_\d]/gi,""),s(t,e,r))}))})),a.addEventListener("input",(e=>{c(a),setTimeout((()=>{n(e)}),1500)}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let a,o=document.querySelectorAll(".dot"),r=0;const l=(e,t,a)=>{e[t].classList.remove(a)},n=(e,t,a)=>{e[t].classList.add(a)},s=()=>{o=document.querySelectorAll(".dot"),l(t,r,"portfolio-item-active"),l(o,r,"dot-active"),r++,r>=t.length&&(r=0),n(t,r,"portfolio-item-active"),n(o,r,"dot-active")},c=(e=1500)=>{a=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,r,"portfolio-item-active"),l(o,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&o.forEach(((t,a)=>{e.target===t&&(r=a)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),n(t,r,"portfolio-item-active"),n(o,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&c(3500)}),!0),((e,t)=>{const a=document.createElement("ul");a.classList.add("portfolio-dots"),e.forEach(((e,t)=>{const o=document.createElement("li");o.classList.add("dot"),0==t&&o.classList.add("dot-active"),a.append(o)})),t.append(a)})(t,e),c(3500)})(),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();