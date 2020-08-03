import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import Constrol from './components/Constrol';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
     
     

      filter :{
          name :'',
          status :-1
      },
      keyword :''
    }
  }

  OnToggleForm =()=>{
    if(this.props.itemEditing && this.props.itemEditing !==''){
        this.props.onOpenForm();

    }else{
           this.props.onToggleForm();

    }
     this.props.onClearTask(
       {
         id:'',
         name:'',
         status:true
       });
  
  }

  
 
   onShowForm =()=>{
      this.setState({
      isDisPlayForm :true
    });

  }




///////////////Filter
   
    ///tim kiếm 
    onSearch =(keyword)=>{
        console.log(keyword)
      this.setState({
                keyword :keyword
            })

        }


  render(){
    var {filter,keyword} =this.state// var tasks= this.state.tasks, gán biến tasks là 1 biến trong state để lấy dữ liệu từ App.js đổ sáng các thằng còn
    console.log(filter);

    var {isDisPlayForm}=this.props;

    
   
    return (
      <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className={isDisPlayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" :''}>
                 
                 
                  <TaskForm  /> 

              </div>
            {/*  có thể thay đổi class bằng toán tử 3 ngồi*/}
              <div   className={isDisPlayForm ===true ?"col-xs-8 col-sm-8 col-md-8 col-lg-8" :"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                  <button type="button" className="btn btn-primary"onClick ={this.OnToggleForm}>
                      <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
                  </button>
                   
               
                  <Constrol onSearch ={this.onSearch}/>
                  <div className="row mt-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList // đây là truyền dữ liệu sang tasklist
                       //onUpdateStatus trao đổi dữ liệu giữa thằng app với các component con có thể là hàm hoặc dữ liệu
                      
                       
                        onFilter={this.onFilter}/>
                      {/*tasks ở đây là 1 props chỉ có props mới giao tiếp với các component con*/}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
}
const mapStatetoProp =(state)=>{
  return{
    isDisPlayForm : state.isdisplayform,//nhận từ thằng reducers/index.js
    itemEditing : state.itemEditing  
    };
}
const mapDispatchtoProp =(dispatch, props)=>{
  return {
    onToggleForm : () =>{
      dispatch(actions.toggleform());
    },
    onClearTask :(task)=>{
          dispatch(actions.editTask(task))

    }  
    ,onOpenForm : () =>{
          dispatch(actions.openform());
    }
  };

}
export default connect(mapStatetoProp,mapDispatchtoProp)(App);
