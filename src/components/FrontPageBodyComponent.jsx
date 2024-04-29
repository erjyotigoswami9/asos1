import React, { useContext } from 'react'
import '../styles/mainStyleFile.css'
import {Navbar1} from '../components/navbar/Navbar1'
import {ModalResponsiveNavbarComponent} from '../components/navbar/ModalResponsiveNavbarComponent'
import { Navbar3 } from '../components/navbar/Navbar3'
import { AuthContext } from '../context/AuthContext'
import { InputSearchResultComponent } from './InputSearchResultComponent'


export const FrontPageBodyComponent = () => {
  let { showModalDivOnClick , setShowModalDivOnClick } = useContext(AuthContext) ;
  let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;
  
  return (
    <>
    <Navbar1/>
    { showModalDivOnClick && 
    <ModalResponsiveNavbarComponent/> }
    { inputSearchvalue.length==0 ?  
          <Navbar3/>  :
        <InputSearchResultComponent/>  
    }
  
   
    </>
  )
}
