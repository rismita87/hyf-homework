function AddToDo(props) {
  return (
    <div className="addNewToDo">
      <b>new todo</b>
      <input type="text" id="task" />
      <b>deadline</b>
      <input type="date" id="time" />
      <button
        onClick={(e) =>
          props.onAddTodoList(
            document.getElementById("task"),
            document.getElementById("time")
          )
        }
      >
        Add todo
      </button>
    </div>
  );
}

export default AddToDo;
