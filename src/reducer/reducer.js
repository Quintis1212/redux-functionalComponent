import { createStore } from 'redux';

function mainReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'INITIAL':
        return state
      default:
        return state
    }
  }


  const store = createStore(mainReducer)

  store.dispatch({type:'INITIAL'})
  console.log(store.getState())


  export default store