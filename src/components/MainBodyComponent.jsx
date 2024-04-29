import React, { useContext } from 'react'
import { FrontPageBodyComponent } from './FrontPageBodyComponent'
import { BodyAfterNavbar } from '../components/navbar/BodyAfterNavbar'
import { FooterComponent } from '../components/FooterComponent'
import { AuthContext } from '../context/AuthContext'
import { InputSearchResultComponent } from './InputSearchResultComponent'

export const MainBodyComponent = () => {
  let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;
  return (
    <>
    {/* for navbar */}

    <FrontPageBodyComponent/>

    {/* body section after navbar */}

    { inputSearchvalue.length==0 ?  
          <BodyAfterNavbar/>  :
        <></> 
    }

    {/* for footer */}
    
    <FooterComponent/>
    </>
  )
}
