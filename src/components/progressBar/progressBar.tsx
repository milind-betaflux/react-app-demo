import React from "react";
import './progressBar.css'

const ProgressBar = (props) => {
    return(
        <div className="progress-bar-outer-container display_flex space_between flex_align_center">
            <div className={
                props.progressStep === 1 ? 
                "active-step-indicator progress-step-text step-indicator" :
                "completed-step-indicator progress-step-text step-indicator"
            }>
                1
            </div>
            <div className={props.progressStep === 1 ? 
                "inactive-step-indicator progress-step-text step-indicator" : props.progressStep === 2 ?
                "active-step-indicator progress-step-text step-indicator" : 
                "completed-step-indicator progress-step-text step-indicator"
            }>
                2
            </div>
            <div className={props.progressStep === 3 ? 
                "active-step-indicator progress-step-text step-indicator" :
                "inactive-step-indicator progress-step-text step-indicator"}>
                3
            </div>
        </div>
    );
}

export default ProgressBar;