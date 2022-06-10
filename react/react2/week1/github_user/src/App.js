import "./App.css";
import React, { useState } from "react";
import UserInputs from "./Components/UserInputs";
import APIOutput from "./Components/APIOutput";
import {
  SearchInputContext,
  SearchFieldDisabledStatus,
} from "./Components/Contexts";

function App() {
  const [searchInputText, setSearchInputText] = useState();
  const [seachInputState, setSearchInputState] = useState(false);
  const searchInputProcess = (text) => {
    setSearchInputText(text);
  };
  const setStatusofSearchField = (booleanState) => {
    setSearchInputState(booleanState);
  };
  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <SearchInputContext.Provider value={searchInputProcess}>
        <SearchFieldDisabledStatus.Provider value={seachInputState}>
          <UserInputs />
        </SearchFieldDisabledStatus.Provider>
      </SearchInputContext.Provider>

      <br></br>
      <SearchFieldDisabledStatus.Provider value={setStatusofSearchField}>
        <SearchInputContext.Provider value={searchInputText}>
          <APIOutput />
        </SearchInputContext.Provider>
      </SearchFieldDisabledStatus.Provider>
    </div>
  );
}

export default App;
