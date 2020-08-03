import React, { Component } from 'react';


class Product extends Component {

   render(){
     var {match} =this.props;
     console.log(match)
     var name = match.params.name;//  <Route path="/products/:name" component={Product} /> từ thằng Products
     console.log(name)
    return (
      <div>
        Đây là Chi tiết Sản Phẩm :{name}
      </div>
  );
   }
}

export default  Product;
