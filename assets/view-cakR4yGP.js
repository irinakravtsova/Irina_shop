function u(s){const n=document.querySelector(s);return{node:n,renderItems:function(a){a.forEach(t=>{const{id:e,model:c,series:d,price:o,image:i}=t,r=`
         <li class="item__card" data-product-id="${e}">
            <a class="image__wrapper" href="/Irina_shop/card/card.html?id=${e}" class="image__wrapper"> 
             <img class="item-image" src=".${i}">    
            </a>

          <div class="item__content">
            <a class="" href="./card.html?id=${e}"> 
              <h2 class="item-model">${c}</h2>
              <p class="item-series">${d}</p>
            </a>
          <div class="price-wrapper">
             <p class="item-price">$ ${o} </p>
             <button class="add-bag" data-id=${e} data-articul=${e}">
              <img class="add-bag" data-articul=${e} src="./Button.png">
             </button>    
         </div>
        </li>
      `;this.node.insertAdjacentHTML("beforeend",r)})},addItem:function(a){const t=document.createElement("li"),e=document.createElement("a"),c=document.createElement("img"),d=document.createElement("div"),o=document.createElement("a"),i=document.createElement("h2"),r=document.createElement("p"),l=document.createElement("div"),m=document.createElement("p"),p=document.createElement("button");t.classList.add("item__card"),t.dataset.productId=a.id,e.classList.add("image__wrapper"),e.href="itemCard.html?id=item.id",c.classList.add("item-image"),c.src=a.image,d.classList.add("item__content"),i.classList.add("item-model"),i.innerText=a.model,r.classList.add("item-series"),r.innerText=a.series,l.classList.add("price-wrapper"),m.classList.add("item-price"),m.innerText=a.price,p.classList.add("add-bag"),e.append(c),o.append(d),d.append(i,r),l.append(m,p),t.append(e,d),n.append(t)}}}function g(s){return{nodeBag:document.querySelector(s),renderBagPreview:function(a){let t="";a.forEach(e=>{t+=`
              <div class="bag__item">
                <img class="bag__image" src=".${e.image}" alt="">
              </div>
            `,this.nodeBag.innerHTML=t})}}}function _(s){return{ordersNode:document.querySelector(s),renderOrdersPreview:function(a){let t="";a.forEach(e=>{t+=`
             <a class="order-one bag__orders-text" href="/order/orders.html?id=${e.id}"># ${e.id};</a>
            
             `}),this.ordersNode.innerHTML=t}}}export{u as a,_ as b,g as c};
