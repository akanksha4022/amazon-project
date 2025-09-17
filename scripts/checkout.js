//first we set module to the this js page in checkout.html aand then we can import in it
// to search item 
// 1. import product.js 
// 2. loop through the products.js and find the matching id
//2. match the ids of product from cart and in products

//when clicking on radio button it if the name is same in the buttons then it will slect one from those all buttons so to differentiate the selection for each product  we have to give different name using id
// means each product radio buttons select only the option given in that product
import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
import { moneyConversion } from './utils/money.js';

let cartHtml = '';

cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    let matchingCartItem;

    products.forEach((product)=>{
        if(productId == product.id){
            matchingCartItem = product;
        }
        
    })
    console.log(matchingCartItem);
    
cartHtml+=   
 `
    <div class="cart-item-container">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
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
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingCartItem.id}"> 
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingCartItem.id}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingCartItem.id}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
   
});
console.log(cartHtml);
 document.querySelector('.js-order-summary').innerHTML = cartHtml;