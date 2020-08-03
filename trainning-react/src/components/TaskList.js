import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';//kết nối với store lấy xuống 
import * as actions from './../actions/index'
class TaskList extends Component {
  constructor(props){
    super(props);
      this.state={
        filterName : '',
        filterStatus :-1// all-1, active :1 :deactive :0
      }
    }

  onChange =(event)=>{
    var target =event.target;// gán target =1 biên event.target
    var name = target.name;
    var value =target.value;
     var filter={//tạo ra 1 object moi
       name: name === 'filterName' ? value :this.state.filterName,
       status: name === 'filterStatus' ? value :this.state.filterStatus
     };
    // this.props.onFilter(
    //       name === 'filterName' ? value :this.state.filterName,
    //        name === 'filterStatus' ? value :this.state.filterStatus,
    // )
    this.props.onFilterTable(filter)
    this.setState({
      [name] :value
    })

  }
  
  render(){
    console.log(this.props.todos);
    var {tasks,filterTable ,keyword} = this.props // var {tasks} =this.props //nhậsn dữ liệu từ app.js
    console.log(filterTable)
    if(filterTable){
        if(filterTable.name){
            tasks=tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            });
        }
        tasks =tasks.filter((task)=>{
            if(filterTable.status === -1)
            {
                return task;
            }
            else{
                return task.status ===(filterTable.status === 1 ? true :false)
            }
        })
    }
    console.log(this.props.keyword)
    tasks =tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
    })
    var {filterName,filterStatus} =this.state;
     // nếu gọi như này ko cần viết value trong ô input value ={this.state.filterName}
     //để chuyển lại cho thằng app.js nhận lại với onFilter
    var elTask = tasks.map((task ,index)=>{
      return <TaskItem key ={task.id}  index={index} task ={task}
     
    
     />// truyền cho thằng TaskItem task 
    });
    return (
<table className="table table-bordered table-hover">
          <thead>
              <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng Thái</th>
                  <th className="text-center">Hành Động</th>

              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>
                  <td>
                      <input type="text"
                       className="form-control"
                       name ="filterName"
                       value={filterName}
                      onChange ={ this.onChange} />
                  </td>
                  <td>
                      <select
                       className="form-control"
                       name ="filterStatus" 

                       value={filterStatus}
                        onChange ={ this.onChange}>
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                      </select>
                  </td>
                  <td></td>
              </tr>
           {elTask}
          </tbody>
        
      </table>
    );
  }
  
}
//hỗ trợ chuyển các state của store thành các  prop của component trong react
const mapStatetoProps = (state)=>{
  return {
    tasks :state.tasks //láy từu thằng reducers
    //lấy dữ liệu từ thằng innitalState của thằng /reducers/task.js
    ,
    filterTable :state.filterTable,
    keyword :state.searchTask
  }
};
const mapDispatchtoProp =(dispatch, props)=>{
  return {
   onFilterTable : (filter) =>{
        
          dispatch(actions.filterTask(filter));
    }
  };

}
export default connect(mapStatetoProps,mapDispatchtoProp)(TaskList);

