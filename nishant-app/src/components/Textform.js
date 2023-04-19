
import React,{useState} from 'react'
// import PropTypes from 'prop-types'


export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () =>{
  //  console.log("Uppercase was clicked");
   let newText = text.toUpperCase();
   setText(newText);
  }

  const handleCopy = ()=>{
    var Text = document.getElementById("Mybox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    // alert("Copied the text: " + Text.value);
  }

  const handleRemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  
  const handleLoClick = () =>{
   console.log("Uppercase was clicked");
   let newText = text.toLowerCase();
   setText(newText);
  }
  const handleClearClick = () =>{
   let newText = '';
   setText(newText);
  }

  const handleOnChange = (event) =>{
    // console.log("onchage");
   setText(event.target.value);
  }

//  setText("jfdghfd");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
       <h1 >{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'black' : 'white' , color: props.mode === 'dark'? 'white' : 'black'}} id="Mybox" rows="3"></textarea>
     </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Spaces</button>
    </div>

    <div className="container my-4" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes for reading </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
