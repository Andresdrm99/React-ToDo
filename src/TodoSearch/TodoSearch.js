import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  return (
      <input placeholder='New task ...' value={searchValue}
      onChange= { 
        (event) => {
          setSearchValue(event.target.value);
          console.log(event.target.value)
        }
      }></input>
  )
}

export  {TodoSearch}