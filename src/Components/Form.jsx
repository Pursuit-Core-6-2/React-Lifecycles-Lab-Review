import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} value={props.todoText} />
    </form>
  )
}

export default Form
