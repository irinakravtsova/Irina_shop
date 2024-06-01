import{y as v,E as f}from"./storage-724XkIP6.js";import{c as w}from"./viewErorMsg-BXHX2ySh.js";function b(e){const a=document.querySelector(e);return{node:a,renderInfoItem:function(c){const{id:t,model:d,series:l,price:g,image:u,description:p,rating:y,descriptionShort:_}=c,m=`
      <div class="card__content" data-product-id="${t}" >
      <div class="card__image">
        <div class="card__image-wrapper">
          <img class="product__image" src="..${u}" alt="">
        </div>
        
      </div>
      <div class="card__text">
        <h1>${d}</h1>
        <h2 class="subtitle" >${l}</h2>
        <div class="rating">
           <img class="" src="../rating_4.5.png" alt="">
        </div>
        <div class="price">$ ${g}</div>
        <p class="mini-content">${_}</p>
        <div class="card__btn-wrapper"
          <button class="add-bag" data-action="addBag" data-id=${t}">
            <img data-action="addBag" data-id=${t} src="../BtnBag_prodactCard.png">
          </button> 
         
        </div>
      </div>
    </div>
    <div class="card__line">
      <img src="../Line 2.png" alt="">
    </div>
    <div class="card__description">
      <h3>Описание</h3>
      <p class="description">${p}</p>
    
    </div>
    
      `;a.insertAdjacentHTML("beforeend",m)}}}function h(e){return{nodeBag:document.querySelector(e),renderBagPreview:function(c){let t="";c.forEach(d=>{t+=`
            <div class="bag__item">
              <img class="bag__image" src="..${d.image}" alt="">
            </div>
          `,this.nodeBag.innerHTML=t})}}}const P=v(f),B=h(".bag__item-wrapper"),I=b(".card__wrapper"),S=w(".card__wrapper"),E=document.querySelector(".card__wrapper");let r={},n={},i={};P.pull().then(e=>{i=e,M(e),s(),o(),E.addEventListener("click",L)});function $(e){return new URLSearchParams(window.location.search).get(e)}function M(e){const a=$("id");if(!a){S.renderMsgError();return}const c=e.find(t=>t.id===a);I.renderInfoItem(c)}function s(){localStorage.getItem("bag")!=null&&(r=JSON.parse(localStorage.getItem("bag")))}function L(e){const a=e.target.closest(".card__btn-wrapper");if(!a)return;const t=a.closest(".card__content").dataset.productId;s(),r[t]!=null?r[t]++:(r[t]=i.id,r[t]=1),localStorage.setItem("bag",JSON.stringify(r)),o()}function o(){const e=Object.keys(r);n=i.filter(a=>e.includes(a.id)),B.renderBagPreview(n)}
