// we will store the product in the cart but we will add only id and  quantity rest of the info will bbe searched from product.js as it will reduce code duplication also called as normalize the data.

//

//wewill create dummy data for showing initial blocks of products

//created function to find product using productid


export let cart;

loadFromStorage();

export function loadFromStorage(){

  cart = 
  JSON.parse(localStorage.getItem('cart'));
  if(cart === null){
      cart = [
              {
                  productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                  quantity : 2,
                  deliveryOptionId : '1'
              },
              {
                  productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                  quantity : 2,
                  deliveryOptionId : '2'
              }
          ];
  }

}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
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
      quantity: selectedQuantity,
      deliveryOptionId : '1'
      })
  }
  saveToStorage();
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
    saveToStorage();
}

//now when we update radio otions it should be seen in cart so we have to update delivery options in cart too
//steps
//1. loop through the cart and findmat the product
//2. change deliveryoption id
export function updateDeliveryOptions(productId, deliveryOptionId){
  
    let matchingProduct;
    cart.forEach((product)=>{
      if(productId === product.productId){
        matchingProduct = product;
      }
    })
    matchingProduct.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  
}


//for practice only
export function loadCart(fun){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
   
    console.log(xhr.response)
    fun();
    });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}
