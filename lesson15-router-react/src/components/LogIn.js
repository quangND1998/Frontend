import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        txtUseName:"",
        txtPassword:""   
     };
  }
  onChange =(e)=>{
    var target =e.target;
    var name = target.name;
    var value =target.type ==='checkbox' ? target.checked :target.value;
    this.setState({
      [name] :value
    })
  }
  onLogin =(e)=>{
   e.preventDefault();
    var{txtUseName,txtPassword}= this.state;
    if(txtUseName ==='admin'&& txtPassword ==='admin'){
        localStorage.setItem('user',JSON.stringify({
          usename :txtUseName,
          password : txtPassword
        }));
    }

  }
   render(){
     var {txtUseName,txtPassword} =this.state
     var LoginUser = localStorage.getItem("user");
     if(LoginUser ===null){
       return <Redirect to="/products"/>
     }
     var {location} =this.props;
     console.log(location)
    return (
     
     <div className="row">
       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
  <form onSubmit ={this.onLogin}>
       <legend>Đăng Nhập </legend>
     
       <div className="form-group">
         <label >UseName</label>
         <input type="text" className="form-control"
          placeholder="Input field"
           name ="txtUseName"
           value ={txtUseName}
             onChange ={this.onChange}
           />
       </div>
       {/* <div className="form-group">
         <label >Pasword</label>
         <input type="password" className="form-control" 
        
          placeholder="Input field"
           password="txtPassword"
             value= {txtPassword}
             onChange ={this.onChange}
           />
       </div> */}
       <div className="form-group">
         <label >password</label>
         <input type="password" className="form-control"
          placeholder="Input field"
           name ="txtPassword"
           value ={txtPassword}
             onChange ={this.onChange}
           />
       </div>
     
       
     
       <button type="submit" className="btn btn-primary">Submit</button>
     </form>
       </div>
     </div>
     
     
     
  );
   }
}

export default  Login;
