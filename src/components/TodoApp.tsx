"use client";
import React from "react";
import { tasks } from "../utils";
import TodoList from "./TodoList";
import { TaskType } from "../utils/types";
import styles from './TodoApp.module.css'
import UserInput from "./UserInput";

interface TodoAppProps {
    tasks:TaskType[]
}
const taskKey = 'tasks';
class TodoApp extends React.Component {
    state:Readonly<TodoAppProps>={tasks}
    constructor(props:TodoAppProps){
        super(props);
        // this.updateTask = this.updateTask.bind(this);
    }
    updateTask=()=>{
        const updatedTasks = {tasks:[...this.state.tasks]}
        this.setState(updatedTasks);
        localStorage.setItem(taskKey, JSON.stringify(updatedTasks))
    }
    addTask = (task:string)=>{
      const taskStruc:TaskType = {
        task:task,
        details:'',
        completed:false

      }
      const newState= {tasks:[ ...this.state.tasks, taskStruc]}
      this.setState(newState);
      localStorage.setItem(taskKey, JSON.stringify(newState))
    }
  render(): React.ReactNode {
    return (
      <main className={[styles.container].join('')}>
        <UserInput addTask = {this.addTask} />
        <TodoList tasks={this.state.tasks.filter(task=>!task.completed)} updateTask={this.updateTask} title="In progress"/>
        <TodoList tasks={this.state.tasks.filter(task=>task.completed)} title="completed" updateTask={this.updateTask} />
      </main>
    );
  }
  componentDidMount(): void {
    const tasks1 = localStorage.getItem(taskKey);
    this.setState(tasks1? JSON.parse(tasks1):tasks)
  }
}

export default TodoApp;
