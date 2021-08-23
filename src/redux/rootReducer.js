import { combineReducers } from "redux"
import { asyncAC } from "./actiCreators"
import { ASYNC_INC, CHANGE_THEME, DECREMENT, DISABLE_BTNS, ENABLE_BTNS, INCRIMENT } from "./types"

const counterReducer=(state=0, action)=>{
  
  if(action.type === INCRIMENT){
     return state+1
  } else if(action.type === DECREMENT){
      return state-1
  } else if (action.type === ASYNC_INC){
    return  state+1
  }
  
    return state
}

const initialThemeState ={
  value: 'light',
  disabled:false
}

 const themeReducer =(state=initialThemeState, action)=>{
 switch (action.type) {
   case CHANGE_THEME:
     
     return {...state, value: action.payload};
   case DISABLE_BTNS: 
   return {...state, disabled:true}
   case ENABLE_BTNS: 
   return {...state, disabled:false}
   default:
     return state
 }
 
 
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})