import React, { useState } from "react";
export default function TextForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","success");
  };
  const handelDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","success");
  };
  const handleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value);
  };
  const handleReset = () => {
    setText("");
  };
  const handleCopy = () => {
    var text = document.getElementById("MyBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="mx-2">Enter something</h1>
        <div className="mb-3">
          <textarea
            itemID="textBox"
            className="form-control mx-2"
            placeholder="enter the text"
            value={text}
            onChange={handleOnChange}
            id="MyBox"
            rows="10"
            style={{
               backgroundColor:props.mode==='dark'?'#26292b':'#f8f9fa',
               color:props.mode==='dark'?'white':'black',
            }}
              ></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handelUpClick}>
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handelDownClick}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleReset}>
            Clear text
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
            Copy text
          </button>
        </div>
        <div className="container my-3">
          <h1>Your Summary Here</h1>
          <p>
            {text.split(" ").length - 1} words and {text.length} characters and
            sentences {text.split(".").length}
          </p>
          <p>{text.length>0?0.008 * text.split(" ").length:0} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
      </div>
    </>
  );
}
