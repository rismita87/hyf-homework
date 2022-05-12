function todoRows(props) {
  if (props.taskCompletionStatus === "true") {
    console.log(props.description);
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
        <td>
          <button
            value={props.elementId}
            onClick={(e) => props.updateItem(e.target.value)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td id={props.elementId + "description"}>{props.description}</td>
        <td id={props.elementId + "deadline"}>{props.deadline}</td>
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
        <td>
          <button
            id={props.elementId + "button"}
            onClick={() => props.updateItem(props.elementId)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default todoRows;
