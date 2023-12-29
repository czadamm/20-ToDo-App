import React from "react";
import "./Task.css";

const Task = (props) => {
  const importantStyle = { color: "red" };

  const { text, date, id, active, finishDate, important } = props.task;

  const endDate = new Date(finishDate).toLocaleString();

  return (
    <li>
      <strong style={important ? importantStyle : null}>{text}</strong>
      <em> - do {date}</em>
      {active && (
        <button onClick={() => props.changeStatus(id)}>Zrobione</button>
      )}
      <button onClick={() => props.delete(id)}>X</button>
      {active && (
        <button
          style={important ? null : importantStyle}
          onClick={() => props.changeImportance(id)}
        >
          !
        </button>
      )}
      {!active && <em className="complete">Ukończono: {endDate}</em>}
    </li>
  );
};

export default Task;
