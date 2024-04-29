import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/mainStyleFile.css'

import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export const SingleItemShowComponent = () => {

    let [ a1Show , setA1Show ] = useState(false) ;
    let [ a2Show , setA2Show ] = useState(false) ;
    let [ a3Show , setA3Show ] = useState(false) ;
    let [ a4Show , setA4Show ] = useState(false) ;
    let [ a5Show , setA5Show ] = useState(false) ;


    let dispatch = useDispatch() ;
    let stateCart = useSelector(state=>state.cartFunctionality) ;

  let stateWishList = useSelector(state=>state.wishList) ;

    var  item1 = JSON.parse(localStorage.getItem("obj")) ||  {
        id : 12 ,
        category : "food",
        imgSrc1 : "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/o/g/b/400-combo-pack-100-4-almond-cashew-pistachios-anjeer-figs-4-original-imagzq69megvccgh.jpeg?q=70",
        imgSrc2 : "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/x/8/t/1000-combo-pack-of-cashews-almonds-pistachios-walnuts-badam-original-imaghdttmzyhhnaz.jpeg?q=70",
        imgSrc3 : "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/s/y/c/750-dry-fruits-combo-pack-of-healthy-5-kaju-pista-badam-akhrot-original-imaghdtzbgmvhtqg.jpeg?q=70",
        imgSrc4 : "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/o/d/3/200-berry-mix-1-pouch-farmley-original-imagxe93hqcfwbmf.jpeg?q=70",
        imgSrc5 : "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/z/m/b/600-dry-fruits-combo-pack-of-pistachios-almonds-cashews-kaju-original-imagqq5kgjenmewd.jpeg?q=70",
        title : "Dry Fruits",
        price : "645",
        quantity : 0
    } ;
    let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;

    
    let [ imageSrc , setImageSrc ] = useState(item1.imgSrc1) ;

    let arrImages = [ item1.imgSrc1 , item1.imgSrc2 , item1.imgSrc3 , item1.imgSrc4 , item1.imgSrc5 ] ;

    let [ indexImages , setIndexImages ] = useState(0) ;

    let [flagImage , setFlagImage ] = useState(false) ;

    useEffect(()=>{
        dispatch({type : "InitialiseCartData"});
        setInputSearchvalue("") ;
        
        
        
      },[])
     
      function handleImageNext(){
        if(indexImages==(arrImages.length-1)){
            setIndexImages(0) ;
        }else{
            setIndexImages(indexImages+1) ;
        }
        setFlagImage(0) ;
      }
      function handleImagePrevious(){
        if(indexImages==0){
            setIndexImages(arrImages.length-1) ;
        }else{
            setIndexImages(indexImages-1) ;
        }
        setFlagImage(0) ;
      }
      
      function addToCartBtn(){
       let flag5 = false ;
        if(item1.quantity==0 ){
            
        // console.log(item1.quantity) ;
        dispatch({ type : "ADD" , payload : item1 }) ;
        // item1.quantity = item1.quantity+1 ;
        flag5=true ;
        localStorage.setItem("obj",JSON.stringify(item1)) ;
        
        }
        else  {
        // console.log(item1.quantity) ;
        item1.quantity = item1.quantity+1 ;
        localStorage.setItem("obj",JSON.stringify(item1)) ;
        // console.log(item1.quantity) ;
        dispatch({ type : "ADD" , payload : item1 }) ;
        }
        if(flag5==true){
            let a8 = stateCart.data?.filter(ele=>Number(ele.id)==Number(item1.id))
            a8.length>0 ? item1.quantity = a8[0].quantity+1 : "" ;
            // item1.quantity = item1.quantity+1 ;
            localStorage.setItem("obj",JSON.stringify(item1)) ;
            flag5=false ;
        }

        navigate('/cart') ;
      }

      function removeFromCart(id){
      
        if(item1.quantity>=1){
            item1.quantity=item1.quantity-1 ;
            localStorage.setItem("obj",JSON.stringify(item1)) ;
            dispatch({ type:"REMOVE" , payload: id })
        }
        
      }

    let a1 =  {} ;

    let navigate = useNavigate() ;
    
    function addToWishListItems(ele){
        dispatch({type : "ADD2", payload : ele }) ;
    }



  return (
    <>

    <div style={{display : "flex" , justifyContent : "space-between" , marginLeft:"1px", marginRight:"10px", alignItems:"center" , marginTop:"4px", marginBottom:"30px"}}>
    <button onClick={()=>{ setInputSearchvalue("") ; navigate('/')}} style={{border:"1px solid lightgrey", padding:"10px", color:"white", fontWeight:"500" , backgroundColor:"gray" , fontFamily:"monospace", fontSize:"13px" , marginTop:"10px"}}>
      Home</button>
      <div>
      <button onClick={()=>navigate('/cart')} style={{border:"1px solid skyblue", padding:"10px", color:"white", fontWeight:"500" , backgroundColor:"lightskyblue" , fontFamily:"monospace", fontSize:"13px"}}>
      Cart</button> &nbsp;&nbsp;
      <button onClick={()=>navigate('/wishlist')} style={{border:"1px solid lightyellow", padding:"10px", color:"white", fontWeight:"500" , backgroundColor:"pink" , fontFamily:"monospace", fontSize:"13px"}}>
      WishList</button></div>
    </div>
    
    <div className="singleProductDiv">

<div className="firstDivOfSingleProductDiv">
    <span> Home &nbsp; &lt; </span> 
    <span onClick={()=>navigate(`/category/all`)} style={{cursor:"pointer", borderBottom:"0.5px solid lightgrey", padding:"10px"}}> &nbsp; Product Listings &nbsp; &lt; </span>
    <span> &nbsp; {item1?.category} &nbsp; &lt; </span>
    
    <span> &nbsp; {item1?.title} &nbsp; </span>
</div>
<div className="secondDivOfSingleProductItems">
    <div>
        <div onClick={handleImagePrevious}> &lt; </div>
        <img src={ flagImage==0 ? arrImages[indexImages] : flagImage==1 ? item1.imgSrc1 : item1.imgSrc2 } alt="img"/>
        <div onClick={handleImageNext}> &gt; </div>
    </div>
    <div>
        <h3>{item1?.title}</h3>
        <h3>£ {item1?.price}</h3>
        <div className="starsDivOfSingleProduct">
            <img width="15" height="15" src="data:image/png;base64,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" alt="star"/>
            <img width="15" height="15" src="data:image/png;base64,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" alt="star"/>
            <img width="15" height="15" src="data:image/png;base64,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" alt="star"/>
            <img width="15" height="15" src="data:image/png;base64,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" alt="star"/>
            <img width="15" height="15" src="data:image/png;base64,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" alt="star"/>
        </div>
        <div className="skyBlueColorOfferDiv">
            <img width="20" height="20" src="data:image/png;base64,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" alt="offer-logo"/>
            <p>
                Up to 20% off 1000s of styles!<br/> With code: <span> PAYYAY</span>
            </p>
        </div>
        <div className="colorDivImag">
            <p><b>COLOURS : </b>Black</p>
            <div>
                <img height="60" width="40" src={item1?.imgSrc1} onClick={()=>setFlagImage(1)} alt="img1"/>
                <img height="60" width="40" src={item1?.imgSrc2} onClick={()=>setFlagImage(2)} alt="img2"/>
            </div>
        </div>
        <div className="sizeDivOfSingleProductDiv">
            <h4>SIZE : </h4>
            <select>
                <option value="">Please Select</option>
                <option value="3xl">3XL</option>
                <option value="2xl">2XL</option>
                <option value="xl">XL</option>
                <option value="l">L</option>
                <option value="m">M</option>
                <option value="s">S</option>
                <option value="xs">XS</option>
            </select><br/><br/>
            <div>
              <button className="addToBagBtnOfSingleProductDiv" onClick={()=>addToCartBtn()}>ADD TO BAG</button>
              <button className="wishlistBtnOfSingleProduct" onClick={()=>addToWishListItems(item1)}>
               <img width="30" height="30" src="data:image/png;base64,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" alt="wishlist-logo"/>
               </button>
            </div>
            <div className="deliveryDivOfSingleProduct">
                <img width="30" height="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMJ5YMXBAD8BFeMXksDW9vxTz7_Qu_u6ZMw&s" alt="img"/>
                   
                 <p>
                    Free delivery on qualifying orders.<br/>
                 <span>View our Delivery & Returns Policy</span></p>
            </div>
        </div>
        <div className="detailsDivOfSingleProductItem">
            <div>
                <div onClick={()=>{ setA1Show(!a1Show) ; setA2Show(false) ; setA3Show(false) ; setA4Show(false) ; setA5Show(false);  }}>
                    <div>Product Details</div> <div> { a1Show ? "-" : "+"} </div>
                </div>
                { a1Show && 
                <div>
                    <div>
                        <p><span>Trousers & Leggings</span> by <span>ASOS DESIGN</span></p>
                        <ul>
                            <li>Basket-worthy find</li>
                            <li>High rise</li>
                            <li>Belt loops</li>
                            <li>Functional pockets</li>
                            <li>Wide leg</li>
                        </ul>
                        <p>Product Code: 122198410</p>
                    </div>
                </div>
                }
            </div>
            <div>
                <div onClick={()=>{ setA1Show(false) ; setA2Show(!a2Show) ; setA3Show(false) ; setA4Show(false) ; setA5Show(false);  }}>
                    <div>Brand</div> <div>  { a2Show ? "-" : "+"}  </div>
                </div>
                { a2Show &&
                 
                <div>
                    <p>
                        This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.
                    </p>
                </div>
                }
            </div>
            <div>
                <div  onClick={()=>{ setA1Show(false) ; setA2Show(false) ; setA3Show(!a3Show) ; setA4Show(false) ; setA5Show(false);  }}>
                    <div>Size &amp; Fit</div> <div>  { a3Show ? "-" : "+"}  </div>
                </div>
                {  a3Show && 
                <div>
                    <p>
                    Model's height: 168.5cm / 5' 6½''  <br/>
                    Model is wearing: UK 8/ EU 36/ US 4 <br/>
                    Sizing Help              <br/>
                    Still unsure what size to get? Find your recommended size or check out our size guide. <br/>
                    </p>
                </div>
                }
            </div>
            <div>
                <div  onClick={()=>{ setA1Show(false) ; setA2Show(false) ; setA3Show(false) ; setA4Show(!a4Show) ; setA5Show(false);  }}>
                    <div>Look After Me</div> <div>  { a4Show ? "-" : "+"}  </div>
                </div>
                { a4Show &&
                <div>
                    <p>Machine wash according to instructions on care labe</p>
                </div>
                }
            </div>
            <div>
                <div onClick={()=>{ setA1Show(false) ; setA2Show(false) ; setA3Show(false) ; setA4Show(false) ; setA5Show(!a5Show);  }}>
                    <div>About Me</div> <div>  { a5Show ? "-" : "+"}  </div>
                </div>
                {  a5Show &&
                <div>
                    <p>Plain-woven fabric
                          <br/>
                        Main: 100% Polyester.</p>
                </div>
                }
            </div>
        </div>
        <div className="reportlegalConcernDiv">Report a legal concern</div>
    </div>
    
</div>
</div>


    </>
  )
}
