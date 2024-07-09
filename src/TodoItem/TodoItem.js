import React from 'react'
import './TodoItem.css'

export default function TodoItem({text, completed}) {
  return (
    <div className='TodoItem'>
        <div className="checkbox-container">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={completed}
            />
            <span className="custom-checkbox-mark"></span>
          </label>
        </div>
        <p className={`${completed && "complete"}`}>{text}</p>
        <button className='options'>
          <svg className="optionsIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33337 9.99998C8.33337 9.07951 9.07957 8.33331 10 8.33331C10.9205 8.33331 11.6667 9.07951 11.6667 9.99998C11.6667 10.9205 10.9205 11.6666 10 11.6666C9.07957 11.6666 8.33337 10.9205 8.33337 9.99998Z" fill="#AFABB6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33337 4.16667C8.33337 3.24619 9.07957 2.5 10 2.5C10.9205 2.5 11.6667 3.24619 11.6667 4.16667C11.6667 5.08714 10.9205 5.83333 10 5.83333C9.07957 5.83333 8.33337 5.08714 8.33337 4.16667Z" fill="#AFABB6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33337 15.8334C8.33337 14.9129 9.07957 14.1667 10 14.1667C10.9205 14.1667 11.6667 14.9129 11.6667 15.8334C11.6667 16.7538 10.9205 17.5 10 17.5C9.07957 17.5 8.33337 16.7538 8.33337 15.8334Z" fill="#AFABB6"/>
          </svg> </button>
    </div>
  )
}

export {TodoItem}




