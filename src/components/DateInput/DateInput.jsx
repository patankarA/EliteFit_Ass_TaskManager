import React from 'react'
import "./DateInput.css"
import { COMMON_TEXT } from '../../helper/constants'

const DateInput = ({ onDateChange, selected }) => {

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    onDateChange(dateValue)
  };

  return (
    <div className="inputContainer">
        <label className="labelStyle" htmlFor="dateInput">{COMMON_TEXT.INPUT_DATE_LABEL}</label>
        <input
            type="date"
            id="dateInput"
            value={selected}
            onChange={handleDateChange}
            className='input'
            min={`${JSON.stringify(new Date()).slice(1, 11)}`}
        />
    </div>
  )
}

export default DateInput