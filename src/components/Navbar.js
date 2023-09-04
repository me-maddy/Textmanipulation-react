import List from "./List";
import Alert from "./Alert";
import "./Navbar.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Navbar({ alert, showAlert }) {
  const headings = ["home", "about"];
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      showAlert("Light-mode has been enabled!", "success");
    } else {
      showAlert("Dark-mode has been enabled!", "success");
    }
  };

  if (isChecked) {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  const checkTextArea = () => {
    const textAreaEle = document.getElementById("dataValue");
    if (textAreaEle) {
      if (isChecked) {
        textAreaEle.style.color = "#646464";
      } else {
        textAreaEle.style.color = "black";
      }
    }
  };

  checkTextArea();

  return (
    <>
      <nav
        className="navbar"
        style={
          isChecked
            ? { backgroundColor: "#505050" }
            : { backgroundColor: "rgb(121,121,121)" }
        }
      >
        <h3 className="text-heading">TextUtils</h3>
        <ul className="linkBox">
          {headings.map((heading, index) => (
            <List key={index} heading={heading} />
          ))}
        </ul>
        <div className="themeBox">
          <input
            type="checkbox"
            id="dark-mode"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <label htmlFor="dark-mode" className="toggleBox"></label>
        </div>
      </nav>
      <Alert alert={alert} />
      <Outlet />
    </>
  );
}
