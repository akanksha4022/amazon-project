import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryShipping } from "../../data/deliveryOptions.js";
import { moneyConversion } from "../utils/money.js";


//1. loop through the cart 
//2. multiply price with quantity
//3. add all together 
export function renderPaymentSummary(){
    let productPrice =0;
    let shippingPrice = 0;
    let cartQuantity = 0;
    cart.forEach((cartItem)=>{        
        let product = getProduct(cartItem.productId);
        productPrice += product.priceCents * cartItem.quantity;
        
        let deliveryOption =  getDeliveryShipping(cartItem.deliveryOptionId);
        shippingPrice += deliveryOption.priceCents;

        cartQuantity += cartItem.quantity
    })
    let totalPriceBeforeTax = productPrice + shippingPrice;
    let tax = totalPriceBeforeTax * 0.1; //10 percent tax
    let totalPrice = totalPriceBeforeTax + tax;

    console.log(cartQuantity);

   

    let paymentHtml = 
    `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${moneyConversion(productPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${moneyConversion(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${moneyConversion(totalPriceBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${moneyConversion(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${moneyConversion(totalPrice)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentHtml;
}
