function o(r){return{node:document.querySelector(r),renderMsgError:function(){this.node.insertAdjacentHTML("beforeend",`<div class="error">
            <p> Упс, ошибка. Такого товара нет.</p>
         </div> `)}}}function t(r){return{checkoutBag:document.querySelector(r),renderMsgErrorOrder:function(){this.checkoutBag.insertAdjacentHTML("beforeend",`<div class="error">
          <p>Страница не найдена</p>
       </div> `)}}}export{t as a,o as c};
