import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import '../../styles/mainStyleFile.css'

export const ModalResponsiveNavbarComponent = () => {
    let { isLogin , setIsLogin } = useContext(AuthContext) ;
  let { showModalDivOnClick , setShowModalDivOnClick } = useContext(AuthContext) ;
  
  let navigate = useNavigate() ;

  function handleSignIn(e){
    e.preventDefault() ;
    navigate('/login') ;
  }
  function handleSignOut(e){
    e.preventDefault() ;
    navigate('/login') ;
  }
  function handleCart(e){
    e.preventDefault() ;
    navigate('/cart') ;
  }
  function onChangeSelect(e){
    // console.log(e.target.value) ;
        navigate(`/category/${e.target.value}`) ;
  }
  return (
    <>
      <div className="responsiveModalDiv">
     <div>
        <div onClick={()=>navigate('/category/women')}>WOMEN</div>
        <div onClick={()=>navigate('/category/men')}>MEN</div>
     </div>
     <div>
        
        <div onClick={()=>navigate('/category/all')}>
            <div><b>HOME</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/asos-design-smart-short-sleeve-slim-shirt-with-pleating-in-white/205838039-2?$n_480w$&wid=476&fit=constrain" alt="home"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>NEW IN</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/reclaimed-vintage-unisex-wide-leg-trouser-in-leopard-print/206286682-2?$n_480w$&wid=476&fit=constrain" alt="new-in"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>CLOTHING</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/asos-design-extreme-oversized-t-shirt-in-black-with-paris-statue-back-print/206382692-2?$n_480w$&wid=476&fit=constrain" alt="clothing"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>TRENDING</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/colllusion-unisex-branded-twill-bucket-hat-in-washed-black/205541822-2?$n_480w$&wid=476&fit=constrain" alt="trending"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>DRESSES</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/topshop-slash-neck-bias-midi-tea-dress-in-yellow/206381388-2?$n_480w$&wid=476&fit=constrain" alt="dresses"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>FACE + BODY</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/philip-kingsley-finishing-touch-frizz-fighting-gloss-50ml/206359109-2?$n_480w$&wid=476&fit=constrain" alt="face+body"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>SHOES</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/vans-old-skool-trainers-in-beige/204458065-2?$n_480w$&wid=476&fit=constrain" alt="shoes"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>ACCESSORIES</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/casio-unisex-vintage-square-face-watch-with-cloth-band-in-dark-green/202535197-2?$n_480w$&wid=476&fit=constrain" alt="accessories"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>BRANDS</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/aldo-meraria-metal-square-sunglasses-in-black-and-gold/205574573-2?$n_480w$&wid=476&fit=constrain" alt="brands"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>TRAINERS</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/aldo-rothorn-multipack-of-chubby-hoop-earrings-in-gold/205574655-2?$n_480w$&wid=476&fit=constrain" alt="trainers"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>BEST SELLERS</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/aldo-thilda-chunky-slingback-sandals-in-black/205555919-2?$n_480w$&wid=476&fit=constrain" alt="best-sellers"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>SPORTSWEAR</b></div>
            <div>
                <img width="100" height="50" src="https://images.asos-media.com/products/asics-gel-cumulus-26-running-trainers-in-black/205742731-2?$n_480w$&wid=476&fit=constrain" alt="sportswear"/>
            </div>
        </div>
        <div onClick={()=>navigate('/category/all')}>
            <div><b>MARKETPLACE</b></div>
            <div>
                <img width="100" height="50" src="https://marketplace-images.asos.com/user/83c71975-bcba-43ac-bc3b-d8542dd01a8a_large.jpg" alt="marketplace"/>
            </div>
        </div>
     </div>

    {/* <!-- scocial media responsive div --> */}
        
    <div className="socialMediaResponsiveDiv">
        <img width="40" height="40" src="data:image/jpeg;base64,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" alt="fb-logo"/>
        <img width="40" height="40" src="data:image/jpeg;base64,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" alt="insta-logo"/>
        <img width="40" height="40" src="data:image/png;base64,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" alt="snapchat-logo"/>    
    </div>
       
      {/* <!-- signIn or Join Div --> */}

     <div className="singInOrJoinDiv"  onClick={handleSignIn}>
        <button>Sing {isLogin.isLogin ? "out" : "in"}</button> <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> <button>Join</button>
     </div>

     {/* <!-- account , order , preference etc. Div --> */}

     <div className="accountOrderEtcDiv">
        <div>
            <div>
                <img width="30" height="30" src="data:image/jpeg;base64,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" alt="profile-details"/>
                <div>My Account</div>
            </div>
        </div>
        <div>
            <div>
                <img width="30" height="30" src="data:image/jpeg;base64,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" alt="order-details"/>
                <div onClick={handleCart}>My Orders</div>
            </div>
        </div>
        <div>
            <div>
                <img width="30" height="30" src="data:image/png;base64,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" alt="return-details"/>
                <div>Returns Information</div>
            </div>
        </div>
        <div>
            <div>
                <img width="30" height="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5JB9FmZvB5EJbAKuKoZ3W5qBOFRggebsMw&s" alt="contact-details"/>
                <div>Contact Preferences</div>
            </div>
        </div>
     </div>

     {/* <!-- additional details --> */}
     <div className="additionalDetailsDiv">
        <div>
            <div>
                <div>HELP &amp; INFORMATION</div>
                <div> + </div>
            </div>
            <div className="notShowDiv">
            <div>Help</div>
            <div>Track order</div>
            <div>Delivery &amp; returns</div>
            <div>Sitemap</div>
            </div>
        </div>
        <div>
            <div>
                <div>ABOUT ASOS</div>
                <div> + </div>
            </div>
            <div className="notShowDiv">
            <div>About us</div>
            <div>Careers at ASOS</div>
            <div>Corporate responsibility</div>
            <div>Investor's site</div>
            </div>
        </div>
        <div>
            <div>
                <div>MORE FROM ASOS</div>
                <div> + </div>
            </div>
            <div className="notShowDiv">
            <div>Mobile and ASOS apps</div>
            <div>ASOS Marketplace</div>
            <div>Gift vouchers</div>
            <div>Black Friday</div>
            <div>ASOS x Thrift+</div>
            <div>Discover the ASOS Credit Card</div>
            <div>Help Improve the ASOS Website</div>
            </div>
        </div>
     </div>
     
     {/* <!-- you are in Div --> */}

     <div className="youAreInDiv">
        <div>
            <span>You're in</span> &nbsp;&nbsp;
            <img width="20" height="15" src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="country-logo"/>
            &nbsp; | &nbsp; <span className="changeCountryLogo"><b>CHANGE</b></span>
        </div>
     </div>

   </div>


    </>
  )
} 
