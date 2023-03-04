import React, { useState } from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        console.log(" Upper Case was Clicked!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () => {
        console.log(" Lower Case was Clicked!!");
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) => {
        console.log(" Onchaanged");
        setText(event.target.value);
    }

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("SetText"); // Correct way to change the state

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    {/* <label for="myBox" className="form-label"> Example Textarea </label> */}
                    <textarea className="form-control" placeholder={'Write text here'} value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary  my-2" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h2>Text Summary Here</h2>

                <p >{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {text.length} Charcter</p>
                <p >{0.008 * text.split(" ").length} Minutes Read</p>

                <h2>Preview</h2>

                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}





