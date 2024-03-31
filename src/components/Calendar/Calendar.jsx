// React
import { useState } from "react"
import PropTypes from "prop-types"

// Components
import Select from "../Select/Select"
import Pagination from "../Pagination/Pagination"
import DaysTable from "../DaysTable/DaysTable"

// Calendar filling function
import createMonthsCalendars from "../../utils/fillCalendar"

// Today button
import todayButton from "../../assets/today.svg"

// Style
import calendarStyle from "./Calendar.module.scss"

/**
 * Component for rendering a list of months for selection.
 *
 * @component
 * @param {Object} props
 * @param {string[]} props.list Array of month names to display.
 * @param {Function} props.onChange Callback function to handle month selection.
 */
const MonthList = ({ list, onChange }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={`item-${item}`} onClick={() => onChange(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}

/**
 * Main Calendar component that renders month and year selectors, and a day table.
 *
 * @component
 * @param {Object} props
 * @param {string} props.inputId ID for the input element to update with the selected date.
 * @param {Date} props.selectedDate Currently selected date.
 * @param {Function} props.onDateSelect Callback function to handle date selection.
 */
const Calendar = ({ inputId, selectedDate, onDateSelect }) => {
  const [year, setYear] = useState(selectedDate.getFullYear())
  const [month, setMonth] = useState(selectedDate.getMonth())
  const [day, setDay] = useState(selectedDate.getDate())

  const [tableHasChange, setTableHasChange] = useState(false)

  const calendarTables = createMonthsCalendars(year)
  const monthsList = calendarTables.map(item => item.month)

  /**
   * Generates a list of years for the year selector based on the provided year.
   *
   * @param {number} year Base year for generating the years list.
   * @returns {number[]} Array of years for selection.
   */
  const createYearTable = year => {
    const lastYear = Math.ceil(year / 10) * 10 - 1
    const yearsTable = []
    for (let i = 1900; i <= lastYear; i++) {
      if (i % 10 === 0) {
        yearsTable.push(null)
        if (i >= 1910) yearsTable.push(null)
      }
      yearsTable.push(i)
    }
    yearsTable.push(null)

    return yearsTable
  }

  const yearsTable = createYearTable(2024)

  /**
   * Formats a field to ensure it has two digits.
   *
   * @param {number} field Field to format.
   * @returns {string} Formatted field with two digits.
   */
  const formatField = field =>
    field.toString().length === 1 ? `0${field}` : field

  /**
   * Handles day selection and updates the input field and selected date state.
   *
   * @param {number} day Selected day.
   */
  const onDayChange = day => {
    setDay(day)

    const newDate = `${formatField(month + 1)}/${formatField(day)}/${year}`
    document.getElementById(inputId).value = newDate
    onDateSelect(new Date(year, month, day))
  }

  /**
   * Handles month selection to update the calendar display.
   *
   * @param {string} month Selected month.
   */
  const onMonthChange = month => {
    const index = calendarTables.findIndex(
      monthObject => monthObject.month === month
    )
    setMonth(index)
    setTableHasChange(true)
  }

  /**
   * Handles year selection to update the calendar display.
   *
   * @param {number} year Selected year.
   */
  const onYearChange = year => {
    setYear(year)
    setTableHasChange(true)
  }

  /**
   * Sets the calendar to today's date, updating both the input field and triggering the date selection callback.
   */
  const handleTodayButton = () => {
    const today = new Date()
    const newDate = `${formatField(today.getMonth() + 1)}/${formatField(
      today.getDate()
    )}/${today.getFullYear()}`
    document.getElementById(inputId).value = newDate
    onDateSelect(new Date())
  }

  return (
    <article className={calendarStyle.calendar}>
      <header className={calendarStyle.header}>
        <button
          type="button"
          onClick={handleTodayButton}
          className={calendarStyle.today}
        >
          <img src={todayButton} alt="Today" className={calendarStyle.icon} />
        </button>
        <div className={calendarStyle.navbar}>
          <Select
            value={monthsList[selectedDate.getMonth()]}
            onValueChange={onMonthChange}
          >
            <MonthList list={monthsList} />
          </Select>
          <Select
            value={selectedDate.getFullYear()}
            onValueChange={onYearChange}
          >
            <Pagination items={yearsTable} />
          </Select>
        </div>
      </header>
      <DaysTable
        days={calendarTables[month]}
        date={selectedDate}
        onChange={onDayChange}
        tableHasChange={tableHasChange}
      />
    </article>
  )
}

MonthList.PropTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func
}

Calendar.PropTypes = {
  inputId: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onDateSelect: PropTypes.func.isRequired
}

export default Calendar
