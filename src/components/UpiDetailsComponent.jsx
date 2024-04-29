import React from 'react'
import '../styles/mainStyleFile.css'
import { useNavigate } from 'react-router-dom';

export const UpiDetailsComponent = () => {
  let navigate = useNavigate() ;
  function handleSubmitUPI(e){
    e.preventDefault() ;
    navigate('/congrats') ;
  }
  return (
    <div className="mainUpiDiv1">
    <div className="payUpiDiv">
        <h3>Enter UPI Id </h3>
        <br/><br/>
        <form onSubmit={handleSubmitUPI}>
           <input type="text" required /><br/><br/>
           <input type='submit' value={'PAY'} className='submitUPIInpt'/>
         </form>
    </div>
   </div>
  )
}
