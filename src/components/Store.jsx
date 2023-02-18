import React from 'react'
import { createContext } from 'react';
import { useState } from 'react'

export const userStore= createContext("default");

const Store = (props) => {
    let [count,setCount]=useState(0);
     
    let increment=()=>{
        setCount(count+1);
    }
    let decrement=()=>{
        setCount(count-1);
    }
    let reset=()=>{
      setCount(count*0)
    }

  return (
    <userStore.Provider value={{count,increment,decrement,reset}}>
        {props.children}
    </userStore.Provider>
  )
}

export default Store