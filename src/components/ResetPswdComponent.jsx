import React from 'react'
import '../styles/mainStyleFile.css'
import { useNavigate } from 'react-router-dom';

export const ResetPswdComponent = () => {
    let navigate = useNavigate() ;

    function handleSignIn(e){
        e.preventDefault() ;
        navigate('/login') ;
    }
    function handleReturnToLogin(e){
        e.preventDefault() ; 
        navigate('/login') ;
    }
  return (
   <>
   
   <div className="loginDiv2">
        <h1 className="h1LoginDiv2">asos</h1>
        <div className="loginMainDiv2">
            <div>
                <div> <button>JOIN</button> </div>
                <div>  <button onClick={handleReturnToLogin}>SIGN IN</button> </div>
                
            </div>
            <div>
                <h2>RESET YOUR PASSWORD</h2><br/>
                <p>Type in your email address below and we'll send you an email with instructions on how to create a new password</p>
                <br/>
            </div>

            <div>
                <form className="forgetPswdDiv">
                    <label>EMAIL ADDRESS : </label>  
                    <br/><br/>
                    <input type="email" required /><br/><br/>
                    <button onClick={handleSignIn}>RESET PASSWORD</button> <br/><br/>
                </form>
            </div>
            
        </div>
        <div className="privacyPolicyDiv2" ><span>Privacy Policy</span>  |  <span>Terms and Conditions</span>
        <br/><br/><br/></div>
    </div>
   </>
  )
}
