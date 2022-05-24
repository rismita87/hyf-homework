import "./App.css";
import React from "react";
import ToDoList from "./components/ToDoList";
import toDoList from "./data/toDoList";
import Search from "./components/Search";

function App() {
  const [filterToDoList, setFilterToDoList] = React.useState(toDoList);

  const onFilteredToDoListChange = (text) => {
    setFilterToDoList(
      toDoList.filter((tododata) =>
        tododata.description.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Search onFilteredToDoListChange={onFilteredToDoListChange} />

      <ToDoList toDoListdataSource={filterToDoList} />
    </div>
  );
}

export default App;
