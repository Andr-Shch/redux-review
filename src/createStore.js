
export const createStore=(rootReducer, initialState)=>{
   let state = rootReducer(initialState, {type:'_init_'})
   const subscribers = []


 return {
     dispatch(action){
       state =    rootReducer(state, action)
       subscribers.forEach(sub=> sub())
     },
     subscribe(callback){
       subscribers.push(callback)
     },
     getState(){
      return state
     }
 }

}