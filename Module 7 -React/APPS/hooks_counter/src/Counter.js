import logo from './logo.svg';
import './Counter.css';
import React from 'react';
import { useState} from 'react';


function Counter(){
      
   const [count, setCount] = useState(0) 

    return (
      <div>
        <p> Counter: {count} </p>
          <button onClick= {()=> setCount(count + 1)}> plus </button>
      </div>
    )

}

export default Counter;
