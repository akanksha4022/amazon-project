import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";

import { loadCart } from "../data/cart.js";

//import '../data/cart-oop.js';
import '../data/cart-class.js';

//import './backend-practice.js';

// with promise all
Promise.all([
    new Promise((resolve)=>{
        console.log("srt promise");
        loadProducts(()=>{
            console.log('finished loading products')
            resolve('richman');
            
        });
    }),

    new Promise((resolve)=>{
        console.log("second promise")
        loadCart(()=>{
            console.log('cart loading finish')
            resolve();
        })
    })
]).then((value)=>{
        console.log(value)
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
        console.log('over');
})

//normally without promise all 
// new Promise((resolve)=>{
//     console.log("srt promise");
//     loadProducts(()=>{
//         console.log('finished loading')
//         resolve();
        
//     });
// }).then(()=>{
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             console.log('cart loading finish')
//             resolve();
//         })
//     })
// }).then(()=>{
//         renderCheckoutHeader();
//         renderOrderSummary();
//         renderPaymentSummary();
//         console.log('over');
//     })

// loadProducts(()=>{
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// })

// loadProducts(()=>{
//     loadCart(()=>{
//         renderCheckoutHeader();
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
    
// })
// wriitng like this will make more nested callback
