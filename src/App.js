import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021b2f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" about="About us" /> */}
      {/* <Navbar /> */}
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about"> element={<About/>}</Route> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route exact path="/"> element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}</Route> */}
          {/* <Route path="/textForm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} /> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
