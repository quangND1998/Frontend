import React, { Component } from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import Message from './../components/Message';
// import CartItems from './../components/CartItems';
// import CartResult from './../components/CartResult';
// import Cart from './../components/Cart'
class MessageContainer extends Component {//sau này connect lên store cần 1 thằng containner là thằng trung gian giữa thằng products vơi 
    render(){
       var {message}= this.props
        return (
           <Message message ={message}/>
        
          );
    }
    

    

}
MessageContainer.propTypes ={
    message :PropTypes.string.isRequired
  
}

const MapStatetoProps =state=>{
    return {
        message :state.message
    }
}


export default connect(MapStatetoProps,null)(MessageContainer);
