import * as types from './../constants/ActionTypes' 

var innitalState = {
	name:'',
	status:-1

};

var myReducer =(state=innitalState,action)=>{
	switch(action.type){
		case types.FILTER_TABLE:
			return {
				name:action.filter.name,
				status:parseInt(action.filter.status,10)
			}
			console.log(action)
			return action.filter;
	

		default:
			 return state;
	}
};
export default myReducer;