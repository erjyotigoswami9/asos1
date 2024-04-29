import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/mainStyleFile.css'
import { AuthContext } from '../context/AuthContext';

export const ShippingComponent = () => {

    let { formDetails1, setFormDetails1 } = useContext(AuthContext) ;

    let dispatch = useDispatch() ;
    let stateCart = useSelector(state=>state.cartFunctionality) ;
    let totalPrice = useParams() ;
    let navigate = useNavigate() ;

    // console.log(totalPrice.total)
    

    function handleSubmitFunc(e){
        e.preventDefault() ;
        setFormDetails1({...formDetails1, price : totalPrice.total}) ;
        // console.log(formDetails1) ;
        navigate('/checkout') ;
    }
  return (
    <>
        <div className="shippingDetailsDiv">
        <div>
         <h2>SHIPPING</h2>
         
         <p>Please enter your shipping details</p><br/><br/>
        </div>

       <form onSubmit={handleSubmitFunc}>
        <div>
            <input type="text" placeholder="First Name" required  onChange={(e)=>setFormDetails1({...formDetails1, firstName : e.target.value})} value={formDetails1.firstName} />
            <input type="text" placeholder="Last Name" required onChange={(e)=>setFormDetails1({...formDetails1, lastName : e.target.value})} value={formDetails1.lastName} />
        </div>
        <div>
            <input type="text" placeholder="Address" required onChange={(e)=>setFormDetails1({...formDetails1, address : e.target.value})} value={formDetails1.address} />
        </div>
        <div>
            <input type="text" placeholder="Country" required onChange={(e)=>setFormDetails1({...formDetails1, country : e.target.value})} value={formDetails1.country} />
        </div>
        <div>
            <input type="number" placeholder="Zipcode" required onChange={(e)=>setFormDetails1({...formDetails1, zipcode : e.target.value})} value={formDetails1.zipcode} />
            <input type="text" placeholder="City" required onChange={(e)=>setFormDetails1({...formDetails1, city : e.target.value})} value={formDetails1.city} />
            <input type="text" placeholder="State" required onChange={(e)=>setFormDetails1({...formDetails1, state : e.target.value})} value={formDetails1.state} />
        </div>
        <div>
            <input type="number" placeholder="Contact Number" required onChange={(e)=>setFormDetails1({...formDetails1, phone : e.target.value})} value={formDetails1.phone} />
        </div>
        <div>
            <button onClick={handleSubmitFunc}>CONTINUE</button>
        </div>
       </form>
       <br/><br/><br/><br/><br/>
    </div>

    </>
  )
}
