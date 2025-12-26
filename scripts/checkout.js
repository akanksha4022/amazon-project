import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart, loadCartFetch } from "../data/cart.js";

//import '../data/cart-oop.js';
import '../data/cart-class.js';
//import './backend-practice.js';

//make code more cleaner
async function loadPage(){
    try{
        //throw 'error 1';
        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ])
         //let us write ansync code like normal code

        // await new Promise((resolve,reject)=>{   
        //     //throw 'error2'     
        //     loadCart(()=>{     
        //         //reject('error2');       
        //         resolve();
        //     })
        // });

        

    }catch(error){
        console.log("async await error handling");
    }

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();

}

loadPage();
//loadCartFetch();




// with promise all
/* Promise.all([
    loadProductsFetch(),

    new Promise((resolve)=>{
        //console.log("second promise")
        loadCart(()=>{
            //console.log('cart loading finish')
            resolve();
        })
    })
]).then((value)=>{
        //console.log(value)
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
        //console.log('over');
})*/

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
