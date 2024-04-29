export const whishListreducer = (state={ data : []}, action)=>{
    switch(action.type){
        case "InitialiseWishListData" : let ar3 = JSON.parse(localStorage.getItem("wishListItems")) || [] ;
                                     if(ar3.length==0){
                                        // ar3= JSON.parse(localStorage.getItem("obj"))||[] ;
                                        ar3=[] ;
                                        // console.log("a3",ar3) ;
                                        return { data : ar3 } ;
                                     }
                                     else{
                                        return { data : ar3 } ;
                                     }
                                     
        
        case "ADD2" :  
                        let ar1 = JSON.parse(localStorage.getItem("wishListItems")) || [] ;
                        if(ar1.length>0){
                            let flag = false ;
                            for(let i=0;i<ar1.length;i++){
                                if(ar1[i].id==action.payload.id){
                                   
                                    flag = true ;
                                    break ; 
                                }
                            }
                            if(flag==true){
                                
                                return { data : ar1} ;
                            }
                            else{
                               
                                let ar2 = [...ar1 , action.payload] ;
                                localStorage.setItem("wishListItems",JSON.stringify(ar2)) ;
                                return { data : ar2 }
                            }
                        }else{
                            
                            localStorage.setItem("wishListItems",JSON.stringify([action.payload])) ;
                            // console.log("action.payload in add ",action.payload) ;
                            return { data : [action.payload] } ;
                        }
                        
        case "ADDTOCARTFROMWISHLIST" : 
                        let ar11 = JSON.parse(localStorage.getItem("cartItems")) || [] ;
                        if(ar11.length>0){
                            let flag2 = false ;
                            for(let i=0;i<ar11.length;i++){
                                if(ar11[i].id==action.payload.id){
                                   
                                    flag2 = true ;
                                    break ; 
                                }
                            }
                            if(flag2==true){
                                
                                return state;
                            }
                            else{
                               
                                let ar21 = [...ar11 , action.payload] ;
                                localStorage.setItem("cartItems",JSON.stringify(ar21)) ;
                                return state ;
                            }
                        }else{
                            
                            localStorage.setItem("cartItems",JSON.stringify([action.payload])) ;
                            // console.log("action.payload in add ",action.payload) ;
                            return { data : [action.payload] } ;
                        }


        case "REMOVEALL2" :  
                            
                            let ar51 = JSON.parse(localStorage.getItem("wishListItems")) || [] ;
                            ar51 = ar51?.filter(ele=>Number(ele.id)!=Number(action.payload)) ;
                            localStorage.setItem("wishListItems",JSON.stringify(ar51)) ;
                            // console.log("a51",ar51) ;
                            return { data : ar51 } ;

        case "EmptyCart2" : return { data  : [] } ;

        default : return state ;
    }
}