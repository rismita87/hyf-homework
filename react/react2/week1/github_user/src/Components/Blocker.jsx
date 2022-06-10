//Blocker comp to implement throttling
import React, { useContext, useEffect, useState } from "react";
import { SearchFieldDisabledStatus } from "./Contexts";
export default function Blocker({ message }) {
  const [seconds, setSeconds] = useState(60);
  const searchBarShowState = useContext(SearchFieldDisabledStatus);

  useEffect(() => {
    if (seconds === 60) {
      searchBarShowState(true);
    }
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      if (seconds === 0) {
        searchBarShowState(false);
        setSeconds();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  if (seconds) {
    return (
      <div className="App">
        <h1>{seconds}</h1>
        <br></br>
        <p>
          <b>Error message:</b> {message}
        </p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h2>Ready to go..</h2>
      </div>
    );
  }
}
