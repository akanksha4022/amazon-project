//first we set module to the this js page in checkout.html aand then we can import in it
// to search item 
// 1. import product.js 
// 2. loop through the products.js and find the matching id
//2. match the ids of product from cart and in products

//when clicking on radio button it if the name is same in the buttons then it will slect one from those all buttons so to differentiate the selection for each product  we have to give different name using id
// means each product radio buttons select only the option given in that product
import { cart, removeFromCart, updateDeliveryOptions} from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { moneyConversion } from '../utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'; // loaded using esm a type of js called ecmascript
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions, getDeliveryShipping, calculateDeliveryDate } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentsummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';

//we import function or code from external libraray 
//to show date
//get today date
//add 7 
// display in proper format
// hello();
// const today = dayjs();
// //console.log(today)
// c
// onst deliveryDate = today.add(7, 'days');// plus 7 days

// console.log(deliveryDate.format('dddd, MMMM D')); //format


export function renderOrderSummary(){

    let cartHtml = '';

    cart.forEach((cartItem)=>{
        const productId = cartItem.productId;
        let matchingCartItem =  getProduct(productId);
        //console.log(matchingCartItem);
        // to change the main delivery date html find the deliveryoptionid from cart and access delivery option then use datejs to get the choosed date fron the data in deliveryoptions 
        const deliveryOptionId = cartItem.deliveryOptionId;

        let deliveryOption = getDeliveryShipping(deliveryOptionId);               

        const today = dayjs();

        let deliveryFormatDate = calculateDeliveryDate(today, deliveryOption);

        
        
    cartHtml+=   
    `
        <div class="cart-item-container 
        js-cart-item-container
        js-cart-item-container-${matchingCartItem.id}">
            <div class="delivery-date">
                Delivery date: ${deliveryFormatDate}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src=${matchingCartItem.image}>

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingCartItem.name}
                </div>
                <div class="product-price">
                    $${moneyConversion(matchingCartItem.priceCents)}
                </div>
                <div class="product-quantity js-product-quantity-${matchingCartItem.id}">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingCartItem.id}" data-product-id = ${matchingCartItem.id}>
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingCartItem,cartItem)}
                
                </div>
            </div>
        </div>
        `
    
    });

    //1. loop through deliveryOptions
    //2. for each option, generate some HTML together
    //3. combine the html together
    function deliveryOptionsHTML(matchingCartItem,cartItem){
        let deliveryHtml = '';
        const today = dayjs();
        deliveryOptions.forEach((deliveryOption)=>{

            let formatDate= calculateDeliveryDate(today, deliveryOption); 
            

            const priceString = deliveryOption.priceCents===0 ? "FREE" : `$${moneyConversion(deliveryOption.priceCents)}`;
            // to see check in seclected delivery option mainly to update html
            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            deliveryHtml +=    `
                    <div class="delivery-option js-delivery-option" 
                        data-product-id = "${matchingCartItem.id}" 
                        data-delivery-option-id ="${deliveryOption.id}"

                    >
                        <input type="radio" ${isChecked ?'checked' : ""}
                        class="delivery-option-input"
                        name="delivery-option-${matchingCartItem.id}"> 
                        <div>
                        <div class="delivery-option-date">
                            ${formatDate}
                        </div>
                        <div class="delivery-option-price">
                            ${priceString}- Shipping
                        </div>
                        </div>
                    </div>
                `
            })
            //console.log(deliveryHtml);
            return deliveryHtml;
        
    }
    //console.log(cartHtml);
    document.querySelector('.js-order-summary').innerHTML = cartHtml;

    // to delete the product whrn we click delete
    //function is in cart.js
    document.querySelectorAll('.js-delete-link').forEach((link)=>{
        link.addEventListener('click', ()=>{
            let productId = link.dataset.productId;        
            removeFromCart(productId);

            renderCheckoutHeader();
            renderOrderSummary();            
            renderPaymentSummary();

        })
    })

    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
        element.addEventListener('click',()=>{
            const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOptions(productId, deliveryOptionId); 
            renderOrderSummary();
            renderPaymentSummary();
        })
    })

   
}
