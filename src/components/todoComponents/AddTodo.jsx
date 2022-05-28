import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { createTask, editTask, updateTask } from '../../Action';

const AddTodo = (props) => {
    let Text = useRef(null)

    useEffect(() => {
        if(props.selectedTask) {
            Text.current.value = props.selectedTask.task
        }
    }, [props.selectedTask])

    useEffect(() => {
        Text.current.value = 'Inital'
    }, [])


    const handleTodo = (e) => {
        Text.current.value = e.target.value;
    }

    const handleAdd = async () => {
        const task = {
            id: (props.taskList.length + 1),
            task: Text.current.value,
            status: 'Not Completed'
        }
        await props.addTodo(task)
        Text.current.value  = ''
    }

    const handleUpdate = async() => {
        const task = {
            ...props.selectedTask,
            task: Text.current.value
        }
        await props.updateTodo(task)
        Text.current.value  = '' 
    }

    return (
        <>
            <input type="text" placeholder='Enter Todo'
                className='form-control w-75 d-inline rounded-0' ref={Text}  onChange={(e) => { handleTodo(e) }} />
            {!props.selectedTask && <button className='btn btn-info rounded-0 d-inline' onClick={() => { handleAdd() }}>Add</button>}
            {props.selectedTask && <button className='btn btn-warning rounded-0 d-inline' onClick={() => { handleUpdate() }}>Update</button>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        taskList: state.todos.taskList,
        // selectedTask: state.todos.selectedTask
    }
}

const mapDispatcherToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(createTask(todo)),
        updateTodo: (todo) => dispatch(updateTask(todo))
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(AddTodo)
