import TodoRows from "./ToDoRows";

function ToDoList(props) {
  const toDoListArray = [];
  console.log(props.ds);
  if (props.ds.length === 0) {
    return <p> No items</p>;
  } else {
    props.ds.forEach((element) => {
      toDoListArray.push(
        <TodoRows
          description={element.description}
          deadline={element.deadline}
          key={element.id}
          elementId={element.id}
          taskCompletionStatus={element.taskCompletionStatus}
          changeCheckBox={props.onChangeCheckBox}
          deleteItem={props.onDeleteItem}
        />
      );
    });
  }

  return (
    <div className="toDoList">
      <h1 className="h1">ToDo List</h1>
      <table cellPadding="10%">
        <thead className="tableHead">
          <tr>
            <th>Deacription</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Delete from list</th>
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
