import React, { useState } from 'react';
import './App.css';
import CreateLotPopup from './components/createLotPopup/createLotPopup';
import SelectionPopup from './components/selectionPopup/selectionPopup';

const App = () =>{

  const [showSelectionPopup, setShowSelectionPopup] = useState<boolean>(false);

  const onCreateClick = () => {
    setShowSelectionPopup(true);
  }

  return (
    <div className="App">
      {showSelectionPopup ? 
        <SelectionPopup setShowSelectionPopup={setShowSelectionPopup}/>
      : 
        <CreateLotPopup onCreateClick={onCreateClick}/>
      }
    </div>
  );
}

export default App;
