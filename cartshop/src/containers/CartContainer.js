import React, { Component } from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import CartItems from './../components/CartItems';
import CartResult from './../components/CartResult';
import Cart from './../components/Cart';
import {RemoveProductInCart, changeMessage,UpdateProductInCart} from './../actions/index'
class CartContainer extends Component {//sau này connect lên store cần 1 thằng containner là thằng trung gian giữa thằng products vơi 
    render(){
        var {cart} =this.props;
        console.log(cart);
        return (
           <Cart>
               {this.showCartItem(cart)}
               {this.showTotalAmount(cart)}
           </Cart>
        
          );
    }
    showCartItem =(cart)=>{
        var result =<tr><td>
            {Message.MSG_CART_EMPTY}
        </td></tr>;
        var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} =this.props
        
      
        if( cart.length >0 ){
            result =cart.map((item,index)=>{
                return (
                    <CartItems 
                        key ={index}
                        item ={item}
                        index ={index}
                        onDeleteProductInCart= {onDeleteProductInCart}
                        onChangeMessage ={onChangeMessage}
                        onUpdateProductInCart ={onUpdateProductInCart}
                     />

                );
            })
        }
        return result;

    }
    showTotalAmount =(cart)=>{
        var result =Message.MSG_CART_EMPTY;
        if( cart.length >0 ){
            result =<CartResult cart ={cart}/>
        }
        return result;

    }
  

    

}
CartContainer.propTypes ={
    cart : PropTypes.arrayOf(PropTypes.shape({
        product :PropTypes.shape({
            id :PropTypes.number.isRequired,
            name :PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            descrtiption :PropTypes.string.isRequired,
            price :PropTypes.number.isRequired,
            inventory :PropTypes.number.isRequired,
            rating :PropTypes.number.isRequired
        }).isRequired,
        quality :PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart :PropTypes.func.isRequired,
    onChangeMessage :PropTypes.func.isRequired,
    onUpdateProductInCart :PropTypes.func.isRequired
}

const MapStatetoProps =state=>{
    return {
        cart :state.cart
    }
}
const mapDisPatchToProps = (dispatch,props)=>{
    return {
        onDeleteProductInCart  :(product) =>{
            dispatch(RemoveProductInCart(product));

        },
        onChangeMessage : (message)=>{
            dispatch(changeMessage(message))
        },
        onUpdateProductInCart : (product,quality)=>{
            dispatch(UpdateProductInCart(product,quality))
        }
    
    }
}


export default connect(MapStatetoProps,mapDisPatchToProps)(CartContainer);
