import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

//import '../data/cart-oop.js';
import '../data/cart-class.js';

import './backend-practice.js';


renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();