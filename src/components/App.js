import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać na kompie!!",
        date: "2024-02-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zjeść obiadek",
        date: "2023-12-24",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "iść spać wieczorem",
        date: "2023-12-25",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "iść do pracy",
        date: "2023-12-29",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log(`delete id ${id}`);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);

    tasks.splice(index, 1);

    this.setState({ tasks });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({ tasks });
  };

  changeImportance = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.important = !task.important;
      }
    });

    this.setState({ tasks });
  };

  addTask = (text, important, date) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          changeStatus={this.changeTaskStatus}
          changeImportance={this.changeImportance}
        />
      </div>
    );
  }
}

export default App;
