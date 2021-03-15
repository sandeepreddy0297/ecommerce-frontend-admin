import React, { Component } from 'react';
import {NavLink ,Route} from "react-router-dom";
import Login from "../containers/login"

class Navigation extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
               <NavLink to="/">Home</NavLink> &nbsp;&nbsp;&nbsp;
               <NavLink to="/login">Login</NavLink> &nbsp;&nbsp;&nbsp;
               

               
               <Route path="/login" component={Login}></Route>
              
            </React.Fragment>
         );
    }
}
 
export default Navigation;