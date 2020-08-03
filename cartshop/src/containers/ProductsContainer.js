import React, { Component } from 'react';
import Product from './../components/Product';
import {connect} from 'react-redux';
import Products from './../components/Products';
import PropTypes from 'prop-types';
import {onAddToCart, changeMessage} from './../actions/index';

class ProductsContainer extends Component {//sau này connect lên store cần 1 thằng containner là thằng trung gian giữa thằng products vơi 
    render(){
        var {products} =this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        
          );
    }
    //còn thằng Products sẽ là thằng hiển thị giao diện
    showProduct(products){
        var result =null;
        var {onAddToCart} =this.props
        var {changeMessage} =this.props
        if(products.length >0)
        {
            result =products.map((product,index)=>{
                return <Product key ={index}
                 product ={product} 
                 onAddToCart={onAddToCart}
                 changeMessage={changeMessage}
                 />
                //product ={product} truyền vào 1 thằng product
            });
        }
        return result
    }
    

}
ProductsContainer.propTypes ={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id :PropTypes.number.isRequired,
            name :PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            descrtiption :PropTypes.string.isRequired,
            price :PropTypes.number.isRequired,
            inventory :PropTypes.number.isRequired,
            rating :PropTypes.number.isRequired
        })
    ).isRequired,
    changeMessage:PropTypes.func.isRequired
}

const MapStatetoProps =state=>{
    return {
        products :state.products
    }
}
const mapDisPatchToProps = (dispatch,props)=>{
    return {
        onAddToCart  :(product) =>{
            dispatch(onAddToCart(product,1));

        },
        changeMessage :(message) =>{
            dispatch(changeMessage(message));
        }
    }
}

export default connect(MapStatetoProps,mapDisPatchToProps)(ProductsContainer);
