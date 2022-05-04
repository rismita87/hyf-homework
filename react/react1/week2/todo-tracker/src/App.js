import "./App.css";
import React from "react";
import ToDoListComp from "./components/ToDoList";
import toDoList from "./data/toDoList";
import SearchComp from "./components/Search";
import AddToDo from "./components/AddToDo";
import WatchCountComp from "./components/WatchCount";

function App() {
  //here two useState(toDoList) are set because once the search is set the
  // fulltodo list gets modified and shorten. Then the other functionalities will be
  // effective on the shorten list once the search bar is cleared. So, the second
  //useState(toDoList) is used to get the full todolist once the search bar is cleared.
  const [filterToDoList, setFilterToDoList] = React.useState(toDoList);
  const [fullToDoList, setFullToDoList] = React.useState(toDoList);

  return (
    <div className="App">
      <WatchCountComp />

      <SearchComp
        onFilteredToDoListChange={(text) => {
          if (text) {
            setFilterToDoList(
              filterToDoList.filter((tododata) =>
                tododata.description.toLowerCase().includes(text.toLowerCase())
              )
            );
          } else {
            setFilterToDoList(fullToDoList);
          }
        }}
      />

      <AddToDo
        onAddTodoList={(task, time) => {
          const newId = fullToDoList.length;
          const newObj = {
            id: "",
            description: "",
            deadline: "",
            taskCompletionStatus: "",
          };
          newObj.id = (newId + 1).toString();
          newObj.description = task.value;
          newObj.deadline = time.value;
          newObj.taskCompletionStatus = "false";
          setFullToDoList([...fullToDoList, newObj]);
          setFilterToDoList([...fullToDoList, newObj]);
        }}
      />

      <ToDoListComp
        ds={filterToDoList}
        onChangeCheckBox={(text) => {
          fullToDoList.forEach((element) => {
            if (element.id === text) {
              element.taskCompletionStatus =
                element.taskCompletionStatus === "true" ? "false" : "true";
            }
          });

          console.log(fullToDoList);
          setFilterToDoList([...fullToDoList]);
          setFullToDoList([...fullToDoList]);
        }}
        onDeleteItem={(text) => {
          let newFullToDoList = fullToDoList.filter(
            (element) => element.id !== text
          );
          setFilterToDoList([...newFullToDoList]);
          setFullToDoList([...newFullToDoList]);
        }}
      />
    </div>
  );
}

export default App;
