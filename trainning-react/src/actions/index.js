import * as types from './../constants/ActionTypes' 
export const listAll =()=>{
	return {
		type: types.LIST_ALL,
		
	}
};
export const saveTask =(task)=>{
	return {
		type: types.SAVE_TASK,
		task//task:taks
		
	}
};
export const toggleform =()=>{
	return {
		type: types.TOGGLEFORM,
		
	}
};
export const openform =()=>{
	return {
		type: types.OPENFORM,
		
		
	}
};
export const closeform =()=>{
	return {
		type: types.CLOSEFORM,
		
		
	}
};
export const updatestatus =(id)=>{
	return {
		type: types.UPDATE_STATUS_TASK,
		id
		
		
	}
};
export const deletetask =(id)=>{
	return {
		type: types.DELETE_TASK,
		id
		
		
	}
};
export const editTask =(task)=>{
	return {
		type: types.EDIT_ITEM,
		task
		
		
	}
};
export const filterTask =(filter)=>{
	return {
		type: types.FILTER_TABLE,
		filter//filter:filter->filterName,filterStatus
		
		
	}
};
export const searchTask =(keyword)=>{
	return {
		type: types.SEARCH,
		keyword//filter:filter->filterName,filterStatus
		
		
	}
};