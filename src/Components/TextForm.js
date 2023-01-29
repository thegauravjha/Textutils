import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
        console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        // setText("You have changed the text to Upper Case");
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Changes");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
            </div>
        </>
    )
}
