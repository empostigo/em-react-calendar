# em-react-calendar : A React component Calendar

![Calendar Screenshot](./calendar.png "React Calendar")

## Runtime / package manager

`nodejs` : `v20.11.1` - LTS

## Installation

`npm install "em-react-calendar"`

npm link: 

## Usage

The component has three props:

- `inputId`: the id of the input used to display selected date
- `selectedDate`: A Date object used to init the calendar and track the selected date, `new Date()` is relevant for initiation
- `onDateSelect` A callback function to handle date selection

The style has to be imported in main.jsx: `import "../node_modules/em-react-calendar/dist/style.css"`

See in the [example/calendar-demo](./example/calendar-demo "") folder for further instructions.
