import React, { useContext } from 'react'
import { contexts } from '../../contexts'
import './input.css'

const Input = () => {
  const { setSearching, searching, setProfileSearched } = useContext(contexts)

  return (
    <div className='container_input'>
      <input
        placeholder='teste'
        type="text"
        className='input_search-content'
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setProfileSearched(searching)
          }
        }}
        value={searching}
        onChange={(e) => {
          setSearching(e.target.value)
        }}
      />
    </div>
  )
}

export default Input;