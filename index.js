//Последовательность действий: Важно!!! сначала ждем загрузки страницы html, потом начинаем выводить товар из БД, из LS, потом обработчик клика
import './src/assets/style.css'
import { v4 as uuidv4 } from 'uuid';
import { ECOMMERCE_ITEMS_STORAGE_KEY,  ECOMMERCE_ORDERS_STORAGE_KEY } from "/constants";
import { createItemsStorage } from "/storage";
import { createOrdersStorage } from "/storageOrders";
// import { createLocalStorage } from "./localStorage";
import { createItemsView,
         createBagPeviewView,
         createOrdersPeviewView 
} from "./view";

import { createItemsModel } from "/model";
import { createBagModel } from "/Bag/modelBag";
import { createOrdersModel } from "/order/modelOrders";
// import { createBagModel } from "./model";
// import { createCalcSum } from "./calcBagPrice";


const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const storageOrders = createOrdersStorage(ECOMMERCE_ORDERS_STORAGE_KEY);

const initialItems = [];
const modelItems = createItemsModel(initialItems);
const modelBag = createBagModel();

const initialOrders = [];
const modelOrders = createOrdersModel(initialOrders);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const itemsView = createItemsView(".js-output");
const previewOrdersView = createOrdersPeviewView(".bag__order");

const node = document.querySelector(".js-output");

let bag = {}; //при загрузке объяви пустой массив корзины

const idUser = uuidv4();
localStorage.setItem("userId", idUser); 

storage.pull().then((items) => {//выведи товары на страницу
    modelItems.update(items);
    itemsView.renderItems(modelItems.getItems(items));
    checkBag();//проверь есть ли что-то в корзине вызываем функцию или на старте или после загрузки товара на страницу
    showPreviewBag();
    
    node.addEventListener('click', event => {
      if (event.target.classList.contains('add-bag')) {
        //запиши значение дата атрибута в переменную id
        let id = event.target.dataset['articul'];
        //если такой ключ уже есть в корзине, добавь ещё один
         if (bag[id] != undefined) {
              bag[id]++;
         }
          else {
         //если нет, присвой ключу значение 1
            bag[id] = 1;
          };
          modelBag.setBag(bag);
          localStorage.setItem('bag', JSON.stringify(bag));
          showPreviewBag();
      }
    });

  function checkBag() {//проверяем наличие корзины в LS
      if (localStorage.getItem('bag') != null) //если в LS что-то есть
        bag = JSON.parse(localStorage.getItem('bag'));//вытащи, распакуй в строку и засунь в массив
    };

  function showPreviewBag() {
      const bagIds = Object.keys(bag);
      const findProducts = items.filter(item => bagIds.includes(item.id));
      bagPreviewView.renderBagPreview(findProducts);
    };
});
 
storageOrders.pull().then((orders) => {
    modelOrders.update(orders);
    previewOrdersView.renderOrdersPreview(orders);
});



  