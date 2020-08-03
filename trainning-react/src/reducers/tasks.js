import * as types from './../constants/ActionTypes' 
var data =JSON.parse(localStorage.getItem('tasks'))
var innitalState = data? data:[];//đây là 1 state
 var s4=()=>{
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
  }
 var GenergateID=()=>{
    return s4()+'-'+s4()+ '-'+ s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4();
  }
 var   FindIndex=(tasks,id)=>{
      
      var result =-1;
      tasks.forEach((task,index)=>{
          if(task.id == id){
            result =index;
          }
      });
      return result;
} 
var myReducer =(state=innitalState,action)=>{
	var id ='';
	var index =-1;
	switch(action.type){
		case types.LIST_ALL:
			return state;
		case types.SAVE_TASK:
			var task={
				id:action.task.id,
				name:action.task.name,
				status:action.task.status === 'true' ? true:false
			};
			if(!task.id){
				task.id=GenergateID();
				state.push(task);
			}
			else{	
				index=FindIndex(state,task.id)
				state[index] = task;
			}

			localStorage.setItem('tasks',JSON.stringify(state));
			console.log(action);
			return [...state];	//copy ra 1 thằng state mới và trả về
		case types.UPDATE_STATUS_TASK:
			console.log(action);
			 id =action.id;
    		 index = FindIndex(state,id);
    	//Cách 1	// var cloneTask ={...state[index]}; coppy 1 thằng state[index]
    		// cloneTask.status = !cloneTask.status; sau đó đổi thằng status của thằng clonetask
    		// state[index] = cloneTask;// gán lại với clonetask

    	//Cách 2
    		state[index] ={
    			...state[index],
    			status : !state[index].status
    		}	
			localStorage.setItem('tasks',JSON.stringify(state));
			console.log(state)
			return [...state]
		case types.DELETE_TASK:
			id =action.id;
    		index = FindIndex(state,id);
    		state.splice(index,1);
    		localStorage.setItem('tasks',JSON.stringify(state));
    		return [...state]		
		default: return state;

	}
	return state;
};
export default myReducer;