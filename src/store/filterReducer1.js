
export const filterReducer1 = (state={ data : [] },action)=>{
    switch(action.type){

        case 'InitializeData' :
                                
                                  return { data : action.payload } ;

        case "UnfilteredDataPrice" : return { data : action.payload } ;
        
        case "LowToHighPrice" : 
                                  let arr1 = [...action.payload] ;
                                  for(let i=0;i<arr1.length-1;i++){
                                    for(let j=i+1;j<arr1.length;j++){
                                        if(Number(arr1[i].price) > Number(arr1[j].price)){
                                            let temp = arr1[i] ;
                                            arr1[i] = arr1[j] ;
                                            arr1[j] = temp ;
                                        }
                                    }
                                  }
                                  
                                  return { data : arr1 } ;
        case "HighToLowPrice" :
                                   let arr2 = [...action.payload] ;
                                   for(let i=0;i<arr2.length-1;i++){
                                      for(let j=i+1;j<arr2.length;j++){
                                        if(Number(arr2[i].price) < Number(arr2[j].price)){
                                            let temp = arr2[i] ;
                                            arr2[i] = arr2[j] ;
                                            arr2[j] = temp ;
                                        }
                                      }
                                   }
                                   
                                   return { data : arr2 } ;
        default : return state ;
    }
} 