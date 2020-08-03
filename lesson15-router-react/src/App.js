import React, { Component } from 'react'; 
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';

import Menu from './components/Menu';
import routes from './Routes'
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                <Menu />
            <Switch>
                {this.showContentMenu(routes)}
            </Switch>
              
            </div>
            </Router>
            
        
            
           
            
        );
    }
    
            showContentMenu=(routes)=>{
            var result =null;
            if(routes.length  >0){
                result= routes.map((route,index)=>{
                    return (
                        <Route key={index} 
                        path={route.path}  
                        component={route.main} 
                        exact={route.exact}/>       
                    )
                });

            }
            return result;

            }
}

export default App;
