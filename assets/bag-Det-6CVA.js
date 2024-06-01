import{y as f,E as v}from"./storage-BXeZpv23.js";import{c as S}from"./view-Dzz8Z01X.js";import"./index.esm2017-fCoYgFFR.js";function y(d){const c=document.querySelector(d);return{bagNode:c,renderBag:function(i,n){let o="";i.forEach(l=>{const{id:t,model:a,series:s,price:r,image:u,descriptionShort:p}=l;o+=`
          <div class="big__bag__item" data-product-id="${t}">
          <div class="big__bag__item-image">
            <img class="big__bag-image" src=".${u}" alt="">
          </div>
          <div class="big__bag__item__content">
            <h3 class="big__bag__item__content-title">${a}</h3>
            <p class="big__bag__item__content-subtitle">${s}</p>
            <p class="big__bag__item__content-description">${p}</p>
            <img src="./rating_4.5.png" alt="">
            <div class="price__wrapper">
              <div class="price">
               <div class="price__currency">
                <p class="label">$
                 <span class="price-text" >${r} х</span>
    
                </p> 
               </div>
               <div class="counter"> ${n[t]} </div>
              </div>
              <div class="bag__counter">
                <button class="minus-btn" data-action="minus" data-id="${t}">
                  <img class="minus-btn" data-action="minus" data-id="${t}" src="/Increase-Button.png" alt="">
                </button>
                <p class="counter" data-counter>${n[t]}</p>
                <button class="add-btn" data-action="plus" data-id="${t}">
                  <img class="add-btn" data-action="plus" data-id="${t}" src="/Decrease-Button.png" alt="">
                </button>
              </div>
             
            </div>
          </div>
        </div>
        `}),c.innerHTML=o}}}const w=f(v),B=S(".bag__item-wrapper"),h=y(".big__bag__wrapper");document.querySelector(".big__bag__wrapper");const E=document.querySelector(".sum-text_usd");let e={},_={};w.pull().then(d=>{let c=d;b(),i();function i(){const t=Object.keys(e);_=c.filter(a=>t.includes(a.id)),B.renderBagPreview(_)}n();function n(){if(Object.keys(e).length===0){const s=document.querySelector(".big__bag-title");s.textContent="Корзина пуста"}const t=Object.keys(e),a=c.filter(s=>t.includes(s.id));h.renderBag(a,e)}g(),document.addEventListener("click",o),document.addEventListener("click",l);function o(t){const a=t.target.closest(".add-btn");if(!a)return;const r=a.closest(".big__bag__item").dataset.productId;e[r]++,m(),n(),g()}function l(t){const a=t.target.closest(".minus-btn");if(!a)return;const r=a.closest(".big__bag__item").dataset.productId;e[r]>1?e[r]--:delete e[r],n(),m(),g(),b(),i(),Object.keys(e).length===0&&document.querySelector(".bag__item-wrapper").classList.add("bag-msg")}});function b(){return localStorage.getItem("bag")!=null&&(e=JSON.parse(localStorage.getItem("bag"))),e}function m(){localStorage.setItem("bag",JSON.stringify(e))}function g(){const d=document.querySelectorAll(".big__bag__item");let c=0;d.forEach(function(i){const n=i.querySelector("[data-counter]"),o=i.querySelector(".price-text"),l=parseInt(n.innerText)*parseFloat(o.innerText);c+=l}),E.innerText=Math.round(c*100)/100,localStorage.setItem("sum",JSON.stringify(c))}
