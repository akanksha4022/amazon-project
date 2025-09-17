// we will store the product in the cart but we will add only id and  quantity rest of the info will bbe searched from product.js as it will reduce code duplication also called as normalize the data.
//wewill create dummy data for showing initial blocks of products
export let cart = [
    {
        productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity : 2
    },
    {
        productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity : 1
    },{
        productId : "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity : 3
    }   
];
//now we will generate the html in checkout.js

export function addToCart(productId, selectedQuantity){
  let matchingItem;
  cart.forEach((product)=>{
    if(productId === product.productId){
      matchingItem = product;      
    };    
  })  
  if(matchingItem){
    matchingItem.quantity+=selectedQuantity;
  }else{
    cart.push({
      productId: productId,
      quantity: selectedQuantity
      })
  }
}

// to delte the product 
// 1. create a new array
//2. loop through the product in cart and which id matches the delte id dont add in new array

export function removeFromCart(productId) {
    let newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);  // keep items that don’t match
        }
    });

    cart = newCart;
}

