import React from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {Increment, Decrement} from './actions/index'



function App() {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>

    <div class="container">
  
  <h1>Increment/decrement counter</h1>
   <div className="quantity">
    <a className="quantity__minus" title='Decrement'onClick={()=> dispatch(Decrement)} ><span>-</span></a>
    <input name="quantity" type="text" className="quantity__input" value={myState} />
    <a className="quantity__plus" title='Increment' onClick={ ()=> dispatch(Increment)}> <span>+</span></a>
  </div>
  
</div>

    
    
    </>
  )
}

export default App

