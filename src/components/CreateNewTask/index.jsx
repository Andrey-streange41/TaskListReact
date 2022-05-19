import React, { Component } from "react";
import newTaskInput from "../CreateNewTask/NewTaskInput.module.css";

export default class CreateNewTask extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }
  notifyParrent = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    this.data[name] = value;
    console.log(this.data);
    this.props.send(this.data);
  };

  addToTasksList = () => {
    if (
      String(this.props.taskName) &&
      this.props.tasksListBuffer.find(
        (item) => item === this.props.taskName
      ) === undefined
    ) {
      const tmpBuffer = [
        ...this.props.tasksListBuffer,
        String(this.props.taskName),
      ];
      this.props.notifyForAdd(tmpBuffer);
    }
  };

  render() {
    return (
      <div className={newTaskInput.wrapper}>
        <input
          maxLength={40}
          onChange={this.notifyParrent}
          name="taskName"
          className={newTaskInput.myInput}
          type="text"
          placeholder="Enter a new task"
        />
        <svg
          onClick={this.addToTasksList}
          className={newTaskInput.isAgree}
          viewBox="0 0 24 24"
        >
          <path d="M14.3 21.7C13.6 21.9 12.8 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C13.3 2 14.6 2.3 15.8 2.7L14.2 4.3C13.5 4.1 12.8 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C12.4 20 12.9 20 13.3 19.9C13.5 20.6 13.9 21.2 14.3 21.7M7.9 10.1L6.5 11.5L11 16L21 6L19.6 4.6L11 13.2L7.9 10.1M18 14V17H15V19H18V22H20V19H23V17H20V14H18Z" />
        </svg>
      </div>
    );
  }
}
