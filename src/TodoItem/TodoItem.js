import React from 'react'
import './TodoItem.css'

export default function TodoItem({text, completed}) {
  return (
    <li>
        <p>{text}</p>
        <span>{completed ? '✔': 'X'}</span>
    </li>
  )
}

export {TodoItem}