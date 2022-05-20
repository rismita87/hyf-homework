import React, { useContext, useEffect, useState } from "react";
import UserList from "./UserList";
import Blocker from "./Blocker";
import { SearchInputContext } from "./Contexts";
export default function APIOutput() {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [errorData, setErrorData] = useState();
  const inputText = useContext(SearchInputContext);
  const loadData = async () => {
    let res = [];
    setErrorData();
    setData();
    setIsLoaded();
    if (inputText) {
      setIsLoaded(true);
      res = await fetch(`https://api.github.com/search/users?q=${inputText}`);
      if (!res.ok) {
        setErrorData(await res.json());
        setIsLoaded(false);
      } else {
        setData(await res.json());
        setIsLoaded(false);
      }
    }
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, [inputText]);

  if (errorData) {
    return <Blocker message={errorData.message} />;
  }

  if (data) {
    if (parseInt(data.total_count) > 0) {
      return <UserList data={data} />;
    } else {
      return <p>No results..</p>;
    }
  }

  if (isLoaded) {
    return <p>Loading..</p>;
  }
  //if none of the above conditions match
  return <p>No results..</p>;
}
