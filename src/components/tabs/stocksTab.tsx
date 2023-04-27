import React from "react";
import { assetData } from './testAssetData';
import './assetTabsStyles.css';
import '../popupTabs/popupTabs.css';

const StocksTab = (props) => {
    
    const onAssetClick = (val) => {        
        props.setSelectedAsset(val)
    }

    return(
        <div className="assets-outer-container">
            <div className="assets-flex-container">
                {assetData.length > 0 && assetData.map((asset) => {                    
                    return(
                        <div key={asset.id} className="asset-item-container">
                            <div 
                            onClick={() => onAssetClick(asset)}
                            className={props.selectedAsset && props.selectedAsset.name &&
                                props.selectedAsset.id === asset.id ? 
                                "asset-item-inner-container active-asset tab-container-selected" : 
                                "asset-item-inner-container inactive-asset"}>
                                <img src={asset.img} className="asset-img"/>
                                <p className="asset-label">
                                    {asset.name}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default StocksTab;