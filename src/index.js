import { applyMiddleware, createStore } from 'redux'
import { asyncAC, decrementAC, incrementAC, themeAC } from './redux/actiCreators'
import { rootReducer } from './redux/rootReducer'
import { DECREMENT, INCRIMENT } from './redux/types'
import './styles.css'
import thunk from 'redux-thunk';

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer,  applyMiddleware(thunk))

store.subscribe( ()=> {
    const state = store.getState()
    counter.innerText = state.counter 
    document.body.className = state.theme.value
} )


addBtn.addEventListener('click', ()=>{
      store.dispatch( incrementAC() )
})

subBtn.addEventListener('click', ()=>{
    store.dispatch(decrementAC())
})

asyncBtn.addEventListener('click', ()=>{
    store.dispatch(asyncAC())
})

themeBtn.addEventListener('click', ()=>{
    
    const newTheme = document.body.classList.contains('light')
     ? 'dark'
     : 'light'
   
   
    store.dispatch(themeAC(newTheme))
   // console.log()
})

 store.dispatch({type:"GIVE ME ZERO"})

window.store = store
