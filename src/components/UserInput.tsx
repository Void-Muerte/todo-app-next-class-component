import React, { Component } from 'react'
import { AddTask } from '../utils/types';

interface InputProps{
    addTask:AddTask;
}
export default class UserInput extends Component<InputProps> {
    state:{task:string}
    constructor(props:InputProps){
        super(props);
        this.state ={task : ""}
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            task:e.target.value
        })
    }
  render():React.ReactNode {
    return (
      <form onSubmit={e=>{
        e.preventDefault();
        this.props.addTask(this.state.task);
      }}>
        <input type='text' value={this.state.task} onChange={this.handleChange} />
        <button type='submit'>Add task</button>
      </form>
    )
  }
}
