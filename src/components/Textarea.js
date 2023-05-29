import { useState } from "react";

export default function Textarea({ showAlert }) {
  const [text, setMytext] = useState("");

  const onHandleUpperCase = (e) => {
    if (text) {
      const newText =
        e.target.parentElement.previousElementSibling.value.toUpperCase();
      setMytext(newText);
      showAlert("Text has been converted into upper-case!", "success");
    }  else {
      showAlert("Write something in the text box!" , "warning");
    }
  };

  const onLowerCase = (e) => {
    if (text) {
      const newText =
        e.target.parentElement.previousElementSibling.value.toLowerCase();
      setMytext(newText);
      showAlert("Text has been converted into lower-case!", "success");
    }   else {
      showAlert("Write something in the text box!" , "warning");
    }
  };

  const onClear = () => {
    if (text) {
      setMytext("");
      showAlert("Text has been deleted!", "success");
    }  else {
      showAlert("There is no text in the text box to clear!" , "warning");
    }
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setMytext(newText);
  };

  const handleSpeak = () => {
    if (text.split(" ").filter((element) => element !== "").length === 0) {
      showAlert("There should have some text in the text box to speak!" , "warning");
      return;
    }
    const toggle = document.getElementById("toggle");
    if (toggle.textContent === "Speak") {
      toggle.innerHTML = "Stop";
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      msg.addEventListener("end", function (event) {
        toggle.innerHTML = "Speak";
      });
    } else {
      toggle.innerHTML = "Speak";
      if (toggle.textContent === "Speak") window.speechSynthesis.cancel();
    }
    showAlert("Text has been scaned and converted into voice!", "success");
  };

  const handleCapital = () => {
    if (text) {
      let helpText = text.split(" ");
      const changeText = [];
      helpText.forEach((ele) => {
        changeText.push(
          ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()
        );
      });
      setMytext(changeText.join(" "));
      showAlert("Text has been capitalised!", "success");
    } else {
      showAlert("Write something in the text box!" , "warning");
    }
  };

  return (
    <>
      <h3
        className="main-heading" 
      >
        Text Util Application
      </h3>
      <div className="infoBox">
        <div className="main-container">
          <h3 className="infoHead">Here is your content :-</h3>
          <textarea
            className="info"
            id="dataValue"
            value={text}
            onChange={handleChange}
          ></textarea>
          <div className="btnBox">
            <button className="actionBtn upper" onClick={onHandleUpperCase}>
              UpperCase
            </button>
            <button className="actionBtn lower" onClick={onLowerCase}>
              LowerCase
            </button>
            <button className="actionBtn clear" onClick={onClear}>
              Clear
            </button>
            <button
              className="actionBtn speak"
              id="toggle"
              onClick={handleSpeak}
            >
              Speak
            </button>
            <button className="actionBtn capital" onClick={handleCapital}>
              Capitalise
            </button>
          </div>
        </div>
        <div className="summaryBox">
          <h2>Your Text Summary:-</h2>
          <li>
            {text.split(" ").filter((element) => element !== "").length} words
            and{" "}
            {
              text
                .split(" ")
                .filter((element) => element !== "")
                .join("").length
            }{" "}
            characters
          </li>
          <li>
            {text.split(" ").filter((element) => element !== "").length * 0.008}{" "}
            minutes read
          </li>
        </div>
      </div>
      <div className="previewBox">
        <h3 className="preview-head">Your Text Preview :-</h3>
        <li className="preview-text">{text}</li>
      </div>
    </>
  );
}
