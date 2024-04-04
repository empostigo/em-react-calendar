# em-react-calendar : A React component Calendar

Version: 1.0.5

![Calendar Screenshot](https://github.com/empostigo/em-react-calendar/blob/main/calendar.png "React Calendar")

## Runtime / package manager

`nodejs` : `v20.11.1` - LTS

## Installation

`npm install "em-react-calendar"`

[npm link](https://www.npmjs.com/package/em-react-calendar)

## Usage

There is two components usable in this plugin:

- The Calendar component, it has three props:

  - `inputId`: the id of the input used to display selected date
  - `selectedDate`: A Date object used to init the calendar and track the selected date, `new Date()` is relevant for initiation
  - `onDateSelect` A callback function to handle date selection

To use it: `import { Calendar } form "em-react-calendar"` \
The style has to be imported in main.jsx: `import "../node_modules/em-react-calendar/dist/style.css"` \
See in the [example/calendar-demo](https://github.com/empostigo/em-react-calendar/tree/main/example/calendar-demo "") folder for further instructions. A published [demo site](https://calendar-demo.empostigo.dev) is available.

- The Select component, it has four props:
  - `value`: The value to display in the equivalent html select tag, i.e. a button
  - `id`: An optional id for the button; if no id is provided, the dropdown arrows will be in golden color (due to Calendar need)
  - `onValueChange`: A callback function to handle selected option

To use it: `import { Select } from "em-react-calendar"`

Keep in mind that this plugin first of all a Calendar react component, so the Select component may help for some needs, but it's a specific component.

## Licence

This project is under [MIT](https://github.com/empostigo/em-react-calendar/blob/main/LICENCE.md) licence.
