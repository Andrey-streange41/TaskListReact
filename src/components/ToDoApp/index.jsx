import React, { Component } from 'react';
import CreateNewTask from '../CreateNewTask';
import toDoStyles from "../ToDoApp/ToDo.module.css";
import Task from '../Task';

export default class ToDoApp extends Component {
  constructor(props){
      super(props);
      this.state = {
        taskName : ' ',
        tasksList : []
      }
  }
    send = (data) =>{
        this.setState((state)=>{return{...state,taskName:{data}}});
    }

    updateBuffer = (data) =>{
       this.setState((state)=>{return{...state, tasksList: data}})
       console.log(this.state.tasksList);
    }

    render() { 
      const formatBuffer = [] 
      const data = this.state.tasksList;
      try {
         if(data.length > 0){
          for (let i = 0; i < data.length; i++) {
            
            formatBuffer.push(
            <Task key={i} content={data[i]}/>
            );
           
          }
      }
      } catch (error) {
        console.log(error)
      }
     console.log(this.state.tasksList)
    return (
        <section className={toDoStyles.toDoBack} >
            <h1>To-Do List</h1>
            <CreateNewTask tasksListBuffer={this.state.tasksList} taskName={this.state.taskName} notifyForAdd={this.updateBuffer} send ={this.send}/>
           {formatBuffer}
        </section>
    )
  }
  
}
