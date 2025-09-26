//here oop code will be written means in object
// we us this becoz if object change then it should not affect the methods and property
//oop tries to replicate real world object so in real world there can be two carts in order to do that we have to coly paste again so to avoid repetation we will use function

// now we use class which is also called object generator

//delcareing the class

class Cart{
    cartItems =  undefined; 
    localStorageKey = undefined;

    //use constructor to run setup code automatically

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;        
        this.loadFromStorage();       
    }

    loadFromStorage(){   //or loadFromStorage(){}
            this.cartItems = 
            JSON.parse(localStorage.getItem(this.localStorageKey));
            if(this.cartItems === null){
                this.cartItems = [
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

    };

    saveToStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    };

    addToCart(productId, selectedQuantity=1){
        let matchingItem;
        this.cartItems.forEach((product)=>{
            if(productId === product.productId){
            matchingItem = product;      
            };    
        })  
        if(matchingItem){
            matchingItem.quantity+=selectedQuantity;
        }else{
            this.cartItems.push({
            productId: productId,
            quantity: selectedQuantity,
            deliveryOptionId : '1'
            })
        }
        this.saveToStorage();
    };

    removeFromCart(productId) {
        let newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);  // keep items that don’t match
            }
        });

        this.cartItems = newCart;
        this.saveToStorage();
    };

    updateDeliveryOptions(productId, deliveryOptionId){

        let matchingProduct;
        this.cartItems.forEach((product)=>{
            if(productId === product.productId){
                matchingProduct = product;
            }
        })
        matchingProduct.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    
    }   

}


const cart = new Cart('normalCart');
const businessCart = new Cart('businessCart'); 

// put it in constructor to run automatically when we create an object
// cart.localStorageKey = 'normalCart';
// businessCart.localStorageKey = 'businessCart';

// cart.loadFromStorage();
// businessCart.loadFromStorage();

// businessCart.addToCart('8c9c52b5-5a19-4bcb-a5d1-158a74287c53',1);

console.log(businessCart);
console.log(cart);











