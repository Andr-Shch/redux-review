import { ASYNC_INC, CHANGE_THEME, DECREMENT, INCRIMENT } from "./types"

export const incrementAC = ()=> {
    return{
        type: INCRIMENT
    }

}

export const decrementAC = () =>{
    return{
        type: DECREMENT
    }

}

export const asyncAC= ()=> {
    return function(dispatch) {
        setTimeout(()=>{dispatch(incrementAC())},1500) 
    }
        
    }
    
export const themeAC = (thm) =>{
    return {
        type: CHANGE_THEME,
        payload: thm
    }
}