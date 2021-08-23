import { ASYNC_INC, CHANGE_THEME, DECREMENT, DISABLE_BTNS, ENABLE_BTNS, INCRIMENT } from "./types"

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
        dispatch(disableAC())
        setTimeout(()=>{ dispatch(incrementAC())
                         dispatch(enableAC()) } , 1500) 
      
    }
        
    }
    
export const themeAC = (thm) =>{
    return {
        type: CHANGE_THEME,
        payload: thm
    }
}

export const disableAC = () =>{
  return{
      type: DISABLE_BTNS
  }
}

export const enableAC = () =>{
return{
    type:ENABLE_BTNS
}
}
