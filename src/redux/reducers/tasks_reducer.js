import * as actionTypes from '../actions'
import data from 'data/tasks.json';

// Define initialState
const initialState = {
    tasks: data
}

// Define the Reducer
export default function tasks_reducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.Edit_Task:
            return {
                ...state,
                tasks: state.tasks.map((task, i) => i === action.index ? action.taskDetails : task)
            }
        
        case actionTypes.Delete_Task:
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, action.index),
                    ...state.tasks.slice(action.index + 1)
                ],
            }
        
        default:
            return state;
    }
};
