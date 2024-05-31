import{y as C,E as L,z as O}from"./storage-BXeZpv23.js";import{c as P}from"./storageOrders-Ckb_myvQ.js";import"./index.esm2017-fCoYgFFR.js";import{c as M}from"./modelOrders-C599NMRw.js";const T=document.querySelector(".js-btn-address"),y=document.querySelector(".btn-save"),$=document.querySelector(".js-popup__input-name"),l=document.querySelector(".js-popup__input-street"),m=document.querySelector(".js-popup__input-city"),_=document.querySelector(".js-popup__input-phone"),I=document.querySelector(".js-popup"),j=document.querySelector(".input-name"),N=document.querySelector(".input-street"),B=document.querySelector(".input-city"),R=document.querySelector(".input-phone");T.addEventListener("click",S);y.addEventListener("click",F);y.addEventListener("click",S);const w=document.getElementById("phone-mask");IMask(w,{mask:"+{7}(000) 000-00-00"});function S(){I.classList.toggle("popup_open")}function A(){return $.value}function F(){const e=A();j.innerText=e}l.addEventListener("input",function(){N.innerText=l.value});m.addEventListener("input",function(){B.innerText=m.value});_.addEventListener("input",function(){R.innerText=_.value});const D=document.querySelectorAll('input[name="r"]');document.querySelector(".btn-save");const b=document.querySelector(".btn-paymant"),G=document.querySelector(".js-btn__payment"),H=document.querySelector(".js-popup-payment"),K=document.querySelector(".input-payment");G.addEventListener("click",v);b.addEventListener("click",v);b.addEventListener("click",Y);function v(){H.classList.toggle("popup__payment_open")}function Y(){for(let e of D)e.checked&&(K.innerText=e.value)}function z(e){const c=document.querySelector(e);return{checkoutBag:c,renderBagCheckout:function(s,r){console.log(r);let i="";s.forEach(t=>{const{id:d,model:q,series:f,price:E,image:k,descriptionShort:x}=t;i+=`
          <div class="big__bag__item" data-product-id="${d}">
          <div class="big__bag__item-image">
            <img class="big__bag-image" src="${k}" alt="">
          </div>
          <div class="big__bag__item__content">
            <h3 class="big__bag__item__content-title">${q}</h3>
            <p class="big__bag__item__content-subtitle">${f}</p>
            <p class="big__bag__item__content-description">${x}</p>
            <img src="/rating_4.5.png" alt="">
            <div class="price__wrapper">
              <div class="price">
               <div class="price__currency">
                <p class="label">$
                 <span class="price-text" >${E} х</span>
                </p> 
               </div>
               <div class="counter"> ${r[d]} </div>
              </div>
            </div>
          </div>
          
        </div>
        <img src="/Line 3.png" alt="">
        `}),c.innerHTML=i}}}const J=[],U=M(J),V=z(".checkout-bag"),Q=C(L),W=P(O),p=document.querySelector(".sum-text_usd"),X=document.querySelector(".total-sum-text"),Z=document.querySelector(".input-name"),ee=document.querySelector(".input-street"),te=document.querySelector(".input-city"),ne=document.querySelector(".input-phone"),oe=document.querySelector(".input-payment");document.querySelector(".big__bag__wrapper");let o={},u=0,n=0,a={},g=parseFloat(p.innerText);ce();function ce(){u=parseFloat(localStorage.getItem("sum")),u&&(p.innerText=u,g=parseFloat(p.innerText),n+=g+=6.99,n=Math.round(n*100)/100,X.innerText=n)}h();const re=localStorage.getItem("userId"),ie=o,ue=document.querySelector(".btn__post");ue.addEventListener("click",function(e){e.preventDefault,a={userId:re,deliveryPrice:6.99,city:te.textContent,line:ee.textContent,name:Z.textContent,phone:ne.textContent,paymentMethod:oe.textContent,items:ie,sum:u,total:Math.round(n*100)/100},U.add(a),W.push(a),alert("Нажмите ОК и ссылка на ваш заказ появится на главной странице магазина")});Q.pull().then(e=>{let c=e;h(),s();function s(){if(Object.keys(o).length===0){const t=document.querySelector("h2");t.textContent="Корзина пуста"}const r=Object.keys(o),i=c.filter(t=>r.includes(t.id));V.renderBagCheckout(i,o)}});function h(){localStorage.getItem("bag")!=null&&(o=JSON.parse(localStorage.getItem("bag")))}
