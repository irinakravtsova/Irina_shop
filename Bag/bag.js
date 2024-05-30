//последовательность действий: сначала загружаем из БД потом выводим товары на страницу, при этом в 1 очередь обращаемся в LS, т.е. запускаем функцию checkBag
import '/src/assets/style.css'
import { doc } from "firebase/firestore";
import { ECOMMERCE_ITEMS_STORAGE_KEY } from "../constants";
import { ECOMMERCE_ORDERS_STORAGE_KEY } from "../constants";
import { createItemsStorage } from "../storage";
import { createBagPeviewView } from "../view";
import { createBag } from "./viewBag";
import { logEvent } from "firebase/analytics";

const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const bagView = createBag(".big__bag__wrapper");

const bagNode = document.querySelector(".big__bag__wrapper");
const sumNode = document.querySelector('.sum-text_usd');

let bag = {};//пустую корзину объявляем глобально
let findProducts = {};

storage.pull().then((items) => {//1. загрузи базу
  let products = items;//все товары в базе
  checkBag(); //сделай проверку корзины

  showPreviewBag();
  function showPreviewBag() {
    const bagIds = Object.keys(bag);
    findProducts = products.filter(item => bagIds.includes(item.id));
    bagPreviewView.renderBagPreview(findProducts);
  }; 

  showBag()
  function showBag() {
    if (Object.keys(bag).length === 0) {const heading = document.querySelector('.big__bag-title')
      heading.textContent = 'Корзина пуста'}
    const bagIds = Object.keys(bag);
    const findProducts = products.filter(item => bagIds.includes(item.id));
    bagView.renderBag(findProducts, bag);
  }
  calcBagPrice()

  document.addEventListener('click', plusFunction); 
  document.addEventListener('click', minusFunction);

  function plusFunction(event) {
    const btn = event.target.closest('.add-btn'); //найди кнопку по которой кликнули
    if (!btn) return;
    const card = btn.closest(".big__bag__item"); //найди карту товара, которой приндлежит кнопка по классу
    const id = card.dataset.productId; //забери ее id
    bag[id] ++;
    saveBagToLS();
    showBag();
    calcBagPrice()
  
  }
  function minusFunction(event) {
  
    const btn = event.target.closest('.minus-btn'); //найди кнопку по которой кликнули
    if (!btn) return;
    const card = btn.closest(".big__bag__item"); //найди карту товара, которой приндлежит кнопка по классу
    const id = card.dataset.productId; //забери ее id
    if (bag[id] >1)  bag[id]--;
    else  delete bag[id];
    showBag();
    saveBagToLS();
    calcBagPrice();
    checkBag();
    showPreviewBag();
    if (Object.keys(bag).length === 0) {
      const nodeBag = document.querySelector('.bag__item-wrapper');
      nodeBag.classList.add('bag-msg');
    }
  }
});

function checkBag() {//помести за пределами цикла проверку  корзины в LS
  if (localStorage.getItem('bag') != null) {//если в LS что-то есть
    bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
  }
  return bag;
};
function saveBagToLS() {
  localStorage.setItem('bag', JSON.stringify(bag));
}

function calcBagPrice() {
  const cartItems = document.querySelectorAll('.big__bag__item');
  let sum = 0;
   cartItems.forEach(function(item) {
      const amountEl = item.querySelector('[data-counter]');
      const priseEl = item.querySelector('.price-text');

      const currentSum = parseInt(amountEl.innerText) * parseFloat(priseEl.innerText);

      sum += currentSum;
  });
  // sumNode.innerText = sum;
  sumNode.innerText = Math.round(sum * 100) / 100;

  localStorage.setItem('sum', JSON.stringify(sum));
};




