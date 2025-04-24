import { createStore } from 'redux';
// Initial State
const initialState = {
    tasks: [],
    nextId: 1,
};

// Reducer function
function taskReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, {id: state.nextId, text: action.payload}],
          nextId: state.nextId + 1,
        };
        case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        }
      default:
        return state;
    }
  }
  
  // Create actions
  export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: text,
  });

  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });

  // Create the Redux store
  const store = createStore(taskReducer);

  export default store;