import './TodoCounter.css';
import React from 'react'

function TodoCounter({total, completed}){
    return (
      <div className='TodoCounter'>
        <h1>
          TO DO
        </h1>
        <p>completed {completed} of {total}</p>
      </div>
    );
}

export { TodoCounter }