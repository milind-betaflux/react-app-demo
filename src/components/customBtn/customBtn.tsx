import React from "react";
import './customBtn.css';

const CustomBtn:any = (props) => {
    return(
        <button className={props.transparentBtn === true ? "custom-btn custom-btn-transparent" : "custom-btn custom-btn-color"} onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default CustomBtn;