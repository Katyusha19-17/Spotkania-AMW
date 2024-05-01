import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const element = React.createElement(
  "a",
  {href: "https://google.pl"},
  "Google"
)

ReactDOM.createRoot(document.getElementById("root")).render(element);