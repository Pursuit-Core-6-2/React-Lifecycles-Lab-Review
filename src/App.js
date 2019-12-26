import React, { Component } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Components/Form';


import { ToastContainer } from 'react-toastify';
import TodosList from './Components/TodosList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todoText: '',
    }

    this.currentTodoId = 0;
  }

  // Event listener/handlers function
  // Pass through props to form.
  handleChange = (event) => {
    console.log('input value changed', event.target.value)
    this.setState({
      todoText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted')

    const { todos, todoText } = this.state;
    const todosCopy = [...todos]
    todosCopy.push({
      id: this.currentTodoId,
      text: todoText
    })

    // Increase current id keeper
    this.currentTodoId++;

    this.setState({
      todoText: '',
      todos: todosCopy
    })
  }

  handleDeleteTodo = (todoId) => {
    // Use the id of the todo to identify it and remove it(filter it)
    const { todos } = this.state;
    const filteredTodos = todos.filter(todo => todo.id !== todoId)

    this.setState({
      todos: filteredTodos
    })
  }

  render() {
    const { todos, todoText } = this.state;
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todoText={todoText}
        />
        <TodosList
          todos={todos}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
