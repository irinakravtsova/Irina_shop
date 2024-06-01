import{y as v,E as u,z as b}from"./storage-724XkIP6.js";import{c as O}from"./storageOrders-Crj3oSg9.js";import{a as h}from"./viewErorMsg-BXHX2ySh.js";function $(e){const t=document.querySelector(e);return{orderNode:t,renderOrderAddress:function(s){let r="";const{id:a,userName:d,city:i,line:c,phone:n,deliveryPrice:l,paymentMethod:o,sum:_,total:g}=s;r+=`
          <h2 class="order__title">Заказ ${a} </h2>
          <div class="orders">
            <div class="checkout__wrapper">
              <div class="address">
                <h2 class="title">Адрес доставки</h2>
                <div class="address__wrapper">
                  <form class="address__form" action="">
                     <div class="address__content">
                      <p class="input-name text">${d}</p>
                      <p class="input-street text">${c}</p>
                      <p class="input-city text">${i}</p>
                      <p class="input-phone text">${n}</p> 
                    </div>
                  </form> 
                </div>
              </div>
            
              <div class="payment">
                <h2 class="title">способ оплаты</h2>
                <div class="address__wrapper">
                  <div class="payment__content">
                    <img class="payment__card" src="../card.png" alt="">
                    <p class="input-payment text">${o}</p>
                  </div>
                  
                </div>
              </div>
            </div>
           
            <div class="total">
              <h2 class="text total__text">Сумма</h2>
              <div class="sum-box">
                <p class="total-text label">Товары:</p>
                <span class="total-text sum-text_usd" >$ ${_} </span>
              </div> 
              <div class="sum-box">
                <p class="total-text">Доставка:</p>
                <p class="delivery total-text">$ ${l}</p>
              </div>
              <img src="../total_line.png" alt=""> 
              <div class="sum-box">
                <p class="total__sum-text">Стоимость:</p>
                <span class="total-sum-text sum-text_usd">$ ${g} </span>
              </div>
              <img src="../total_line.png" alt="">
             </div>
          `,t.innerHTML=r}}}function f(e){const t=document.querySelector(e);return{orderBagNode:t,renderOrderBag:function(s,r){let a="";s.forEach(d=>{const{id:i,model:c,series:n,price:l,image:o,descriptionShort:_}=d;a+=`
            <div class="big__bag__wrapper order__card-wrapper">
            <div class="big__bag__item" data-product-id="${i}">
            <div class="big__bag__item-image">
              <img class="big__bag-image" src="..${o}" alt="">
            </div>
            <div class="big__bag__item__content">
              <h3 class="big__bag__item__content-title">${c}</h3>
              <p class="big__bag__item__content-subtitle">${n}</p>
              <p class="big__bag__item__content-description">${_}</p>
              <img src="../rating_4.5.png" alt="">
              <div class="price__wrapper">
                <div class="price">
                 <div class="price__currency">
                  <p class="label">$
                   <span class="price-text" >${l} х</span>
      
                  </p> 
                 </div>
                 <div class="counter"> ${r[i]} </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <img src="../Line 3.png" alt="">
          `}),t.innerHTML=a}}}const x=$(".order-node"),E=f(".bag-orders"),w=h(".container"),y=v(u),M=O(b);let m={},p={};M.pull().then(e=>{R(e)});y.pull().then(e=>{B(e)});function S(e){return new URLSearchParams(window.location.search).get(e)}function R(e){const t=S("id");if(!t){w.renderMsgErrorOrder();return}const s=e.find(r=>r.id===t);p=s.items,m=Object.keys(p),x.renderOrderAddress(s)}function B(e){const t=e.filter(s=>m.includes(s.id));E.renderOrderBag(t,p)}
