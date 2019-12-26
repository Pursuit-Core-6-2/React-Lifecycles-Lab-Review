import React, { Component } from "react";
import { toast } from 'react-toastify';

class TodoItem extends Component {
  componentDidMount() {
    console.log('todo mounted', this.props.text)
    toast.success('Todo Created: ' + this.props.text)
  }

  componentWillUnmount() {
    console.log('todo will unmount', this.props.text)
    toast.error('Todo Deleted: ' + this.props.text)
  }

  handleDeleteClick = (e) => {
    const { id, handleDeleteTodo } = this.props
    const todoId = id;
    handleDeleteTodo(todoId)
  }

  render() {
    const { text } = this.props
    return (
      <li>
        {text}
        <button onClick={this.handleDeleteClick}> Delete </button>
      </li>
    )
  }
}

export default TodoItem;
