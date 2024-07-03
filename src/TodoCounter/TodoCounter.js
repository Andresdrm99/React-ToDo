import './TodoCounter.css';
import React from 'react'

function TodoCounter({total, completed}){
    return (
      <div className='Header'>
        <h1>
          Your TODOS 
        </h1>
        <p>completed {completed} of {total}</p>
      </div>
    );
}

export { TodoCounter }