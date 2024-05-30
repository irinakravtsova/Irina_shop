// import { count } from 'firebase/firestore';

export function createBagModel(bag) {

//   // bag = {                             //ключ id, значение - count
//     //   id1: count,
//     //   id2: count,
//     //   id3: count
//     // }

return {
    
  bagIds: [],//[id1, id2, id3]
  bagByIds: {},// также, как в базе по индексу{id1{id, count}, ...}

  addProductFromBag: function({id, count}) {
   const product = {
      id,
      count
    };
   
    this.bagIds.push(product.id);
    this.bagById[product.id] = product;
    
    return product;
  },
  setBag: function(bag) {
    this.bagIds = [];
    this.bagById = {};

    this.bag.forEach(product => {
      this.itemsIds.push(product.id),
            this.itemsById[product.id] = product;
    });
   
  },

  getBag: function() {
    return {
      bagById: this.itemsById,
      bagIds: this.itemsIds
    }
  },
  getProduct: function(id) {
    return this.bagByIds[id];
  }
}
}
 

  
 



    // plusProduct: function(id) {
    //  this.bagById[count] = this.bagById[count]++;
    // },

    // minusProduct: function(id) {
    //   this.bagById[id].count = count--;
    // },

    // deleteProduct: function(id) {
    //   this.bagById[id].delete;
    // },
//     getProduct: function(id) {
//       return this.bagById[id];
//     } 
 
//   }
// }


export function createItemsModel(items) {
  return {
    items,
    update: function(items) {
      this.items = items;
    },
    getItems: function() { //получить список
      return this.items
    }
  }  
}


export function createCardModel() {
  return {
    loadCard: function(items) {
      if (!items || items.length) {
        console.log("error");

      }
      const productId = getParameterFromURL(id);
      console.log(productId);
      if (!productId) {
        console.log("error");
      }
      // this.items = items;
    },
    

    }


  }
//   function getParameterFromURL(parameter) {//передай из URL страницы параметр, id - ключ из которого нужно вынуть значение
//     const urlParams = new URLSearchParams(window.location.search) //в переменную забери из адресной строки, образуя объект
//     return urlParams.get(parameter); //воспользуйся методом get() для этого значеня, чтобы получить само это значение  

