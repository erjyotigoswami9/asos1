import React, { useContext, useEffect, useState } from 'react'
import '../styles/mainStyleFile.css'
import { useDispatch , useSelector } from 'react-redux'
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CartBeforeSignIn } from './CartBeforeSignIn'

export const CartComponent = () => {
  let { isLogin , setIsLogin } = useContext(AuthContext) ;
  let [searchParam , setSearchParam] = useSearchParams() ;
  let navigate = useNavigate() ;
   let [singleDataProductInformationCompletely , setSingleDataProductInformationCompletely ] = useState({}) ;
  let [ showDataOfCharges , setShowDataOfCharges ] = useState(false) ;
  let dispatch = useDispatch() ;
  let stateCart = useSelector(state=>state.cartFunctionality) ;
  // console.log(stateCart) ;
  let [ totalPrice , setTotalPrice ] = useState(0) ;
  // console.log(totalPrice) ;
  useEffect(()=>{
    dispatch({type : "InitialiseCartData"}) ;
  },[])

  useEffect(()=>{
    let total1 = 0 ;
    for(let i=0;i<stateCart.data.length;i++){
        total1+=Number(stateCart.data[i].price) * Number(stateCart.data[i].quantity) ; 
    }
    setTotalPrice(total1==0 ? 0 : total1) ;
  },[stateCart.data])

  function showProductFunc(ele){
    // console.log(ele.price,"rs") ;
    setSingleDataProductInformationCompletely(ele) ;
    localStorage.setItem("obj",JSON.stringify(ele));
    navigate('/product') ;
  }
  function handleCheckout(){
    
    if(totalPrice==0){
      alert("cart is empty!");
      navigate('/category/all') ;
    }else{
      // dispatch({type:"EmptyCart"}) ;
      // localStorage.setItem("cartItems",JSON.stringify([])) ;
      navigate(`/shipping/${Number(totalPrice)+4}`) ;
    // alert(`Total: £ ${totalPrice+4} , Order Placed Successfully`) ;
  }
  }

  function addToCartBtn(i){
    if(Number(singleDataProductInformationCompletely.id)==Number(stateCart.data[i].id)){
    if(singleDataProductInformationCompletely.quantity==0){
            
      // console.log(singleDataProductInformationCompletely.quantity) ;
      singleDataProductInformationCompletely.quantity = singleDataProductInformationCompletely.quantity+1 ;
      localStorage.setItem("singleDataObject",JSON.stringify(singleDataProductInformationCompletely)) ;
  
      }
      else {
      console.log(singleDataProductInformationCompletely.quantity) ;
      singleDataProductInformationCompletely.quantity = singleDataProductInformationCompletely.quantity+1 ;
      localStorage.setItem("singleDataObject",JSON.stringify(singleDataProductInformationCompletely)) ;
      console.log(singleDataProductInformationCompletely.quantity) ;
      }
    dispatch({ type : "ADD" , payload : stateCart.data[i] }) ;
    }
    else 
    dispatch({ type : "ADD" , payload : stateCart.data[i] }) 
  }
  
  function removeFromCart(id,i){
    
    if(Number(singleDataProductInformationCompletely.id)==Number(stateCart.data[i].id)){
    // console.log(singleDataProductInformationCompletely.quantity) ;
    if(singleDataProductInformationCompletely.quantity>=1){
      singleDataProductInformationCompletely.quantity=singleDataProductInformationCompletely.quantity-1 ;
      localStorage.setItem("singleDataObject",JSON.stringify(singleDataProductInformationCompletely)) ;
      
  }
  dispatch({ type:"REMOVE" , payload: id })
  }
  else {
    // console.log("delete...") ;
  dispatch({ type:"REMOVE" , payload: id })
  }
}

function handleDeleteThatItem(id,i){
  if(Number(singleDataProductInformationCompletely.id)==Number(stateCart.data[i].id)){
  dispatch({type : "REMOVEALL" , payload : id}) ;
  }
  else{
    dispatch({type : "REMOVEALL" , payload : id}) ;
  }

}

  return (
    <>
    <div style={{display : "flex" , justifyContent : "space-between" , marginLeft:"20px", marginRight:"20px", alignItems:"center" , marginTop:"30px", marginBottom:"30px"}}>
      <button onClick={()=>navigate('/')} style={{border:"1px solid lightgrey", padding:"10px", color:"gray", fontWeight:"500" , backgroundColor:"white" , fontFamily:"monospace", fontSize:"13px"}}>Home</button>
      <button onClick={()=>navigate('/category/all')} style={{border:"1px solid lightgrey", padding:"10px", color:"gray", fontWeight:"500" , backgroundColor:"white" , fontFamily:"monospace", fontSize:"13px"}}>Product Listing</button>
      <button onClick={()=>navigate('/wishlist')} style={{border:"1px solid pink", padding:"10px", color:"white", fontWeight:"500" , backgroundColor:"pink" , fontFamily:"monospace", fontSize:"13px"}}>
      Wishlist</button>
    </div>
    { isLogin.isLogin==false ? <CartBeforeSignIn/> :
        <div className="cartItemsDiv1">
        <div key={`${Date.now()}`}>
            <div>
            <h2>MY BAG</h2>
            </div>
            <br/>
             
            {  stateCart.data?.map((ele,i)=>{
            return (
            <div className="itemDivInCart" key={ele.id}>
                <div>
                    <img width="120" height="150" src={ele.imgSrc1} alt="img" onClick={()=>showProductFunc(ele)} />
                </div>
                <div>
                    <div>
                        <h4>£{ele.price}</h4>
                        <button onClick={()=>{ handleDeleteThatItem(ele.id,i) }}>X</button>
                    </div>
                    <div>
                        <p>{ele.title}</p>
                        <div className="quantityShowDiv">
                            <button onClick={(e)=>addToCartBtn(i)}> + </button>
                            <p>Qty {ele.quantity} </p>
                            <button onClick={()=>removeFromCart(ele.id,i)}> - </button>
                        </div>
                    </div>
                </div>
            </div>
            
          )
          })
          }

            <br/>

        </div>
        <div>
            <h2>TOTAL</h2>
            <div className="detailTotalDiv1">
                <h3>
                    Sub-total
                </h3>
                <p>
                    £ {totalPrice}
                </p>
            </div>
       
            <div className="detailTotalDiv1">
                <h3>
                    Delivery
                </h3>
                <p>
                    £4.00
                </p>
            </div>
            <div className="hrBorderBottonDiv"></div>
            <br/>
            <button className="checkoutBtnInCart" onClick={handleCheckout}>CHECKOUT</button>
            <br/>
            <h4>WE ACCEPT:</h4>
            <div className="imagesListOfCardsInCart">
                <img width="30" height="20" src="data:image/png;base64,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" alt="visa-card"/>
                <img width="30" height="20" src="data:image/png;base64,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" alt="master-card"/>
                <img width="30" height="20" src="data:image/png;base64,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" alt="paypal-card"/>
                <img width="30" height="20" src="data:image/jpeg;base64,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" alt="multiple-card"/>
                <img width="30" height="20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqiTMA7wIDkyL_DIHd4M6l9rtGIyvCQW6yw&s" alt="specialVisa-card"/>
                
            </div>
            <h6>Got a discount code? Add it in the next step.</h6>
        </div>
    </div>
    }
    </>
  )
}
