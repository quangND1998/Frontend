import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import  Product from './Product'

class Products extends Component {
 
   render(){
    var products=[
          {
        id :1,
        slug:"Iphone",
        name :"iPhone8",
        price:35000000
      },
      {
        id :2,
        slug:"samsung",
        name :"SamSUng",
        price:35000000
      }, 
          {
        id :3,
        slug:"opp",
        name :"OppS7",
        price:35000000
      }
 ];
    var {match}= this.props;
    var url =match.url;
      // console.log(match)
 var result =products.map((product,index)=>{
        return(
          <NavLink to={`${url}/${product.slug}`} key={index}>
                      <li className="list-group-item" >{product.id}-{product.name} -{product.price}</li>
          </NavLink>
          // to={`${url}/${product.slug}`} truyền vào 1 đường dẫn là products/slug của danh sách products
        );
 });
    return (
      <div className="container">
      <h1>Danh Sách Sản Phẩm</h1>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <ul className="list-group">
                    {result}
                </ul>
        </div>
            <div className="row">
                <Route path="/products/:name" component={Product} />
                {/* truyền lên 1 biến là slug ở trên  thì pramar sẽ có 1 thuộc tính là name : 'giá trị của  thuộc tính slug' */}
            </div>
      </div>  
      </div>    
      
     
      
      
  );
   }
}

export default  Products;
