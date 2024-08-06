import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import './TodoItem.css'

export default function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <div className='TodoItem'>
        <div className="checkbox-container">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={completed}
              onClick={onComplete}
            />
            <span className="custom-checkbox-mark"></span>
          </label>
        </div>
        <p className={`${completed && "complete"}`}>{text}</p>
        <button className='options' onClick={onDelete}>
          <SlOptionsVertical className='icon' />
        </button>
    </div>
  )
}

export {TodoItem}




