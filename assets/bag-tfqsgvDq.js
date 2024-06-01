import{y as f,E as v}from"./storage-724XkIP6.js";import"./index.esm2017-DI-Dex77.js";function S(r){const c=document.querySelector(r);return{bagNode:c,renderBag:function(i,a){let s="";i.forEach(g=>{const{id:t,model:n,series:o,price:d,image:u,descriptionShort:p}=g;s+=`
          <div class="big__bag__item" data-product-id="${t}">
          <div class="big__bag__item-image">
            <img class="big__bag-image" src="..${u}" alt="">
          </div>
          <div class="big__bag__item__content">
            <h3 class="big__bag__item__content-title">${n}</h3>
            <p class="big__bag__item__content-subtitle">${o}</p>
            <p class="big__bag__item__content-description">${p}</p>
            <img src="../rating_4.5.png" alt="">
            <div class="price__wrapper">
              <div class="price">
               <div class="price__currency">
                <p class="label">$
                 <span class="price-text" >${d} х</span>
    
                </p> 
               </div>
               <div class="counter"> ${a[t]} </div>
              </div>
              <div class="bag__counter">
                <button class="minus-btn" data-action="minus" data-id="${t}">
                  <img class="minus-btn" data-action="minus" data-id="${t}" src="../Increase-Button.png" alt="">
                </button>
                <p class="counter" data-counter>${a[t]}</p>
                <button class="add-btn" data-action="plus" data-id="${t}">
                  <img class="add-btn" data-action="plus" data-id="${t}" src="../Decrease-Button.png" alt="">
                </button>
              </div>
             
            </div>
          </div>
        </div>
        `}),c.innerHTML=s}}}function B(r){return{nodeBag:document.querySelector(r),renderBagPreview:function(i){let a="";i.forEach(s=>{a+=`
              <div class="bag__item">
                <img class="bag__image" src="..${s.image}" alt="">
              </div>
            `,this.nodeBag.innerHTML=a})}}}const y=f(v),h=B(".bag__item-wrapper"),w=S(".big__bag__wrapper");document.querySelector(".big__bag__wrapper");const E=document.querySelector(".sum-text_usd");let e={},_={};y.pull().then(r=>{let c=r;b(),i();function i(){const t=Object.keys(e);_=c.filter(n=>t.includes(n.id)),h.renderBagPreview(_)}a();function a(){if(Object.keys(e).length===0){const o=document.querySelector(".big__bag-title");o.textContent="Корзина пуста"}const t=Object.keys(e),n=c.filter(o=>t.includes(o.id));w.renderBag(n,e)}l(),document.addEventListener("click",s),document.addEventListener("click",g);function s(t){const n=t.target.closest(".add-btn");if(!n)return;const d=n.closest(".big__bag__item").dataset.productId;e[d]++,m(),a(),l()}function g(t){const n=t.target.closest(".minus-btn");if(!n)return;const d=n.closest(".big__bag__item").dataset.productId;e[d]>1?e[d]--:delete e[d],a(),m(),l(),b(),i(),Object.keys(e).length===0&&document.querySelector(".bag__item-wrapper").classList.add("bag-msg")}});function b(){return localStorage.getItem("bag")!=null&&(e=JSON.parse(localStorage.getItem("bag"))),e}function m(){localStorage.setItem("bag",JSON.stringify(e))}function l(){const r=document.querySelectorAll(".big__bag__item");let c=0;r.forEach(function(i){const a=i.querySelector("[data-counter]"),s=i.querySelector(".price-text"),g=parseInt(a.innerText)*parseFloat(s.innerText);c+=g}),E.innerText=Math.round(c*100)/100,localStorage.setItem("sum",JSON.stringify(c))}
