import * as types from './../constants/ActionTypes' 

var innitalState = true

var myReducer =(state=innitalState,action)=>{
	switch(action.type){
		case types.TOGGLEFORM:
			return !state;
		case types.OPENFORM:
			return true;
		case types.CLOSEFORM:
			return false;		

		default: return state;
	}
	return state;
};
export default myReducer;