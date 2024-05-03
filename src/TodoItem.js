import React from 'react'

export default function TodoItem({text, completed}) {
  return (
    <li>
        <span>V</span>
        <p>{text}</p>
        <span>{completed ? '✔': 'X'}</span>
    </li>
  )
}

export {TodoItem}