
/**
 * creating new task
 * @param {new task} task 
 * @returns 
 */
export const createTask = (task) => {
    return ({
        type: "CREATE_TASK",
        Payload: task
    })
}

/**
 * getting task id and updating status
 * @param {taskId} task 
 * @returns 
 */
export const editTask = (taskId) => {
    return ({
        type: "SELECT_TASK",
        Payload: taskId
    })
}

/**
 * getting task id and deleting task
 * @param {taskId} taskId 
 * @returns 
 */

export const deleteTask = (taskId) => {
    return ({
        type: "DELETE_TASK",
        Payload: taskId
    })
}

/**
 * getting task id and updating status of task
 * @param {taskId} taskId 
 * @returns 
 */

export const updateTask = (task) => {
    return ({
        type: 'UPDATE_TASK',
        Payload: task
    })
}