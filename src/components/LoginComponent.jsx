import React, { useContext, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles/mainStyleFile.css'
import { LogoutComponent } from './LogoutComponent'

export const LoginComponent = () => {
    let [ formData , setFormData ] = useState({email :"", password : ""}) ;
    let { isLogin , setIsLogin } = useContext(AuthContext) ;
    let navigate = useNavigate() ;
    // console.log(isLogin) ;

    function handleForgetPswd(e){
        e.preventDefault() ;
        navigate('/forgetPswdComponent') ;
    }
    function handleSignIn(e){
        e.preventDefault() ;
        // console.log(formData) ;
        if(formData.email!="" && formData.password!=""){
          setIsLogin({"isLogin" : true}) ;
          localStorage.setItem("isLogin",JSON.stringify({"isLogin" : true})) ;
          setFormData({email :"", password : ""}) ;
        }
        else{
          setIsLogin({"isLogin" : false}) ;
          localStorage.setItem("isLogin",JSON.stringify({"isLogin" : false})) ;
        }
       
        // navigate('/') ;
    }
    function handleReturnToStore(e){
        e.preventDefault() ;
        navigate('/') ;
    }
        
  return (
    <>
     { isLogin.isLogin==false ? 
    <div className="loginDiv">
        <h1 className="h1LoginDiv" onClick={()=>navigate('/')}>asos</h1>
        <div className="loginMainDiv">
            <div>
                <div> <button>JOIN</button> </div>
                <div>  <button>SIGN IN</button> </div>
                
            </div>
            <div>
                <form>
                    <label>EMAIL ADDRESS : </label>  
                    <br/><br/>
                    <input type="email" required onChange={(e)=>setFormData({...formData, email : e.target.value})} value={formData.email} /><br/><br/>
                    <label>PASSWORD : </label>  
                    <br/><br/>
                    <input type="password" required onChange={(e)=>setFormData({...formData, password: e.target.value })} value={formData.password} />  <br/><br/>
                    <button onClick={handleSignIn}>SIGN IN</button> <br/><br/>

                    <p onClick={handleForgetPswd}>Forgot password?</p> <br/><br/>
                    <h3>OR SIGN IN WITH...</h3><br/><br/><br/>
                    
                </form>
            
                <div className="socialMediaMultipleButtonsDiv">
                    <div>
                        <button>
                           <img width="35" height="35" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDwJ-b3klgGwKAFEiEy0zIE5HpbKiIjgf2A&s" alt="google-log"/>
                           <b>GOOGLE</b>
                        </button>
                    </div>
                    <div>
                        <button>
                            <img width="35" height="35" src="data:image/jpeg;base64,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" alt="apple-log"/>
                            <b>APPLE</b>
                         </button>
                    </div>
                    <div>
                        <button>
                            <img width="35" height="35" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AgP/Z7P8mk/8Afv/y+P9Npv8jkf/T6f/7/f87nf8ej/8Cgf/Q6P8qlP/a7P/3+/8Khf8RiP/p9P+l0v9Cof+YzP+q1f/j8f/L5f9ms/+73f/k8v+Fwv9ttv9brf95vP+Px/9Uqf/C4P91uv8+nv8Wi/+02f/mJhKsAAAEWElEQVR4nO2c23aqMBRFBYvIpSg3QfDaWvz/Pzzac6k9UElk75A41nzqQwftHASSnbDXZAIAAAAAAAAAAAAAAAAAAAAAAABojrd00rQsF/YgFuUmTZ2lN5JDus62u/0s9/0omg4iinw/n+1322ydqrZJz6c8iEOLlDAO8kOdKtQoV3lCLPFPpslXpSINJ8tjHovfxHnmqPCwq4RT40pS2ewaXu0zDapbQr9mfuq9YsqvcWVasJp4havGw7JcVpNa0f24Mq35PGxfnYdl+WxPvFMpeM6/CCuut3DG/t79TpLxeJS5Wg/Lynnm+BXrfN5FvOLwSJXfkMst4VhB1o16keRM7+Ed1HtY1oF+VhxjZLGMrXUwhkiwJhfJlL+zrsT0U8lW6az+l3BL7eHtxvCwrB31077cjyOyXxKLOLPh/9TLZaiE8YXw82chZtQLx8Fv3zCJZtXhmBVFkR231ZvvCm3EkL9/00GlSBi8HevFzWai56TzerXrX0771CKbASJhdFh3jhC7v3D2qRfAZfSwR3Oa//DqERCJqEUWD4v4xY8vHhGRBbGI/ei2Q35nkSEgMqUu3B8V+Xi9d1FzRKL3uxc1RiRZ3V1hmCOyvz8vGyMS3B1YBonselZ8pog0PTfEGJG3vpWrISJh7/aawEV1EHF/mAuXm8X8df1+Ievf0NBBJO8cWWm296dB0DRNkghUJDqIdJXb3vtMbjdGA5Hw2HGZWnYRrYFIXLSvsviQvYoGIkn7DNCT3xzTQKRpFyIP1MsaiHRs29byZ3c6iLSnkZX8tquWIt5J2kNPkeVedH9RcxHn7VlEZhCBCEQgAhFukRdzRcImuKX9AZxTBd8RKBbHEAnO81vs1u6cV377hfla4IB1DBHpv5nm/UNtDBFX9m+KHOcZISLynY4RImeBgtEIEZGC0QiRbb+HESLL6klEhCZ6E0Q2/pOIzEVaOEwQeRf5kNgEkULkgMEEkaPIvqMBImL7jgasfsU+9xynHrF76pGNvfhiLXTGMIZIHLg3BB8dFeI0+sIVOkzUoWaft0QMqdn/o/3sP/LtsKYiT3NHIAIRiEAEIhCBiB4i8m0XNCLkbRfyjTBEIuQdPdKfWtGI+BtiEflmMSIR8q436fY9GhHy9j35oohGhLyhUr7FlUaEvMVVvumYRoS86Vi+DZxEhL4NXL4xn0SEoTFfOiqBRIQhKkH6/UsiwhBeIR0nQiLCECcidCpOLdJwZGzJji0KEZbIHdkQJAIRnhAk2VgqAhGmWCrJoLDhIlxBYZLRbe0iVVKEL7pNLkxv8B3hC9OTizccKsIZbygVODlQJOCOzhS+J8NEmCNAZUJZh4jwh7JOxGNyB4ioiMmdCAcXPyyiKrh48hkl3fQOsMdEwkRdlPSVtD70hXvLi1zDvU9nleHeV/ri1t32QsmpXO3i1v/wGYC/6Q7AL7u+RfkhAL8cMQAfAAAAAAAAAAAAAAAAAAAAAAAAEOcXyN9ifisc4kkAAAAASUVORK5CYII=" alt="fb-log"/>
                            <b>FACEBOOK</b>
                         </button>
                    </div>
                </div>
                <br/>
                   <p className="whereHasTwitterGoneDiv">Where has twitter gone?</p>
                <br/>
            </div>
            
        </div>
        <div className="privacyPolicyDiv" onClick={handleReturnToStore}><span>Privacy Policy</span>  |  <span>Terms and Conditions</span></div>
    </div>
     : <LogoutComponent/> }
    
    </>
  )
}
