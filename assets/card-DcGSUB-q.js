import{y as v,E as f}from"./storage-BXeZpv23.js";import{c as w}from"./view-Db5OC_La.js";import{c as b}from"./viewErorMsg-BXHX2ySh.js";function h(t){const r=document.querySelector(t);return{node:r,renderInfoItem:function(c){const{id:e,model:o,series:l,price:g,image:p,description:u,rating:C,descriptionShort:_}=c,m=`
      <div class="card__content" data-product-id="${e}" >
      <div class="card__image">
        <div class="card__image-wrapper">
          <img class="product__image" src="${p}" alt="">
        </div>
        
      </div>
      <div class="card__text">
        <h1>${o}</h1>
        <h2 class="subtitle" >${l}</h2>
        <div class="rating">
           <img class="" src="/rating_4.5.png" alt="">
        </div>
        <div class="price">$ ${g}</div>
        <p class="mini-content">${_}</p>
        <div class="card__btn-wrapper"
          <button class="add-bag" data-action="addBag" data-id=${e}">
            <img data-action="addBag" data-id=${e} src="/BtnBag_prodactCard.png">
          </button> 
         
        </div>
      </div>
    </div>
    <div class="card__line">
      <img src="/Line 2.png" alt="">
    </div>
    <div class="card__description">
      <h3>Описание</h3>
      <p class="description">${u}</p>
    
    </div>
    
      `;r.insertAdjacentHTML("beforeend",m)}}}const I=v(f),P=w(".bag__item-wrapper"),S=h(".card__wrapper"),E=b(".card__wrapper"),$=document.querySelector(".card__wrapper");let a={},i={},d={};I.pull().then(t=>{d=t,M(t),n(),s(),$.addEventListener("click",y)});function B(t){return new URLSearchParams(window.location.search).get(t)}function M(t){const r=B("id");if(!r){E.renderMsgError();return}const c=t.find(e=>e.id===r);S.renderInfoItem(c)}function n(){localStorage.getItem("bag")!=null&&(a=JSON.parse(localStorage.getItem("bag")))}function y(t){const r=t.target.closest(".card__btn-wrapper");if(!r)return;const e=r.closest(".card__content").dataset.productId;n(),a[e]!=null?a[e]++:(a[e]=d.id,a[e]=1),localStorage.setItem("bag",JSON.stringify(a)),s()}function s(){const t=Object.keys(a);i=d.filter(r=>t.includes(r.id)),P.renderBagPreview(i)}
