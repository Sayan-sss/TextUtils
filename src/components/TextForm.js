import React, { useState } from "react";

export default function TextForm(props) {
  function getWordCount(str) {
    return str.split(" ").filter(function (n) {
      return n != "";
    }).length;
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopyClick = () => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = “new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#021b2f" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter your text..."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#021b2f",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#021b2f" }}
      >
        <h2>Your text summury</h2>
        <p>
          {getWordCount(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview...."}</p>
      </div>
    </>
  );
}
