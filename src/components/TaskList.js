import React from "react";
import "./TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const tasksActive = props.tasks.filter((task) => task.active);
  const tasksInactive = props.tasks.filter((task) => !task.active);

  if (tasksActive.length >= 2) {
    tasksActive.sort((a, b) => a.text.toUpperCase() > b.text.toUpperCase());
  }

  if (tasksInactive.length >= 2) {
    tasksInactive.sort((a, b) => b.finishDate - a.finishDate);
  }

  const tasksToDo = tasksActive.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      changeStatus={props.changeStatus}
      changeImportance={props.changeImportance}
    />
  ));

  const tasksDone = tasksInactive.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      changeStatus={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h3>Zadania do zrobienia ({tasksToDo.length})</h3>
        <ul className="taskList">{tasksToDo}</ul>
      </div>
      <div className="done">
        <h4>Zadanie ukończone ({tasksDone.length})</h4>
        <ul className="taskList">{tasksDone}</ul>
      </div>
    </>
  );
};

export default TaskList;
