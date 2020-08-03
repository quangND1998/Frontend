import {combineReducers } from 'redux';
import tasks from './tasks';
import isdisplayform from './isdisplayform';
import itemEditing from './itemEditing';
import filterTable from './filterTable'
import searchTask from './searchTask'
const myReducer = combineReducers({
	tasks,
	isdisplayform ,//tasks: tasks
	itemEditing,
	filterTable,
	searchTask
});
export default myReducer;