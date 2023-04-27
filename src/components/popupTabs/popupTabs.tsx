import React from "react";
import './popupTabs.css';

const PopupTabs = (props) => {

    const onTabClick = (val) => {
        props.setSelectedTab(val);
    }

    return(
        <div className="display_flex space_between flex_align_center popup-tabs">
              {props.tabsList.length > 0 && props.tabsList.map((tab) => {
                  return(
                      <div key={tab.id} onClick={() => onTabClick(tab)} className={props.selectedTab.id === tab.id ? "tab-container tab-container-selected" : "tab-container"}>
                          <p className={props.selectedTab.id === tab.id ? "tab-label tab-label-selected" : "tab-label tab-label-unselected"}>
                              {tab.label}
                          </p>
                      </div>
                  )
              })}
        </div>
    );
}

export default PopupTabs;