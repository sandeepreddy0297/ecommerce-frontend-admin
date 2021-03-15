import axios from "axios";

const BASE_URL="http://localhost:9017/user/";

export function logNewUser(){
    console.log("iam in admin lognew user action!!");
    var promise= axios.post(`${BASE_URL}login`);
    return{
        type:"LOGIN",
        payload:promise
    }
}