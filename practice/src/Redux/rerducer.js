// Define an initial state
const initialState = {
    count: 0
  };
  
  // Define a reducer function
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }