import TodoRows from "./ToDoRows";

function ToDoList(props) {
  const toDoListArray = [];
  props.ds.forEach((element) => {
    toDoListArray.push(
      <TodoRows
        description={element.description}
        deadline={element.deadline}
        key={element.id}
      />
    );
  });

  return (
    <div className="toDoList">
      <h1 className="h1">ToDo List</h1>
      <table cellPadding="10%">
        <thead className="tableHead">
          <tr>
            <th>Deacription</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody className="tableBody" key={toDoListArray}>
          {toDoListArray}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
