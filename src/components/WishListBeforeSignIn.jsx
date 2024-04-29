import React from 'react'
import '../styles/mainStyleFile.css'
import { useNavigate } from 'react-router-dom'

export const WishListBeforeSignIn = () => {
  let navigate = useNavigate() ;
  return (
  <>
      <div className="savedItemsDiv">
        <div>
            <img width="40" height="40" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6X_w6IvyvJhijxWGcVS8_gjbl-3ZzkSazdRu-ZKueKi99VI9M" alt="savedItems-logo"/>
        </div>
        <h3>You have no Saved Items</h3>
        <p>
            Sign in to sync your Saved Items <br/> across all your devices.
        </p>
            <br/>
            <button onClick={()=>navigate('/login')} >SIGN IN</button>
    </div>

  </>
  )
}
