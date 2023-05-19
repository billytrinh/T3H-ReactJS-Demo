
const reducer = (state,action)=>{ // action: {type:.. payload: }
    switch(action.type){
        case "update_cart": {
            return {...state,cart:state.cart,isLoading:true};
        } 
        case "hide_loading":{
            return {...state,isLoading:false};
        }
        case "update_favourites":{
            
        }
        default: return state;

            
    }
}
export default reducer;