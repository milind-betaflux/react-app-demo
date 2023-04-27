import React from "react";
import userVsOppIcon from '../../assets/images/userVsOppIcon.svg';
import InputBox from "../inputBox/inputBox";
import './finalStepContent.css';

const FinalStepContent = (props) => {
    return(
        <div>
            <div className="display_flex space_between flex_align_center">
                <div className="selected-assets-container">
                    <p className="selected-assets-text">Your Asset</p>
                    <img className="selected-assets-icon" src={props.selectedUserAsset && props.selectedUserAsset.img ? 
                        props.selectedUserAsset.img : null}/>
                    <p className="selected-assets-text">{props.selectedUserAsset.name}</p>
                </div>                
                <img className="user-vs-opp-icon" src={userVsOppIcon}/>                
                <div className="selected-assets-container">
                    <p className="selected-assets-text">Opposing Asset</p>
                    <img className="selected-assets-icon" src={props.selectedOpponentAsset && props.selectedOpponentAsset.img ? 
                        props.selectedOpponentAsset.img : null}/>
                    <p className="selected-assets-text">{props.selectedOpponentAsset.name}</p>
                </div>
            </div>            
            <div className="input-contiainer">
                <InputBox 
                label="Fund your Pool (Ethereum)"
                />
            </div>
            <div className="input-contiainer">
                <InputBox 
                label="Lot Starts On"
                />
            </div>
            <div className="input-contiainer">
                <InputBox 
                label="Lot Ends On"
                />
            </div>
        </div>
    );
}

export default FinalStepContent;