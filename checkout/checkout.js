//последовательность действий: сначала загружаем из БД потом выводим товары на страницу, при этом в 1 очередь обращаемся в LS, т.е. запускаем функцию checkBag
import '/src/assets/style.css'
import { doc } from "firebase/firestore";
import { ECOMMERCE_ITEMS_STORAGE_KEY } from "../constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "../constants";
import { createItemsStorage } from "../storage";
import { createOrdersStorage } from "../storageOrders";
import { logEvent } from "firebase/analytics";
import { createOrdersModel } from "../order/modelOrders";
import { createBagCheckout } from "./viewBagCheckout";
const initialOrders = [];
const modelOrders = createOrdersModel(initialOrders);
const bagCheckoutView = createBagCheckout(".checkout-bag");
const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const storageOrders = createOrdersStorage(ECOMMERCE_ORDERS_STORAGE_KEY);

const sumNode = document.querySelector('.sum-text_usd');
const totalNode = document.querySelector('.total-sum-text');

const inputName = document.querySelector('.input-name');
const inputStreet = document.querySelector('.input-street');
const inputCity = document.querySelector('.input-city');
const inputPhone = document.querySelector('.input-phone');
const inputPaymant = document.querySelector('.input-payment');
const checkoutBag = document.querySelector('.big__bag__wrapper');

let bag = {};
let sumFromLStorage = 0;
let total = 0;
let order = {};

//сумма, стоимость

let SUM = parseFloat(sumNode.innerText);
initSum();

function initSum() { //вызываем лимит из хранилища
  sumFromLStorage = parseFloat(localStorage.getItem('sum'));
   if (!sumFromLStorage) {
     return;
   }
   sumNode.innerText =  sumFromLStorage;
   SUM = parseFloat(sumNode.innerText);
   total+=SUM+=6.99;
   total = Math.round(total * 100) / 100;

   totalNode.innerText = total;
 }
 
// создай БД opders

checkBag();
const idFromLStorage = localStorage.getItem('userId');
const currentItems = bag;
const btnAddOrder = document.querySelector('.btn__post');

btnAddOrder.addEventListener('click', function(event) {
 event.preventDefault;
  order = {
    userId: idFromLStorage,
    deliveryPrice: 6.99,
    city: inputCity.textContent,
    line: inputStreet.textContent,
    name: inputName.textContent,
    phone: inputPhone.textContent,
    paymentMethod: inputPaymant.textContent,
    items: currentItems,
    sum:  sumFromLStorage,
    total: Math.round(total * 100) / 100   
  };
  modelOrders.add(order);
  storageOrders.push(order);//сохрани в хранилище
  alert("Нажмите ОК и ссылка на ваш заказ появится на главной странице магазина")

})

// отрисовка корзины
storage.pull().then((items) => {//1. загрузи базу
  let products = items;//все товары в базе
  checkBag(); //сделай проверку корзины
  showBag()
  function showBag() {
    if (Object.keys(bag).length === 0) {const heading = document.querySelector('h2')
      heading.textContent = 'Корзина пуста'}
    const bagIds = Object.keys(bag);
    const findProducts = products.filter(item => bagIds.includes(item.id));
    bagCheckoutView.renderBagCheckout(findProducts, bag);
  }
});

function checkBag() {//помести за пределами цикла проверку  корзины в LS
  if (localStorage.getItem('bag') != null) {//если в LS что-то есть
    bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
  }
};
function saveBagToLS() {
  localStorage.setItem('bag', JSON.stringify(bag));
}







