import "./App.css";
import React from "react";
import ToDoList from "./components/ToDoList";
import toDoList from "./data/toDoList";
import Search from "./components/Search";
import AddToDo from "./components/AddToDo";
import WatchCount from "./components/WatchCount";

function App() {
  //here two useState(toDoList) are set because once the search is set the
  // fulltodo list gets modified and shorten. Then the other functionalities will be
  // effective on the shorten list once the search bar is cleared. So, the second
  //useState(toDoList) is used to get the full todolist once the search bar is cleared.
  const [filterToDoList, setFilterToDoList] = React.useState(toDoList);
  const [fullToDoList, setFullToDoList] = React.useState(toDoList);

  const onFilteredToDoListChange = (text) => {
    if (text) {
      setFilterToDoList(
        filterToDoList.filter((tododata) =>
          tododata.description.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilterToDoList(fullToDoList);
    }
  };

  const onAddTodoList = (task, time) => {
    const newId = parseInt(fullToDoList.length) + toDoList.length;
    const newObj = {
      id: "",
      description: "",
      deadline: "",
      taskCompletionStatus: "",
    };

    newObj.id = (newId + 1).toString();
    newObj.description = task.value;
    newObj.deadline = time.value;
    newObj.taskCompletionStatus = false;
    setFullToDoList([...fullToDoList, newObj]);
    setFilterToDoList([...fullToDoList, newObj]);
  };

  const onChangeCheckBox = (text) => {
    fullToDoList.forEach((element) => {
      if (element.id === text) {
        element.taskCompletionStatus =
          element.taskCompletionStatus === true ? false : true;
      }
    });
    setFilterToDoList([...fullToDoList]);
    setFullToDoList([...fullToDoList]);
  };

  const onDeleteItem = (text) => {
    const newFullToDoList = fullToDoList.filter(
      (element) => element.id !== text
    );
    setFilterToDoList([...newFullToDoList]);
    setFullToDoList([...newFullToDoList]);
  };

  return (
    <div className="App">
      <WatchCount />

      <Search onFilteredToDoListChange={onFilteredToDoListChange} />

      <AddToDo onAddTodoList={onAddTodoList} />

      <ToDoList
        toDoListDataSource={filterToDoList}
        onChangeCheckBox={onChangeCheckBox}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
