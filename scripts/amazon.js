import {cart, addToCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { moneyConversion } from './utils/money.js';


let productHtml = '';
//iterate and add each product and generate html
products.forEach((item)=>{
    const html = `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${item.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${item.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${item.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${item.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${moneyConversion(item.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${item.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = '${item.id}'>
            Add to Cart
          </button>
        </div>
    `
    productHtml += html;//attaching each product html to show on webpage
   
});

//showing on webpage by using class name of the div in amazon.html
document.querySelector(".js-product-grid").innerHTML = productHtml;

//after clicking button product sjould be added to cart
//we have to push the product along with the name and quantity of product
//to add product we have to use an html attribute called data attribute to know what product are we clicking
//button.dataset give us all the data attribute attached to the button
//also data-'product-name' get camel cased in javascript as productName

//1. checks if product is in the cart
//2. if in the cart increase the quantity 
//3. if not push in the cart

// not included in cart.js becoz it changes the homepage cardquantity
function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((product)=>{
    cartQuantity += product.quantity
    
  })
  console.log(cartQuantity)

  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart").forEach((button)=>{  

  button.addEventListener("click",()=>{

  const productId = button.dataset.productId;
  let selectedQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  addToCart(productId, selectedQuantity)

  
  // to show cartquantity
  updateCartQuantity();  

  })
});

