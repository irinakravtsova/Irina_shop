import{N as p,O as c,P as m,Q as s,R as r}from"./storage-BXeZpv23.js";const d={apiKey:"AIzaSyDjy5thQwhCO9qDdjehZ-IUT5KR75zmWRo",authDomain:"ecommerce-app-65411.firebaseapp.com",projectId:"ecommerce-app-65411",storageBucket:"ecommerce-app-65411.appspot.com",messagingSenderId:"612979040841",appId:"1:612979040841:web:3e8a0047a9dca8e03bd598",measurementId:"G-RK5P0291EP"};function h(i){const n=p(d),o=c(n);return{key:i,db:o,pull:async function(){const a=[];return(await m(s(this.db,this.key))).forEach(e=>{a.push({id:e.id,userId:e.data().userId,city:e.data().city,line:e.data().line,userName:e.data().userName,phone:e.data().phone,deliveryPrice:6.99,items:e.data().items,paymentMethod:e.data().paymentMethod,sum:e.data().sum,total:e.data().total})}),a},push:async function(t){try{const e=await r(s(this.db,this.key),{userId:t.userId,city:t.city,line:t.line,userName:t.name,phone:t.phone,deliveryPrice:6.99,items:t.items,paymentMethod:t.paymentMethod,sum:t.sum,total:t.total});console.log("Document written with ID: ",e.id)}catch(e){console.error("Error adding document: ",e)}}}}export{h as c};
