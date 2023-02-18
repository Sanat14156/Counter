import React, { useContext } from 'react'
import { userStore } from './Store'


const Home = () => {

     let data=useContext(userStore);
  
        return (
    <div className='counter'>
        <h1>{data.count}</h1>
        <br></br>
        <button onClick={data.increment}>+</button>
        <button onClick={data.reset}>Reset</button>
        <button onClick={data.decrement}>-</button>

    </div>
  )

 
}

export default Home