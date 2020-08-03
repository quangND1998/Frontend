import * as types from './../constants/ActionTypes' 

var innitalState ='';


var myReducer =(state=innitalState,action)=>{
	switch(action.type){
		case types.SEARCH:
			console.log(action);
			return action.keyword;
	

		default:
			 return state;
	}
};
export default myReducer;