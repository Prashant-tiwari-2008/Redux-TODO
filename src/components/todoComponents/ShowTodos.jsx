import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons';
import { deleteTask, updateTask, editTask } from '../../Action';
const ShowTodos = (props) => {

    return (
        <>
            <ul className="list-group mt-4">
                <li>ID -- TASK -- STATUS</li>
                {props.taskList && props.taskList.length !== 0 && props.taskList.map((todo, index) => (
                    <li className='list-group-item' key={index}>{todo.id} - {todo.task} - {todo.status}
                        <Icon.Trash style={{ float: "right", margin: '5px' }}
                            onClick={() => props.deleteTask(index + 1)}
                        />
                        <Icon.Alarm style={{ float: "right", margin: '5px' }}
                            onClick={() => props.selectTask(todo)}
                        />
                        <Icon.Bag style={{ float: "right", margin: '5px' }}
                            onClick={() => props.UpdateTask(index + 1)}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

const mapStateToProps = state => {
    return {
        taskList: state.todos.taskList
    };
};

const mapDispatcherToProps = (dispatch) => {
    return {
        deleteTask: (todoId) => dispatch(deleteTask(todoId)),
        selectTask: (todo) => dispatch(editTask(todo)),
        UpdateTask: (todoId) => dispatch(updateTask(todoId)),
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(ShowTodos);