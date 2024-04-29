import React, { useContext, useState } from 'react'
import '../../styles/mainStyleFile.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const Navbar3 = () => {
    let navigate = useNavigate() ;
    let { womendataShow , setWomenDataShow} = useContext(AuthContext) ;
    let { mendataShow , setmenDataShow} = useContext(AuthContext) ;
  return (
    <>
    
   {/* <!-- women's clothing shop by category --> */}

{ womendataShow && 
<div className="thirdNavbarcategory" onClick={()=>navigate('/category/women')}>
 <div>
     <div>New</div>
     <div>Clothing</div>
     <div>Trending</div>
     <div>Dresses</div>
     <div>Shoes</div>
     <div>Face+Body</div>
     <div>Accessories</div>
     <div>Brands</div>
     <div>Sportswear</div>
     <div>Topshop</div>
     <div>Marketplace</div>
     <div>Sale</div>
 </div>
</div>
}

{/* <!-- men's clothing shop by category --> */}

{mendataShow && 
<div className="thirdNavbarcategory" onClick={()=>navigate('/category/men')}>
 <div>
     <div>New</div>
     <div>Clothing</div>
     <div>Trending</div>
     <div>Shoes</div>
     <div>Accessories</div>
     <div>Brands</div>
     <div>Sportswear</div>
     <div>Topmen</div>
     <div>Marketplace</div>
     <div>Sale</div>
 </div>
</div>
}

{/* <!-- offer div --> */}

<div className="offerDiv" onClick={()=>navigate('/category/all')}>
 <div><b>UP TO 30% OFF SUN-READY STUFF!</b></div>
 <div><b>FREE WORLDWIDE DELIVERY</b></div>
</div>

{/* <!-- video div --> */}

<div className="videoPlayingDiv" onClick={()=>navigate('/category/all')}>
   <video className="videoDivShow1" src="https://video.asos-media.com/Navigation/_content_mw_BIGYACHTENERGY_1440x640HOMEPAGEDESKTOPBANNER_Flash9_1440xAuto_2000K.mp4" autoPlay muted controls loop ></video>
   
   <video className="videoDivShow2" src="https://video.asos-media.com/Navigation/_content_mw_BIGYACHTENERGY-870X1110HOMEPAGEMOBILE_Flash9_640xAuto_2000K.mp4" autoPlay controls loop muted ></video>
 </div>

 {/* <!-- images1Div --> */}
 <div className="images1Div" onClick={()=>navigate('/category/all')}>
     <div>
         <img src="https://content.asos-media.com/-/media/homepages/mw/2024/march/18-gbl/2024_homepage_moment_mw_tailoring_870x1110_1.jpg" alt="img" />
         <h3>BEST DRESSED</h3>
         <p>Every occasion, covered</p>
     </div>
     <div>
         <img src="https://content.asos-media.com/-/media/homepages/mw/2024/april/15-gbl/cats/mw_global_shoes_moment_870x1110.jpg" alt="img" />
         <h3>TRAINERS &amp; MORE</h3>
         <p>Walk this way</p>
     </div>
     <div>
         <img src="https://content.asos-media.com/-/media/homepages/mw/2024/april/15-gbl/cats/mw_global_barbour_moment_870x1110-(1).jpg" alt="img" />
         <h3>BARBOUR | ASOS</h3>
         <p>Modern British classNameics</p>
     </div>
     <div>
         <img src="https://content.asos-media.com/-/media/homepages/mw/2024/april/15-gbl/133806901-870x1110.jpg" alt="img" />
         <h3>CALVIN KLEIN</h3>
         <p>Serious add-to-basket vibes</p>
     </div>
 </div>

 {/* <!-- yellow color offers div --> */}
 <br/><br/><br/><br/><br/>
 <div className="yellowColorDivOffers" onClick={()=>navigate('/category/all')}>
     <h2><b>UP TO 30% OFF <br/>
      SUN-READY STUFF</b></h2>
     <h4><b>Incl. Shoes, tees &amp; more</b></h4>
     <p>Limited time only. Selected styles marked down as shown.</p>
 </div>


    </>
  )
}
