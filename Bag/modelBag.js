// import { count } from 'firebase/firestore';
// bag {
//   id1: count,
//   id2: count
// }

import { update } from "firebase/database";

export function createBagModel(bag) {
 return {
    bagIds: [],//[id1, id2, id3]
  
    setBag: function(bag) {
      console.log(bag);
      const bagIds = Object.keys(bag);
         console.log(bagIds);
    }, 

   getBag: function() {
    return {
      bagIds: this.bagIds
    }
  },

  getProduct: function(id) {
    return this.bagIds[id];
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

