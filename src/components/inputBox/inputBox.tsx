import React from "react";
import './inputBox.css';

const InputBox = (props) => {
    return(
        <div className="input-box-container">   
            <p className="input-box-label">{props.label}</p>         
            <input className="input-box" placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default InputBox;