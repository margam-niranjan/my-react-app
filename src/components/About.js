import React, { useState } from "react";
import '../index.css'; 

export default function About(props) {
  // const [mySytle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });
  let mySytle = {
    color : props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#26292b' : 'white'
  }
  return (
    <div className="container my-3" >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={mySytle}>
        <div className="accordion-item" style={mySytle}>
          <h2 className="accordion-header" style={mySytle}>
            <button
              style={mySytle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyse Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mySytle}>
            Certainly! When analyzing my text, you might notice several key features. Firstly, it aims to be clear and informative, providing direct responses to questions or prompts. Secondly, there's a conversational tone, making interactions feel natural and engaging. Additionally, you'll find a balance between being helpful and respectful, ensuring a positive experience for users. Overall, the text reflects an attempt to communicate effectively while maintaining a friendly and approachable demeanor.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mySytle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mySytle}>
            "In today's fast-paced world, effective communication is paramount. Whether in personal interactions or professional settings, clarity and conciseness are key. With the rise of digital communication, mastering the art of conveying ideas succinctly has become even more important. By striking a balance between brevity and depth, individuals can ensure their messages resonate and leave a lasting impact."
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mySytle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mySytle}>
            Browser compatibility refers to the ability of a website or web application to function correctly across different web browsers. As the internet ecosystem includes various browsers like Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari, ensuring compatibility ensures that users have a consistent experience regardless of their chosen browser. Developers use coding practices, standards compliance, and testing methods to ensure their creations work seamlessly across these platforms, optimizing accessibility and usability for all users.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      </div>
    </div>
  );
}
