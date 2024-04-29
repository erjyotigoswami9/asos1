import React, { useContext, useEffect, useState } from 'react'
import '../styles/mainStyleFile.css'
import { AuthContext } from '../context/AuthContext';
import { WishListBeforeSignIn } from './WishListBeforeSignIn'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const WishlistComponent = () => {
    let { isLogin , setIsLogin } = useContext(AuthContext) ;
    let navigate = useNavigate() ;
    
  
    let [singleDataProductInformationCompletely , setSingleDataProductInformationCompletely ] = useState({}) ;
 
  let dispatch = useDispatch() ;
  let stateWishList = useSelector(state=>state.wishList) ;
  // console.log(stateWishList) ;
 
  // console.log(totalPrice) ;
  useEffect(()=>{
    dispatch({type : "InitialiseWishListData"}) ;
  },[])

    
  function addToCartBtn(e,ele){
    e.stopPropagation() ;
    ele.quantity = 1 ;
    dispatch({type : "ADDTOCARTFROMWISHLIST" , payload : ele}) ;

    dispatch({type : "REMOVEALL2" , payload : ele.id}) ;
    // navigate('/cart') ;
}


  function showProductFunc(ele){
    // console.log(ele.price,"rs") ;
    setSingleDataProductInformationCompletely(ele) ;
    localStorage.setItem("obj",JSON.stringify(ele));
    navigate('/product') ;
  }



  

function handleDeleteThatItem(id,i,e){
    e.stopPropagation() ;
  if(Number(singleDataProductInformationCompletely.id)==Number(stateWishList.data[i].id)){
  dispatch({type : "REMOVEALL2" , payload : id}) ;
  }
  else{
    dispatch({type : "REMOVEALL2" , payload : id}) ;
  }

}
      
  return (
    <>
    <div style={{display : "flex" , justifyContent : "space-between" , padding:"30px" , alignItems:"center" , backgroundColor:"rgb(238,238,238)"}}>
      <button onClick={()=>navigate('/')} style={{border:"1px solid lightgrey", padding:"10px", color:"gray", fontWeight:"500" , backgroundColor:"white" , fontFamily:"monospace", fontSize:"13px"}}>Home</button>
      <button onClick={()=>navigate('/category/all')} style={{border:"1px solid lightgrey", padding:"10px", color:"gray", fontWeight:"500" , backgroundColor:"white" , fontFamily:"monospace", fontSize:"13px"}}>Product Listing</button>
      <button onClick={()=>navigate('/cart')} style={{border:"1px solid skyblue", padding:"10px", color:"white", fontWeight:"500" , backgroundColor:"lightskyblue" , fontFamily:"monospace", fontSize:"13px"}}>
      Cart</button>
    </div>
     { isLogin.isLogin==false ?  <WishListBeforeSignIn/> : 
      <div className="wishListItemsDiv1">
        <div>
            <div>
            <h2>MY WISHLIST</h2>
            </div>
            <br/>
            {  stateWishList.data?.map((ele,i)=>{ 
                return(
                    
            <div className="itemDivInWishList" onClick={()=>showProductFunc(ele)} key={ele.id}>
                <div>
                    <img width="120" height="150" src={ele.imgSrc1} alt="img"/>
                </div>
                <div>
                    <div>
                        <h4>£ {ele.price}</h4>
                        <button onClick={(e)=>handleDeleteThatItem(ele.id,i,e)}>X</button>
                    </div>
                    <div>
                        <p>{ele.title}</p><br/>
                        <button className="addToCartBtnInWishList" onClick={(e)=>addToCartBtn(e,ele)}>ADD TO CART</button>
                    </div>
                </div>
            </div>
                )
            }
            )
            }
            <br/>
           
        </div>
       <br /><br /><br /><br /><br /><br /><br />
    </div>
    }
   
    </>
  )
}
