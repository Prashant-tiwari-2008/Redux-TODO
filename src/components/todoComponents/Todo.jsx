import React from 'react'
import AddTodo from './AddTodo'
import ShowTodo from './ShowTodos'


const Todo = ({ children, ...props }) => {
  return (
    <>
      <h1 className='display-4 text-center mb-3'>{props.listType} - {children}</h1>
      < hr />
      <AddTodo />
      <ShowTodo />
    </>
  )
}

export default Todo;