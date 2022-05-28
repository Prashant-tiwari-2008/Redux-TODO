import { combineReducers } from 'redux'

const INITIAL_STATE = {
    taskList: [],
    selectedTask: undefined,
    completedTasks: [],
    inCompleteTasks: [],
}


/**
 * getting the list of task and 
 * based on action type
 * adding task
 * deletion task
 * updating task
 * @param {list of task} taskLits 
 * @param {action on task} action 
 * @returns the updated taskList
 */

const taskReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'CREATE_TASK') {
        return {
            ...state,
            taskList: [...state.taskList, action.Payload],
            inCompleteTasks: [...state.inCompleteTasks, action.Payload]

        }
    } else if (action.type === 'SELECT_TASK') {
        console.log("SELECTED TASK", action)
        return {
            ...state,
            selectedTask: action.Payload

        }

    } else if (action.type === 'DELETE_TASK') {
        return {
            ...state,
            taskList: state.taskList.filter(task => task.id !== action.Payload),
            completedTasks: state.completedTasks.filter(task => task.id !== action.Payload),
            inCompleteTasks: state.inCompleteTasks.filter(task => task.id !== action.Payload),
        }
    } else if (action.type === 'UPDATE_TASK') {
         return {
             ...state, 
             taskList: state.taskList.map(task => {
                 if(task.id === action.Payload.id) {
                    task = action.Payload
                 }
                 return task
             }),
             selectedTask: undefined
         }
    }
    return state;
}


export default combineReducers({
    todos: taskReducer,
}
)