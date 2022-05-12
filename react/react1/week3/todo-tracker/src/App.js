//here two useState(toDoList) are set because once the search is set the
// fulltodo list gets modified and shorten. Then the other functionalities will be
// effective on the shorten list once the search bar is cleared. So, the second
//useState(toDoList) is used to get the full todolist once the search bar is cleared.
import "./App.css";
import React, { useEffect } from "react";
import ToDoList from "./components/ToDoList";
import Search from "./components/Search";
import AddToDo from "./components/AddToDo";
import WatchCount from "./components/WatchCount";

function App() {
  const [filterToDoList, setFilterToDoList] = React.useState([]);
  const [fullToDoList, setFullToDoList] = React.useState([]);
  const [arrLength, setArrLength] = React.useState();
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setArrLength(data.length);
          data.forEach((e) => (e.taskCompletionStatus = "false"));
          setFilterToDoList(data);
          setFullToDoList(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <WatchCount />

      <Search
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
          const newId = parseInt(fullToDoList.length) + arrLength;
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
      <ToDoList
        ds={filterToDoList}
        onChangeCheckBox={(text) => {
          fullToDoList.forEach((element) => {
            if (parseInt(element.id) === parseInt(text)) {
              element.taskCompletionStatus =
                element.taskCompletionStatus === "true" ? "false" : "true";
            }
          });
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
        onUpdateItem={(text) => {
          if (document.getElementById(text + "button").innerText === "Edit") {
            fullToDoList.forEach((element) => {
              if (parseInt(element.id) === parseInt(text)) {
                document.getElementById(text + "button").innerText = "Upload";
                document.getElementById(element.id + "description").innerHTML =
                  "<input type=text id=" + element.id + "task></input>";
                document.getElementById(element.id + "deadline").innerHTML =
                  "<input type='date' id=" + element.id + "date></input>";
              }
            });
            setFilterToDoList([...fullToDoList]);
            setFullToDoList([...fullToDoList]);
          } else if (
            document.getElementById(text + "button").innerText === "Upload"
          ) {
            fullToDoList.forEach((element) => {
              if (parseInt(element.id) === parseInt(text)) {
                document.getElementById(text + "button").innerText = "Edit";
                element.description = document.getElementById(
                  text + "task"
                ).value;
                element.deadline = document.getElementById(text + "date").value;
              }
            });
            setFilterToDoList([...fullToDoList]);
            setFullToDoList([...fullToDoList]);
          }
        }}
      />
    </div>
  );
}

export default App;
