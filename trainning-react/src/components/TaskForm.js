import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id : "",
      name :"",
      status : false
    };
  }
  componentWillMount(){//nhận lại bằng this.prop.task hoặc có thể nhận bằng câu lệnh var {task} = this.props 
    if(this.props.itemEditing && this.props.itemEditing.id !==null){
      this.setState({
           id :this.props.itemEditing.id,
           name :this.props.itemEditing.name,
           status :this.props.itemEditing.status
      });
      
    }
    else{
      this.onClear();
    }
  }
 componentWillReceiveProps(nextProps){
   console.log(nextProps)
      if(nextProps  && nextProps.itemEditing){
          this.setState({
             id :nextProps.itemEditing.id,
             name :nextProps.itemEditing.name,
             status :nextProps.itemEditing.status
      });
      }else {
        this.onClear();
      }
    
    }
   onCloseForm =() =>{
       this.props.onCloseForm();
      //this.props.OnCloseFormprop();//nhận lại bằng prop nhận lại hàm đóng thẻ của App.js
      // prop ở đây chuyền OnCloseFormprop 
      //cách chuyển Props  " ten Prop ={value cần chuyền }"
    }

  onHandelChange =(event)=>{
    var target =event.target;//khai báo biến target
    var name = target.name;
    var value =target.value;
    // var value =target.type == 'checkbox' ? target.checked : target.value;// xử lý trường hợp đặc biết với thằng checkbox
    if( name =='status'){
      value =target.value ==='true' ? true :false
    }
    this.setState(
      {
        [name] :value// xử lý trường hợp mitil input 
      });
  }
  onSubmit =(event)=>{
    event.preventDefault();//không cho load lại trang
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
  }
  onClear =()=>{
    this.setState({
            
           name :"",
           status : false
    });
  }
  render(){
    
  if(!this.props.isDisPlayForm) return null;
    return (

      <div className="panel panel-warning">
                      <div className="panel-heading">
                          <h3 className="panel-title">
                          {!this.state.id ? 'Thêm Công VIệc':'Cập Nhật Công Việc'}
                          </h3>
                      </div>
                     <span className="fas fa-times-circle" onClick ={this.onCloseForm}></span> 
                         
                    
                      <div className="panel-body">
                          <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                  <label>Tên :</label>
                                  <input type="text" 
                                  className="form-control" 
                                  name ="name"
                                  value ={this.state.name}
                                  onChange ={ this.onHandelChange}/>
                              </div>
                              <label>Trạng Thái :</label>
                              <select className="form-control" 
                              required="required"
                              name ="status"
                               value ={this.state.status}
                                  onChange ={ this.onHandelChange}>
                                  <option value={true}>Kích Hoạt</option>
                                  <option value={false}>Ẩn</option>
                              </select>
                              <br/>
                              <div className="text-center">
                                  <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                  <button type="submit" 
                                  className="btn btn-danger"
                                  onClick ={this.onClear}
                                  >Hủy Bỏ</button>
                              </div>
                          </form>
                      </div>
                  </div>
    );
  }
  
}
const mapStatetoProps =(state) =>{
    return {
      isDisPlayForm : state.isdisplayform,
      itemEditing :state.itemEditing
    }
};
const mapDispatchtoProp =(dispatch,props)=>{
     return {
         onSaveTask: (task)=>{//thêm công việc cân tham số là task
             dispatch(actions.saveTask(task))
         },
         onCloseForm :() =>{
              dispatch(actions.closeform());
            } 

     }
}
export default connect(mapStatetoProps,mapDispatchtoProp)(TaskForm);
//tham số thứ 2 là truyền vào action dispatch thực thi gọi lên store để reducers phân tích
