import React, { useEffect, useState } from "react";
import '../../App.css';
import '../createLotPopup/createLotPopup.css';
import closeIcon from '../../assets/images/close-icon.svg';
import CustomBtn from "../customBtn/customBtn";
import ProgressBar from "../progressBar/progressBar";
import './selectionPopup.css';
import SearchInput from "../searchInput/searchInput";
import PopupTabs from "../popupTabs/popupTabs";
import CryptoTab from "../tabs/cryptoTab";
import IndexesTab from "../tabs/indexesTab";
import StocksTab from "../tabs/stocksTab";
import CommoditiesTab from "../tabs/commoditiesTab";
import ForexTab from "../tabs/forexTab";
import FinalStepContent from "../finalStepContent/finalStepContent";

const SelectionPopup = (props) => {

    const [progressStep, setProgressStep] = useState<number>(1);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const tabs:TabsInterface[] = [
        {id: 1, label: 'Crypto'}, 
        {id: 2, label: 'Indexes'},
        {id: 3, label: 'Stocks'},
        {id: 4, label: 'Commodities'},
        {id: 5, label: 'Forex'}
    ];
    const [selectedUserAssetsTab, setSelectedUserAssetsTab] = useState<TabsInterface>(tabs[0]);
    const [selectedOpponentAssetsTab, setSelectedOpponentAssetsTab] = useState<TabsInterface>(tabs[0]);
    const [selectedUserAsset, setSelectedUserAsset] = useState<AssetDataInterface>(null);
    const [selectedOpponentAsset, setSelectedOpponentAsset] = useState<AssetDataInterface>(null);

    const onNextClick = () => {
        if(progressStep === 3){
            props.setShowSelectionPopup(false);
        }
        else if(progressStep === 1){
            if(selectedUserAsset === null){
                alert("Please select your asset to continue.")
                return;            
            }
            setProgressStep(2);            
        }
        else if(progressStep === 2){
            if(selectedOpponentAsset === null){
                alert("Please select opponent's asset to continue.")
                return;            
            }
            setProgressStep(3);
        }
    }

    const onBackClick = () => {
        if(progressStep === 3){
            setProgressStep(2);
        }
        else if(progressStep === 2){
            setProgressStep(1);
        }        
    }

    const onSearchInput = (e) => {
        setSearchKeyword(e.target.value);
    }

    useEffect(() => {
        setSelectedUserAsset(null)
    }, [selectedUserAssetsTab])

    useEffect(() => {
        setSelectedOpponentAsset(null)
    }, [selectedOpponentAssetsTab])

    return(
        <div className="popup-outer-container selection-popup-container">
            <div className="popup-inner-container">
                <div className="display_flex space_between flex_align_center selection-popup-title-container">
                    <p className="title-text selection-popup-title">
                        Multi-user Lot
                    </p>                
                    <img className="help-icon" src={closeIcon} onClick={() => props.setShowSelectionPopup(false)}/>
                </div>
                <br />
                <ProgressBar progressStep={progressStep}/>
                <br />
                <p className="selection-popup-subtitle">
                    {progressStep == 1 ? 'Choose your Asset' : progressStep == 2 ? 'Choose Opposing Asset' : 'Take Position'}
                </p>
                <br />
                {(progressStep == 1 || progressStep == 2) && 
                    <SearchInput 
                    placeholder="Search Token eg. ETH, Gold etc"
                    value={searchKeyword}
                    onChange={onSearchInput}
                    />
                }
                {progressStep === 3 &&
                    <FinalStepContent 
                    selectedUserAsset={selectedUserAsset}
                    selectedOpponentAsset={selectedOpponentAsset}
                    />
                }
                <br />
                {progressStep === 1 ? 
                    <PopupTabs
                    selectedTab={selectedUserAssetsTab}
                    tabsList={tabs}
                    setSelectedTab={setSelectedUserAssetsTab}
                    />
                : 
                progressStep === 2 ?
                    <PopupTabs
                    selectedTab={selectedOpponentAssetsTab}
                    tabsList={tabs}
                    setSelectedTab={setSelectedOpponentAssetsTab}
                    />
                : null
                }
                {/* <br /> */}
                {
                    progressStep === 1 ? 
                        (selectedUserAssetsTab.id === 1 ? 
                            <CryptoTab
                            selectedAsset={selectedUserAsset}
                            setSelectedAsset={setSelectedUserAsset}
                            /> 
                        : selectedUserAssetsTab.id === 2 ?
                            <IndexesTab 
                            selectedAsset={selectedUserAsset}
                            setSelectedAsset={setSelectedUserAsset}
                            />
                        : selectedUserAssetsTab.id === 3 ?
                            <StocksTab 
                            selectedAsset={selectedUserAsset}
                            setSelectedAsset={setSelectedUserAsset}
                            />
                        : selectedUserAssetsTab.id === 4 ?
                            <CommoditiesTab 
                            selectedAsset={selectedUserAsset}
                            setSelectedAsset={setSelectedUserAsset}
                            />
                        : selectedUserAssetsTab.id === 5 ?
                            <ForexTab 
                            selectedAsset={selectedUserAsset}
                            setSelectedAsset={setSelectedUserAsset}
                            />
                        : null)
                    : progressStep === 2 ? 
                        (selectedOpponentAssetsTab.id === 1 ? 
                            <CryptoTab
                            selectedAsset={selectedOpponentAsset}
                            setSelectedAsset={setSelectedOpponentAsset}
                            /> 
                        : selectedOpponentAssetsTab.id === 2 ?
                            <IndexesTab 
                            selectedAsset={selectedOpponentAsset}
                            setSelectedAsset={setSelectedOpponentAsset}
                            />
                        : selectedOpponentAssetsTab.id === 3 ?
                            <StocksTab 
                            selectedAsset={selectedOpponentAsset}
                            setSelectedAsset={setSelectedOpponentAsset}
                            />
                        : selectedOpponentAssetsTab.id === 4 ?
                            <CommoditiesTab 
                            selectedAsset={selectedOpponentAsset}
                            setSelectedAsset={setSelectedOpponentAsset}
                            />
                        : selectedOpponentAssetsTab.id === 5 ?
                            <ForexTab 
                            selectedAsset={selectedOpponentAsset}
                            setSelectedAsset={setSelectedOpponentAsset}
                            />
                        : null) : null
                }
                <br />
                {progressStep == 1 ? 
                    <div className="btns-container">
                        <CustomBtn 
                        label="Next"
                        onClick={onNextClick}
                        />
                    </div>
                : 
                <div className="display_flex space_between flex_align_center btns-container">
                    <div className="flex-btn-container-child margin_right">
                        <CustomBtn 
                        label="Back"
                        onClick={onBackClick}
                        transparentBtn={true}
                        />
                    </div>
                    <div className="flex-btn-container-child margin_left">
                        <CustomBtn
                        label={progressStep == 3 ? "Create Lot" : "Next"}
                        onClick={onNextClick}
                        />
                    </div>
                </div>
                }                
            </div>            
        </div>
    );
}

export default SelectionPopup;