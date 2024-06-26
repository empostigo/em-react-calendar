/**
 * Returns an array representing each month of a given year,
 * including the month name and the number of days in it.
 *
 * @param {number} year - The year for which the months are generated.
 * @returns {Object[]} An array of objects, each representing a month and its days.
 */
const getMonths = year => {
  return [
    { month: "January", days: 31 },
    { month: "February", days: getFebruaryNbOfDays(year) },
    { month: "March", days: 31 },
    { month: "April", days: 30 },
    { month: "May", days: 31 },
    { month: "June", days: 30 },
    { month: "July", days: 31 },
    { month: "August", days: 31 },
    { month: "September", days: 30 },
    { month: "October", days: 31 },
    { month: "November", days: 30 },
    { month: "December", days: 31 }
  ]
}

export const getFebruaryNbOfDays = year =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28

/**
 * Determines the day of the week the first day of a given month falls on.
 *
 * @param {Date} date - A date object representing any day within the month to check.
 * @returns {number} The day of the week (0-6) where 0 is Sunday.
 */
export const getFirstDayOfTheMonth = date => {
  if (date.getDate() === 1) return date.getDay()

  const month = date.getMonth()
  const year = date.getFullYear()

  return new Date(year, month, 1).getDay()
}

/**
 * Generates a calendar for each month of the specified year, with disabled days for padding.
 *
 * @param {number} year - The year for which the calendars are generated.
 * @returns {Object[]} An array of objects, each representing a month's calendar.
 */
const createMonthsCalendars = year => {
  const NB_DAYS = 42 // Number of days to show in a month's calendar view, including padding
  const months = getMonths(year)

  let monthsArray = []
  for (let month in months) {
    const flatMonth = [] // Array to hold all the days to be displayed in the calendar
    const disableDays = [] // Indexes of days to be disabled (not part of the current month)
    let disableDaysIndex = 0
    const firstDayOfTheMonth = getFirstDayOfTheMonth(new Date(year, month, 1))

    // Calculate the number of days from the previous month to be displayed
    const nbOfPreviousDaysMonth =
      months[month].month === "January" ? 31 : months[month - 1].days
    const firstDayOfMonthTable =
      nbOfPreviousDaysMonth -
      (firstDayOfTheMonth === 0 ? 7 : firstDayOfTheMonth) +
      1
    for (let i = firstDayOfMonthTable; i <= nbOfPreviousDaysMonth; i++) {
      flatMonth.push(i) // Add padding days from the previous month
      disableDays.push(disableDaysIndex++)
    }
    for (let i = 1; i <= months[month].days; i++) {
      flatMonth.push(i) // Add actual days of the month
      disableDaysIndex++
    }
    const leftToFill = NB_DAYS - flatMonth.length // Calculate remaining padding needed for the next month
    for (let i = 1; i <= leftToFill; i++) {
      flatMonth.push(i) // Add padding days for the next month
      disableDays.push(disableDaysIndex++)
    }

    // Construct the month object for the calendar
    const monthObject = {
      month: months[month].month,
      monthTable: flatMonth,
      disableDays: disableDays
    }
    monthsArray.push(monthObject)
  }

  return monthsArray
}

export default createMonthsCalendars
