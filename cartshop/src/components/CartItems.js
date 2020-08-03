import React, { Component } from 'react';
import * as Message from './../constants/Message';


class CartItems extends Component {
  
  render(){
      var {item} =this.props
      var  {quality} =item 
     
    return (
        <tr>
        <th scope="row">
            <img src={item.product.image}
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
            <span className="qty">{quality} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick ={()=>this.onUpDateQuality(item.product,item.quality-1)}>
                    <a>—</a>
                </label>
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick ={()=>this.onUpDateQuality(item.product,item.quality +1)}>
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.ShowSubTotal(item.product.price,item.quality)}</td>
        <td>
            <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item"
                onClick ={()=>this.onDelete(item.product)}>
                X
            </button>
        </td>
    </tr>
    );
  }
  onUpDateQuality=(product,quality) =>{
      if(quality >0){
         
          this.props.onUpdateProductInCart(product,quality);
          this.props.onChangeMessage(Message.MSG_UPPDATE_TO_CART_SUSCCES);
      }

  }
  ShowSubTotal=(price,quality)=>{
      return price *quality
  }
  onDelete(product){
     this.props.onDeleteProductInCart(product);
     this.props.onChangeMessage(Message.MSG_DELTE_TO_CART_SUSCCES);
  }
}

export default CartItems;
