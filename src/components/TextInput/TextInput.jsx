import React from 'react'
import './TextInput.css'

const TextInput = ({label, placeholder, value, onChange}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <div className="inputContainer">
        <label className='labelStyle'>{label}</label>
        <input 
        className='input'
        type="text" 
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        />
    </div>
  )
}

export default TextInput