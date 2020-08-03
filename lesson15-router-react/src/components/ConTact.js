import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class ConTact extends Component {
  constructor(props){
    super(props);
    this.state={
      ischecked :false
    }
  }
  onClick =(ischecked)=>{
      this.setState({
        ischecked :ischecked
      })
  }
   render(){
     var {ischecked}=this.state
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={()=>this.onClick(false)}>Cho Phep</button><br/>
        <button type="button" className="btn btn-default" onClick={()=>this.onClick(true)}>Không Cho Phep</button><br/>
        <Prompt 
          when={ischecked}//kiểm tra có thể nhận giá trị là true hoặc false
          message ={location=>(`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
        />
      {/* //hiển thị câu thông báo muốn đến trang nào nhờ đói tượng location */}
      </div>
      
    
      
  );
   }
}

export default  ConTact;
