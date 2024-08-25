import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// const arr = ["a", "b", "c"];
// const arr1 = arr.filter((idx) => idx !== "c")
// for(let i = 0; i < arr.length; i++)
// {
//   console.log(arr1[i]);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)