import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const data = [
  {
    id: 1,
    church_logo_url:
      "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email_address: "example1@example.com",
    status: "active"
  },
  {
    id: 2,
    church_logo_url:
      "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email_address: "example2@example.com",
    status: "paused"
  }
  // ... more data objects
];

const columns = {
  selector: "Select",
  church_logo_url: "Church Logo",
  email_address: "Email Address"

  // ... other column definitions
};

const columnsUI = {
  church_logo_url: "user",
  email_address: "email",
  status: "status",
  selector: "selector"
  // ... other column UI definitions
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={data} columns={columns} columnsUI={columnsUI} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
