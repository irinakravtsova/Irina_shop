import '/src/assets/style.css'
import { ECOMMERCE_ITEMS_STORAGE_KEY,
         ECOMMERCE_ORDERS_STORAGE_KEY
 } from "../constants";
import { ITEM_LOCALSTORAGE_KEY } from "../constants";
import { createItemsStorage } from "../storage";
import { createBagPeviewView } from "../view";
import { createProductDetail } from "./viewProductDetail";
import {  createMsgErrorCard } from "../viewErorMsg";
// import { createLocalStorage } from "./localStorage";

const storage = createItemsStorage(ECOMMERCE_ITEMS_STORAGE_KEY);
const bagPreviewView = createBagPeviewView(".bag__item-wrapper");
const viewProductDetail = createProductDetail(".card__wrapper");
const viewCardError = createMsgErrorCard(".card__wrapper");

// const localStorage = createLocalStorage(ITEM_LOCALSTORAGE_KEY);

const cardNode = document.querySelector('.card__wrapper');

let bag = {};
let findProducts = {};
let products = {};

storage.pull().then((items) => {
  products = items;//все товары в базе
  loadProductDetails(items);
  checkBag(); //сделай проверку корзины
  showPreviewBag();
  cardNode.addEventListener('click', hendleAddToBag);
});

function getParameterFromURL(parameter) {//получи id из URL
  const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(parameter)//функция get - получи значение, которое там есть
};

function loadProductDetails(items) {
  const productId = getParameterFromURL('id');
  if (!productId) {
    viewCardError.renderMsgError();
  return
  }
  const findProduct = items.find(item => item.id === productId);
  viewProductDetail.renderInfoItem(findProduct);
};

function checkBag() {
  if (localStorage.getItem('bag') != null) {
    bag = JSON.parse(localStorage.getItem('bag'));
  }
};
function hendleAddToBag(event) {
  const btn = event.target.closest(".card__btn-wrapper"); //найди кнопку по которой кликнули
  if (!btn) return;
  const card = btn.closest(".card__content");
  const id = card.dataset.productId; //забери ее id
  checkBag(); 

  if (bag[id] != undefined) {
    bag[id]++;
  }
  else {
    bag[id] = products.id;
    bag[id] = 1;
  }
  localStorage.setItem('bag', JSON.stringify(bag));
  showPreviewBag();   
};

function showPreviewBag() {
  const bagIds = Object.keys(bag);
  findProducts = products.filter(item => bagIds.includes(item.id));
  bagPreviewView.renderBagPreview(findProducts);
}; 




