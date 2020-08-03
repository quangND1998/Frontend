import * as types from './../constants/ActionTypes';
export const onAddToCart = (product ,quality)=>{
    return {
        type :types.ADD_TO_CART,
        product,
        quality
    }

}
export const changeMessage = ( message)=>{
    return {
        type :types.CHANGE_MESSAGE,
        message
    }

}
export const RemoveProductInCart = (product)=>{
    return {
        type :types.DELETE_PRODUCT_INCART,
        product
    }

}
export const UpdateProductInCart = (product,quality)=>{
    return {
        type :types.UPDATE_PRODUCT_IN_CART,
        product,
        quality
    }

}