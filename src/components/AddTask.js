import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    task: "",
    important: false,
    date: this.minDate,
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;
    const checked = e.target.checked;

    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    const { task, important, date } = this.state;
    const add = this.props.add(task, important, date);
    if (add) {
      this.setState({
        task: "",
        important: false,
        date: this.minDate,
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <form className="AddTask">
        <input
          type="text"
          name="task"
          placeholder="Dodaj zadanie"
          value={this.state.task}
          onChange={this.handleInputChange}
        />
        <label htmlFor="important">
          <input
            type="checkbox"
            name="important"
            checked={this.state.important}
            onChange={this.handleInputChange}
          />
          Priorytet
        </label>
        <br />
        <label className="date" htmlFor="date">
          Termin wykonania
          <input
            type="date"
            name="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleClick}>Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
