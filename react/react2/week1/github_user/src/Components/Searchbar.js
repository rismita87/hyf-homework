import { useContext } from "react";
import { SearchInputContext, SearchFieldDisabledStatus } from "./Contexts";

export default function Searchbar() {
  const textVal = useContext(SearchInputContext);
  const searchFieldStatus = useContext(SearchFieldDisabledStatus);
  return (
    <input
      type="text"
      placeholder="Search for user"
      disabled={searchFieldStatus}
      onChange={(e) => textVal(e.target.value)}
    />
  );
}
