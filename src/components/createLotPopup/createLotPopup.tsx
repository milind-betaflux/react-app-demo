import React from "react";
import './createLotPopup.css';
import '../../App.css';
import helpIcon from '../../assets/images/help-icon.svg';
import playersIcon from '../../assets/images/players-icon.svg';
import arrowsIcon from '../../assets/images/arrows-icon.svg';
import CustomBtn from "../customBtn/customBtn";

const CreateLotPopup = (props) => {    

    return(
        <div className="popup-outer-container create-lot-popup-container">
            <div className="popup-inner-container">
                <div className="display_flex space_between flex_align_center">
                    <div className="pill-text-container">
                        <p className="pill-text">
                            Most Played
                        </p>
                    </div>
                    <img className="help-icon" src={helpIcon}/>
                </div>
                <br />
                <div className="display_flex space_between flex_align_center">
                    <img className="players-icon" src={playersIcon}/>
                    <img className="arrows-icon" src={arrowsIcon}/>
                    <img className="players-icon" src={playersIcon}/>
                </div>                
                <p className="title-text">
                    Multi-user Lot
                </p>
                <p className="subtext">
                    In this lot multiple people will bet against you. 
                    The condition for the lot to start is both sides should have equal funds.
                </p>
                <CustomBtn 
                label="Create Lot"
                onClick={props.onCreateClick}
                />
            </div>            
        </div>
    );
}

export default CreateLotPopup;