import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext';
import { LoginComponent } from './components/LoginComponent';

export const ProtectedRoute = ({children}) => {
    let { isLogin , setIsLogin } = useContext(AuthContext) ;
    
     return isLogin["isLogin"]==true ? children : <LoginComponent/>
}
