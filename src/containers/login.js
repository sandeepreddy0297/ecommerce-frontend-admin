import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {logNewUser} from  "../actions/index"
class Login extends Component {
    constructor() {
        super();
        

        this.state = {
            password: "",
            emailId: "",
            role: "ROLE_ADMIN"
        }
    }
    captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }
    loginUser = (event) => {

        event.preventDefault();
        console.log("userdata ... ", this.state);
        this.props.logNewUser(this.state);
        


    }
    

    render() {
    //     console.log(' I am in login props',this.props);
    // if(this.props.isUserLoggedIn){
    //   console.log(' I am in props', this.props.isUserLoggedIn);
    //   props.history.push('/adminhome');
    // }
        
        return (
            <React.Fragment>
                <form>
                    EmailId: <input type="text" onChange={this.captureData} name="emailId"></input><br></br><br></br>
                    Password: <input type="password" onChange={this.captureData} name="password"></input><br></br><br></br>


                    <button onClick={this.loginUser}>Login</button>

                </form>
            </React.Fragment>
        );
    }
}


function mapStatetoProps(appState){
    console.log('appState',appState);
    return {isUserLoggedIn:appState.isUserLoggedIn}
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({logNewUser:logNewUser},dispatch)
}
   export default connect(mapStatetoProps,mapDispatchToProps) (Login);