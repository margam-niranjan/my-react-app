import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2a2f33";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - darkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Home";
    }
  };

  return (
    <>
    <Router>
      <Navbar  title="TextUtils"  about="about text utilities" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>

      <div className="container">
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text" mode={mode} ></TextForm>}> </Route>
        </Routes>
       
      </div>
      </Router>
      </>
  );
}

export default App;
