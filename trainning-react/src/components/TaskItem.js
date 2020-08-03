import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'
class TaskItem extends Component {
  onUpdate =()=>{
     this.props.onUpdateStatus(this.props.task.id)
  }
  onDelete =()=>{
      this.props.onDeleteTask(this.props.task.id);
      this.props.onCloseForm();
  }
   onUpdateData =()=>{
      // this.props.onUpdateStatus(this.props.task.id)
        console.log(this.props.task)
      this.props.onOpenForm();
      this.props.onEditTask(this.props.task);
  }
  render(){
    var {task ,index} =this.props// this.prop để nhận từ thằng app.js
    return (
               <tr>
                  <td>{index}</td>
                  <td>{task.name}</td>
                  <td className="text-center">
                      <span className={task.status ===true ? "label label-success" :"label label-danger"}
                      onClick ={this.onUpdate}>
                                {task.status ===true ? 'Kích Hoạt' :'Ẩn'}
                              </span>
                  </td>
                  <td className="text-center">
                      <button type="button"
                       className="btn btn-warning"
                       onClick={this.onUpdateData}>
                          <span className="fa fa-pencil mr-5"></span>Sửa
                      </button>
                      &nbsp;
                      <button type="button" 
                      className="btn btn-danger"
                       onClick ={this.onDelete}>
                          <span className="fa fa-trash mr-5"></span>Xóa
                      </button>
                  </td>
              </tr>
    );
  }
  
}

const mapStatetoProp =(state)=>{
  return{
    isDisPlayForm : state.isdisplayform//nhận từ thằng reducers/index.js
  };
}
const mapDispatchtoProp =(dispatch, props)=>{
  return {
    onUpdateStatus : (id) =>{
      dispatch(actions.updatestatus(id));
    },
    onDeleteTask: (id) =>{
      dispatch(actions.deletetask(id));
    },
    onCloseForm :() =>{
       dispatch(actions.closeform());
       },
    onOpenForm : () =>{
          dispatch(actions.openform());
    },
    onEditTask :(task)=>{
          dispatch(actions.editTask(task))

    }  
  };

}
export default connect(mapStatetoProp,mapDispatchtoProp)(TaskItem);