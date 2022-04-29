import "./App.css";
import React from "react";
import ToDoListComp from "./components/ToDoList";
import toDoList from "./data/toDoList";
import SearchComp from "./components/Search";

function App() {
  const [filterToDoList, setFilterToDoList] = React.useState(toDoList);

  return (
    <div className="App">
      <SearchComp
        onFilteredToDoListChange={(text) =>
          setFilterToDoList(
            toDoList.filter((tododata) =>
              tododata.description.toLowerCase().includes(text.toLowerCase())
            )
          )
        }
      />
      <ToDoListComp ds={filterToDoList} />
    </div>
  );
}

export default App;
