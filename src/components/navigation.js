import React, { Component } from 'react';
import {NavLink ,Route} from "react-router-dom";
import Login from "../containers/login"
import AdminHome from '../containers/adminhome';
import AddProduct from "../containers/addproduct"

class Navigation extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
               <NavLink to="/">Home</NavLink> &nbsp;&nbsp;&nbsp;
               <NavLink to="/login">Login</NavLink> &nbsp;&nbsp;&nbsp;
               

               
               <Route path="/login" component={Login}></Route>
               <Route path="/" exact component={AdminHome}></Route>
               <Route path="/addproduct" component={AddProduct} ></Route>
              
            </React.Fragment>
         );
    }
}
 
export default Navigation;