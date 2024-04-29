import React from 'react'
import '../styles/mainStyleFile.css'
import { useNavigate } from 'react-router-dom'

export const CartBeforeSignIn = () => {
  let navigate = useNavigate() ;
  return (
 <>
    <div className="emptyBagInCart">

        <div>
            <img width="40" height="40" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTB4brtb_k9qgPoJicM1P4YhuT7wMs22zCuJtVOPtzpCdETtynY" alt="bag-logo"/>
        </div>
        <h3>Your bag is empty</h3>
        <p>Items remain in your bag for 60 minutes, and then <br/> they’re moved to your Saved Items.
              <br/><br/>
            Sign in to see your bag <br/>
            and get shopping!</p>
            <br/>
            <button onClick={()=>navigate('/login')}>SIGN IN</button>
    </div>
 </>
  )
}
