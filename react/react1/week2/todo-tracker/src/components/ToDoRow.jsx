function ToDoRow(props) {
  if (props.taskCompletionStatus === true) {
    return (
      <tr>
        <td>
          <s>{props.description}</s>
        </td>
        <td>
          <s>{props.deadline}</s>
        </td>
        <td>
          <input
            type="checkbox"
            value={props.elementId}
            onChange={(e) => props.changeCheckBox(e.target.value)}
          />
        </td>
        <td>
          <button>delete..</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{props.description}</td>
        <td>{props.deadline}</td>
        <td>
          <input
            type="checkbox"
            value={props.elementId}
            onChange={(e) => props.changeCheckBox(e.target.value)}
          />
        </td>
        <td>
          <button onClick={() => props.deleteItem(props.elementId)}>
            delete..
          </button>
        </td>
      </tr>
    );
  }
}

export default ToDoRow;
