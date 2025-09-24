import { cart, addToCart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart',()=>{
    it('adds an existingproduct to cart',()=>{
        spyOn(localStorage,'setItem');

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:1,
                deliveryOtionId:'1'

            }]);
        });

        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6',1);
        expect(cart.length).toEqual(1); 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
         expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
    // 
        //this will give an error as it will work on  local storage value so now we will create fake locla storage
        // here we expect cart to be initially 0 and when we add new product it will become 1 but it will only be true when cart is empty whwn cart ahs some element it will  throw error this is called flaky test =  sometime passes some time fail
    it('adds a new product to cart',()=>{
        spyOn(localStorage,'setItem');

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        })

        console.log(localStorage.getItem('cart'));
        loadFromStorage(); // to solve early loading problem

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6',1);
        expect(cart.length).toEqual(1); // will still fails as cart is loadede earlier so sfter creating fake we have to reload local storage
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        //to expect the product id same as given test id

        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);

    });


})