export const cart = [
    
]
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
