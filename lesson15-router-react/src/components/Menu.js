import React, { Component } from 'react';
import {Route ,Link} from 'react-router-dom';

//customer link
const menus=[
  {
    name:"Trang Chủ",
    to :"/",
    exact :true
  },
  {
    name:"Giới THiệu",
    to :"/about",
    exact :false
  }, {
    name:"Liên Hệ",
    to :"/contact",
    exact :false
  },
  {
    name: "Sản Phẩm",
    to :  "/products",
    exact :false
  },
  {
    name: "Đăng Nhập",
    to :  "/login",
    exact :false
  }
]
const  MenuLink = ({lable , to ,activeOnlyWhenExact})=>{
  return (
      <Route path ={to} exact ={activeOnlyWhenExact} children ={(match)=>{
          var active =match ? "active abc" :'';
          return (
              <li className ={active} >
                      <Link to={to} className="my_link" >{lable}</Link>
               </li>
          ) 
      }}/>
  )
//children  khi nào url trùng khớp sẽ thêm class "active , hoặc abc ....vvv
}

class Menu extends Component {
   render(){
    return (
      <nav className="navbar navbar-default">
              
                <ul className="nav navbar-nav">
                {this.showMenu(menus)}
                       
                </ul>
            </nav> 
  );
   }
   showMenu =(menus)=>{
     var result =null; 
     if(menus.length >0){
       result=menus.map((menu,index) => {
         return(
          <MenuLink key={index} 
          lable={menu.name}
           to ={menu.to} 
           activeOnlyWhenExact={menu.exact} />
         )
       });
     }
     return result;
   }
}

export default  Menu;
