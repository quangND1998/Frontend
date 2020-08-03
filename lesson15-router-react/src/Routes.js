import React from 'react'; 
import Home from './components/Home';
import About from './components/About';
import ConTact  from './components/ConTact';
import NotFound  from './components/NotFound';
import Products from './components/Products';
import Login from './components/LogIn';
const routes =[
    {
        path :'/',
        exact :true,
        main :() =><Home/>
    
    },
    
    {
        path:'/about',
        exact :false,
        main :() =><About/>
    
    },
    {
        path:'/contact',
        exact :false,
        main :() =><ConTact/>
    
    },
    
    {
        path:'/products',
        exact :false,
        main :({match}) =><Products match={match}/>
    
    },
    {
        path:'/login',
        exact :false,
        main :({location}) =><Login location={location} />
    
        },   
    {
        path :'',
            exact :false,
            main :() =><NotFound/>
        
        },
   
    
   
]
export default routes;