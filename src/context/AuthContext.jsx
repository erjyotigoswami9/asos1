import { createContext, useState } from 'react'

export const AuthContext = createContext() ;

function AuthContextProvider({children}){
    let [ singleUrlToShow , setSingleUrlToShow ] = useState("") ;
    let [ womendataShow , setWomenDataShow] = useState(false) ;
    let [formDetails1, setFormDetails1] = useState({firstName : "", lastName : "", address : "", phone : "", zipcode : "", city : "", state : "", country : "" , price : ""}) ;
    let [ mendataShow , setmenDataShow] = useState(false) ;
    let [ isLogin , setIsLogin ] = useState(JSON.parse(localStorage.getItem("isLogin")) || {isLogin : false} ) ;
    let [showModalDivOnClick , setShowModalDivOnClick] = useState(false) ;
    let [ inputSearchvalue , setInputSearchvalue ] = useState("") ;
    
    let [ singleDataProductInformationCompletely , setSingleDataProductInformationCompletely  ] = useState(  
        JSON.parse(localStorage.getItem("singleDataObject"))
        ||
        { }) ;

    return <AuthContext.Provider value={{singleUrlToShow , setSingleUrlToShow, formDetails1, setFormDetails1 , singleDataProductInformationCompletely , setSingleDataProductInformationCompletely, isLogin , setIsLogin ,showModalDivOnClick , setShowModalDivOnClick , inputSearchvalue , setInputSearchvalue , womendataShow , setWomenDataShow , mendataShow , setmenDataShow }}>{children}</AuthContext.Provider>
}

export {AuthContextProvider} ;