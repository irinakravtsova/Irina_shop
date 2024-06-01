import{y as f,E as v}from"./storage-BXeZpv23.js";import{c as S}from"./view-Db5OC_La.js";import"./index.esm2017-fCoYgFFR.js";function y(d){const c=document.querySelector(d);return{bagNode:c,renderBag:function(s,n){let o="";s.forEach(g=>{const{id:t,model:a,series:i,price:r,image:u,descriptionShort:p}=g;o+=`
          <div class="big__bag__item" data-product-id="${t}">
          <div class="big__bag__item-image">
            <img class="big__bag-image" src="${u}" alt="">
          </div>
          <div class="big__bag__item__content">
            <h3 class="big__bag__item__content-title">${a}</h3>
            <p class="big__bag__item__content-subtitle">${i}</p>
            <p class="big__bag__item__content-description">${p}</p>
            <img src="./src/images/rating_4.5.png" alt="">
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
        `}),c.innerHTML=o}}}const w=f(v),B=S(".bag__item-wrapper"),h=y(".big__bag__wrapper");document.querySelector(".big__bag__wrapper");const E=document.querySelector(".sum-text_usd");let e={},_={};w.pull().then(d=>{let c=d;b(),s();function s(){const t=Object.keys(e);_=c.filter(a=>t.includes(a.id)),B.renderBagPreview(_)}n();function n(){if(Object.keys(e).length===0){const i=document.querySelector(".big__bag-title");i.textContent="Корзина пуста"}const t=Object.keys(e),a=c.filter(i=>t.includes(i.id));h.renderBag(a,e)}l(),document.addEventListener("click",o),document.addEventListener("click",g);function o(t){const a=t.target.closest(".add-btn");if(!a)return;const r=a.closest(".big__bag__item").dataset.productId;e[r]++,m(),n(),l()}function g(t){const a=t.target.closest(".minus-btn");if(!a)return;const r=a.closest(".big__bag__item").dataset.productId;e[r]>1?e[r]--:delete e[r],n(),m(),l(),b(),s(),Object.keys(e).length===0&&document.querySelector(".bag__item-wrapper").classList.add("bag-msg")}});function b(){return localStorage.getItem("bag")!=null&&(e=JSON.parse(localStorage.getItem("bag"))),e}function m(){localStorage.setItem("bag",JSON.stringify(e))}function l(){const d=document.querySelectorAll(".big__bag__item");let c=0;d.forEach(function(s){const n=s.querySelector("[data-counter]"),o=s.querySelector(".price-text"),g=parseInt(n.innerText)*parseFloat(o.innerText);c+=g}),E.innerText=Math.round(c*100)/100,localStorage.setItem("sum",JSON.stringify(c))}
