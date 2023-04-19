
// import About from './components/About';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Loginform from './components/loginform';

function App() {
 
  const [mode , darkMode] = useState('light');
  const [text , setText] = useState('Enable Ligth mode');
  // let handleWriteText = ()=>{
  //   if(mode === 'dark'){
  //     setText("Enable Dark Mode");
  //   }
  //   else{
  //     setText("Enable Light Mode");
  //   }
  // }
  let handleDarkMode = ()=>{
    if(mode === 'dark'){
      darkMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = "White";
    }
    else{
      darkMode('dark');
      setText('Enable Light Mode');
      document.body.style.backgroundColor = "black";
    }
  }


  return (
    <>
    <Navbar title="Nishant" about="About Us" mode={mode} text={text}  handleDarkMode = {handleDarkMode}  />
    <div className="container">
    <Textform heading="Enter the text to analyze"  mode={mode}/>

    {/* <About/> */}
    </div>
    {/* <Loginform/> */}
    </>
  );
}

export default App;
