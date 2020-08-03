import * as types from './../constants/ActionTypes' 

var innitalState = {

};

var myReducer =(state=innitalState,action)=>{
	switch(action.type){
		case types.EDIT_ITEM:
			console.log(action)
			return action.task;
	

		default:
			 return state;
	}
};
export default myReducer;