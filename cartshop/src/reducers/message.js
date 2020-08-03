import * as types from './../constants/ActionTypes';
import * as Message from './../constants/Message'
//var data =JSON.parse(localStorage.getItem('CART'));
var  initialSate =Message.MSG_WELLCOME
   


const message = (state =initialSate,action)=>{
   
    switch (action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
        
        default :return [...state];
    }

};

export default message;