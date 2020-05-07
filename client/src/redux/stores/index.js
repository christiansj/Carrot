import {createStore} from 'redux';
import allReducers from '../reducers';

const saveState = state => {
  try {
    // Convert the state to a JSON string
    const serialisedState = JSON.stringify(state);

    // Save the serialised state to localStorage 
    window.localStorage.setItem("app_state", serialisedState);
  } catch (err) {
    console.log(err);
  }
};

const defaultState = {
  onlineUser: {isLoggedIn: false},
  activeRecord: {dataName: "default record"}
}

const loadState = () => {
  try {
    // Load the data saved in localStorage
    const serialisedState = window.localStorage.getItem("app_state");

    if (!serialisedState) return defaultState; //todo

    // De-serialise the saved state, and return it.
    return JSON.parse(serialisedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}



const oldState = loadState();
const store = createStore(allReducers, oldState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;