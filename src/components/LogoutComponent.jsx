import React, { useContext, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/mainStyleFile.css'

export const LogoutComponent = () => {
  
  let { isLogin , setIsLogin } = useContext(AuthContext) ;
  let navigate = useNavigate() ;
  // console.log(isLogin) ;

  function handleSignOutBtn(e){
    e.preventDefault() ;
    setIsLogin({"isLogin":false}) ;
    localStorage.setItem("isLogin",JSON.stringify({"isLogin" : false})) ;
  }
  function handleReturnToStore(e){
    e.preventDefault() ;
    navigate('/') ;
  }

  return (
   <>
       <div className="veryFirstLogoutDiv">
       
      <div className="logoutDiv2">
      <h1 className="h1LoginDiv" onClick={()=>navigate('/')} style={{color:"gray", cursor:"pointer"}}>asos</h1> <hr /> <br /><br />
        <div>
            <img width="40" height="40" src="data:image/png;base64,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" alt="savedItems-logo"/>
        </div>
        <h3>Want to sign out really?</h3>
        <p>
            You will no longer be logged in <br/> on the selected devices.
        </p>
            <br/>
            <button onClick={handleSignOutBtn}>SIGN OUT</button>
          
      </div>
   </div>

   </>
  )
}
