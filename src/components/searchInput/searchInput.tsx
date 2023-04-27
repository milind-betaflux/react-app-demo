import React from "react";
import './searchInput.css';
import searchIcon from '../../assets/images/search-icon.svg';

const SearchInput = (props) => {
    return(
        <div className="input-box-container">
            <img className="search-icon" src={searchIcon}/>
            <input className="search-input" placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default SearchInput;