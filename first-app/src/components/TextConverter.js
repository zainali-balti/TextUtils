import React, {useState} from 'react'

export default function TextConverter(props) {
    const updateTheText = ()=>{
        console.log(text);
        let updateText = text.toUpperCase();
        setText(updateText)
        props.showAlert("Convert into UpperCase","success")
    }
    const updateTheTextLower = ()=>{
        console.log(text);
        let updateText = text.toLowerCase();
        setText(updateText)
        props.showAlert("Convert into LowerCase","success")
    }
    const ClearText = ()=>{
        let updateText = '';
        setText(updateText)
        props.showAlert("Remove all the Text","success")
    }
    const ExtractName = ()=>{
        let name = "zain";
        if(text.toLowerCase().includes(name.toLowerCase())){
            console.log("get Text",name)
            props.showAlert("Get the Name From Text","success")
        }
        else{
        let updateText = text;
        setText(updateText)
        }
    }
    const handleOnChange = (event)=>{
        console.log("handle on change!")
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here!")
  return (
    <>
    <div className={`d-flex justify-content-center text-${props.mode === 'light' ? 'black' : 'white'}`}>
    <div className="mb-3 col-6">
    <h1>{props.heading}</h1>
    <textarea className="form-control" style={{backgroundColor:props.mode === 'light' ? 'white' : 'gray', 
    color: props.mode === 'dark' ? 'white' : 'black' }} 
    value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
    <div className="d-flex justify-content-between flex-wrap">
    <button type="button" className="btn btn-primary mt-3" onClick={updateTheText}>Convert To UpperCase</button>
    <button type="button" className="btn btn-primary mt-3" onClick={updateTheTextLower}>Convert To LowerCase</button>
    <button type="button" className="btn btn-primary mt-3" onClick={ExtractName}>Get Name</button>
    <button type="button" className="btn btn-primary mt-3" onClick={ClearText}>Clear Text</button>
    </div>
  </div>
  </div>
  <div className={`container col-6 text-${props.mode === 'light' ? 'black' : 'white'}`}>
    <h3>Summary of Text</h3>
    <p>
        {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} no of words and {text.length} no of characters in the text
    </p>
</div>

 <div className={`container col-6 text-${props.mode === 'light' ? 'black' : 'white'}`}>
    <h3>Preview The Text </h3>
    <p>{text}</p>
 </div>
  </>
  )
}
