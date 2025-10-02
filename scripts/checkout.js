import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";

//import '../data/cart-oop.js';
import '../data/cart-class.js';

//import './backend-practice.js';

loadProducts(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
