import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextConverter from './components/TextConverter';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light')
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null)
    },3000)
  }

  const changeMode= ()=>{
     if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert("Dark Mode Enable","success")

     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enable","success")
     }
  }

  return (
    <>
     {/* <Router> */}
     <Navbar title="TextUtils" home = "Home" about= "About" mode={mode} changeMode={changeMode}/>
     <Alert alert={alert}/>
      {/* <Routes> */}
        {/* <Route path="/" element={}/> */}
        <div className="container mt-5">
       <TextConverter showAlert={showAlert} heading="Text Analyzer" mode={mode}/>
     </div>
        {/* <Route path="/about" element={<About/> } /> */}
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
