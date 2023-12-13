import React from "react";
import { TaskType, UpdateTask } from "../utils/types";
import { TodoListItem } from "./TodoListItem";

interface PropTypes {
    tasks:TaskType[];
    title:string;
    updateTask:UpdateTask;
}
class TodoList extends React.Component<PropTypes> {
    state:Readonly<{renderTitle:boolean}>
    constructor(props:PropTypes){
        super(props);
        this.state={
            renderTitle:true
        }
    }
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <ul style={{listStyleType:'none'}}>
          {this.props.tasks.map((task, index) => (
            <TodoListItem key={task.task + index} task={task} updateTask={this.props.updateTask} />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
