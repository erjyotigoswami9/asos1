import React from 'react'
import '../styles/mainStyleFile.css'

export const FooterComponent = () => {
  return (
   <>
   
   
   {/* <!-- footer div --> */}

<div className="footerDiv">
    <div>
        <div><b>HELP &amp; INFORMATION</b></div>
        <div>Help</div>
        <div>Track order</div>
        <div>Delivery &amp; returns</div>
        <div>Sitemap</div>
    </div>
    <div>
        <div><b>ABOUT ASOS</b></div>
        <div>About us</div>
        <div>Careers at ASOS</div>
        <div>Corporate responsibility</div>
        <div>Investor's site</div>
    </div>
    <div>
        <div><b>MORE FROM ASOS</b></div>
        <div>Mobile and ASOS apps</div>
        <div>ASOS Marketplace</div>
        <div>Gift vouchers</div>
        <div>Black Friday</div>
        <div>ASOS x Thrift+</div>
        <div>Discover the ASOS Credit Card</div>
        <div>Help Improve the ASOS Website</div>
    </div>
    <div>
        <div><b>SHOPPING FROM</b></div>
        <div>
            <span>You're in</span> &nbsp;&nbsp;
            <img width="20" height="15" src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="country-logo"/>
            &nbsp; | &nbsp; <span className="changeCountryLogo"><b>CHANGE</b></span>
        </div>
        <div>Some of our International sites: </div>
        <div>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/es.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/de.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/au.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/fr.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/us.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/dk.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/it.png" alt="img"/> 
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/nl.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/pl.png" alt="img"/>
            <img width="15" height="15" src="https://assets.asosservices.com/storesa/images/flags/se.png" alt="img"/>
        </div>
    </div>
</div>

{/* <!-- last div copyright --> */}

<div className="copyrightDiv">
    <div>
        © 2024 ASOS
    </div>
    <div>
        Privacy & Cookies &nbsp; | &nbsp;
        Ts&Cs 
         <span> &nbsp; | &nbsp; Accessibility </span>
    </div>
</div>
   
   </>
  )
}
