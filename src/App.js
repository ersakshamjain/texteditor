// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';

import {
  Routes, Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light"); // Weather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    console.log(message);
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = 'TextUtils - LightMode';
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 2000);
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtils - DarkMode';
    }
  }
  return (
    <>

      {/* This is for Navigation Bar Section*/}
      {/* Navigation Bar  */}
      <Navbar title="Texutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />



      <div className="container my-3">
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/' element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
      </Routes>

    </>
  );
}


export default App;