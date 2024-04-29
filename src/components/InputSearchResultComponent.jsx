import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { b1 } from '../objectData/allCategoryData';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContext';
import { ProductListComponent } from '../components/ProductListComponent';

const totalArr1 = [...b1] ;

export const InputSearchResultComponent = () => {
    let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ; 
  
    let dispatch = useDispatch() ;
    let stateShowInput = useSelector(state=>state.searchInput) ;


    useEffect(()=>{
        dispatch({type : "initialise", payload : totalArr1 }) ;
    },[])


    function callDis1Func(){
        dispatch({type : "show" , payload : inputSearchvalue }) ;
    }

    useEffect(()=>{ 
        
        callDis1Func() ; 
      
     },[inputSearchvalue])

    
  return (
    <div>
 <br /><br /><br /><br /><br />
    {/* {console.log(stateShowInput.data)} */}
    { stateShowInput.data && inputSearchvalue!="" &&
      <ProductListComponent data={ stateShowInput.data } category={"Special Collection"} />
    }
    {
        stateShowInput.data.length==0 && inputSearchvalue!="" && <h1 style={{textAlign:"center", color:"gray", marginTop:"50px"}}>Searched Data Not Found !</h1>
    }
    <br /><br /><br /><br /><br />
    </div>
  )
}
