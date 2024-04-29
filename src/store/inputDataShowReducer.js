
export const inputDataShowReducer=(state={data : []}, action)=>{
    switch(action.type){

        case "initialise" : 
                    //    console.log("initialising with data ",action.payload)
                       return { data : action.payload } ;
        
        case "show" : 
                    //    console.log("state.data is  ", state.data) ;
                       let arr = state.data.filter(ele=>ele.title.toLowerCase().includes(action.payload.toLowerCase()) )   
                    //    console.log("arr is : ",arr) ;           
                       return { data : arr }

        default : return state
    }
}