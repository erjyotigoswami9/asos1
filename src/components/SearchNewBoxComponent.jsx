import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { InputSearchResultComponent } from './InputSearchResultComponent';
import { MainBodyComponent } from './MainBodyComponent';
import { useNavigate } from 'react-router-dom';

export const SearchNewBoxComponent = () => {
    let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;
    let navigate = useNavigate() ;
 var tmId ;

 function handleInputSearchFirst(e){
     e.preventDefault() ;
     if(tmId){
       clearInterval(tmId) ;
     }
    //  console.log(e.target.value) ; 
     setInputSearchvalue(e.target.value) ;
    //  tmId = setTimeout(()=>{
    //   clearInterval(tmId) ;
    //    e.target.value = "" ;
    //    console.log("timeout") ;
    //  },10000)
 }


  return (
    <>
     <button onClick={()=>{ setInputSearchvalue("") ;navigate('/')}} style={{border:"1px solid lightgrey", padding:"10px", color:"gray", fontWeight:"500" , backgroundColor:"white" , fontFamily:"monospace", fontSize:"13px", marginTop:"20px", marginLeft:"20px"}}>
      Home</button><br /><br />
    <div className='responsiveDiv2'>
        <form style={{ marginTop:"30px", marginBottom: "30px" , marginLeft:"20px", marginRight:"20px"}} onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='search by title' onInput={(e)=>handleInputSearchFirst(e)} value={inputSearchvalue} style={{padding:"10px", fontFamily:"monospace", border:"1px solid lightgrey", marginRight:"10px"}}/>
        <input type='submit' value='clear before next search' onClick={()=>setInputSearchvalue("")} style={{border:"1px solid red", padding:"10px", color:"white", fontWeight:"500" , backgroundColor:"red" , fontFamily:"monospace", fontSize:"13px"}} />
        </form>

        { inputSearchvalue.length!=0 ?  
          <InputSearchResultComponent/>  :
        <></> 
    }

    </div>
    </>
  )
}
