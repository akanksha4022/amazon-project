import { cart } from "../../data/cart.js";
export function renderCheckoutHeader(){
    let cartQuantity = 0;
      cart.forEach((product)=>{
        cartQuantity += product.quantity
        
      })

    let checkoutHtml = 
    `
       Checkout (<a class="return-to-home-link"
            href="amazon.html">${cartQuantity} items</a>)
    `
    document.querySelector('.js-checkout-header-middle-section').innerHTML = checkoutHtml;
}