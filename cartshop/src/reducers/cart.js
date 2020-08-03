import * as types from './../constants/ActionTypes';
var data =JSON.parse(localStorage.getItem('CART'));
var  initialSate=data ? data :[];
   


const cart = (state =initialSate,action)=>{
    var {product,quality} = action;
    var index =-1
    switch (action.type){
        case types.ADD_TO_CART:
            index =findProductCart(state,product);
            if(index !== -1){
                state[index].quality += quality;
            }
            else{
                state.push({
                    product,
                    quality
                });
            }
            localStorage.setItem('CART',JSON.stringify(state));
           
            return [...state];
        case types.DELETE_PRODUCT_INCART:     
            index =findProductCart(state,product)
            if(index !== -1){
                state.splice(index,1);
            }

            localStorage.setItem('CART',JSON.stringify(state));
           
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index =findProductCart(state,product);
            if(index !==-1){
                state[index].quality = quality;
            }    
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default :return [...state];
    }

};
var findProductCart =(cart,product)=>{
    var index =-1;
    if(cart.length >0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id === product.id){
                index =i;
                break;

            }
        }
    }
    return index;
}
export default cart;