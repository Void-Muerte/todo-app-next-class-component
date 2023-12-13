import React from "react";
import { TaskType, UpdateTask } from "../utils/types";


interface TaskProp {
  task: TaskType;
  updateTask:UpdateTask;
}
class TodoListItem extends React.Component<TaskProp> {
  render(): React.ReactNode {
    return (
      <li>
        <details className={this.props.task.completed ?"completed":''}>
          <summary >
            {this.props.task.task}
            <input
              type="checkbox"
              name=""
              checked={this.props.task.completed}
              id=""
              onChange={() => {
                this.props.task.completed = !this.props.task.completed;
                this.props.updateTask();
              }}
            />
          </summary>
          <p>{this.props.task.details}</p>
        </details>
      </li>
    );
  }
}

export { TodoListItem };
