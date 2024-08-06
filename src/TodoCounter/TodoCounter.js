import './TodoCounter.css';
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import React from 'react'

function TodoCounter({total, completed}){
    return (
      <div className='TodoCounter'>
        <h1> TO DO </h1>
        {total !== completed ?
          <><p>You have completed {completed} of {total}</p></> :
          <><p>You have completed all your todos</p></>
        }
        
      </div>
    );
}

export { TodoCounter }