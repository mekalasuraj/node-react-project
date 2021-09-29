import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const ProtectedRoute=({children,...props})=>{

    const isAuth=sessionStorage.getItem('user')? true:false;
    return(
        <Route {...props} render={()=>isAuth ? (children): (<Redirect to={'/login'}/>)}/>
    );
}

export default ProtectedRoute;