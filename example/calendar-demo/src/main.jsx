import React from "react"
import ReactDOM from "react-dom/client"
import DatePicker from "./components/DatePicker/DatePicker"
import "../node_modules/em-react-calendar/dist/style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DatePicker name="dateInput" label="Selected Date" />
  </React.StrictMode>
)
