import "./reset.css";
import appStyle from "./App.module.css";
import React from "react";
import CreateNewTask from "./components/CreateNewTask";
import Task from "./components/Task";
import toDoStyles from "./ToDo.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      taskName: "",
      tasksList: ["helloo"],
    };
  }

  send = (data) => {
    this.setState((state) => {
      return { ...state, ...data };
    });
  };

  updateBuffer = (data) => {
    this.setState((state) => {
      return { ...state, tasksList: data };
    });
  };



  render() {
    const formatBuffer = [];
    try {
      if (this.state.tasksList.length > 0) {
        for (let i = 0; i < this.state.tasksList.length; i++) {
          formatBuffer.push(<Task  tasksList={this.state.tasksList} updateBuffer={this.updateBuffer} key={i} content={this.state.tasksList[i]} />);
        }
      }
    } catch (error) {
      console.log(error);
    }

    
    return (
      <main className={appStyle.mainApp}>
        <section className={toDoStyles.toDoBack}>
          <h1>To-Do List</h1>
          <CreateNewTask
            tasksListBuffer={this.state.tasksList}
            taskName={String(this.state.taskName)}
            notifyForAdd={this.updateBuffer}
            send={this.send}
          />
          {formatBuffer}
        </section>
      </main>
    );
  }
}

export default App;
