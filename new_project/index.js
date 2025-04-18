import React from "react";
import ReactDOM from "react-dom";

const first_name = "Won";
const last_name = "Lee";
const luckyNumber = 22;

ReactDOM.render(
  <div>
    <h1>Hello {first_name + " " + last_name}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
