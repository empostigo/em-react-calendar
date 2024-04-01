/*
  This a sample code to use em-react-calendar.
  The added key prop to the component line 66 is used to force re-render of the calendar,
  To reflect day selection. It is mandatory here because the calendar is always visible.
  If you implement a pop-up calendar, there is no need to use this trick. 
*/

// React
import { useState, useRef } from "react"

// Components
import { Calendar } from "em-react-calendar"

// assets
import resetField from "../../assets/xmark.svg"

// Style
import datePickerStyle from "./DatePicker.module.scss"

const DatePicker = ({ name, label }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Input field reset
  const [showReset, setShowReset] = useState(false)

  const inputRef = useRef(null)
  const calendarRef = useRef(null)

  const handleDateSelect = date => {
    setSelectedDate(date)

    if (inputRef.current) {
      setShowReset(true)
    }
  }

  // Reset input field and give selectedDate today date
  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
      setShowReset(false)
    }
    setSelectedDate(new Date())
  }

  return (
    <article className={datePickerStyle.container}>
      <div className={datePickerStyle.input}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type="text"
          ref={inputRef}
          className={datePickerStyle.input}
        />
        {showReset && (
          <button onClick={resetInput} className={datePickerStyle.reset}>
            <img
              src={resetField}
              alt="Reset input"
              className={datePickerStyle.xmark}
            />
          </button>
        )}
      </div>
      <div ref={calendarRef} className={datePickerStyle.calendarWrapper}>
        <Calendar
          key={selectedDate} // Force re-rendering of the calendar to reflect selected day
          inputId={name} // Input field name
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
      </div>
    </article>
  )
}

export default DatePicker
