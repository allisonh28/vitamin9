import { createStore } from 'react-redux';

// Initial State
const initialState = {
    tasks: [],
};

// Reducer function
function taskReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      default:
        return state;
    }
  }
  
  // Create the Redux store
  const store = createStore(taskReducer);

  export default store;