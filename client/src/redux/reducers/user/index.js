import {userActionTypes} from './../../../constants'; 

export default function(reducerName = ""){
  return function(state = {}, action){
    const {name} = action;

    if(name !== reducerName) return state;

    switch(action.type){
      case userActionTypes.SET_ONLINE_USER:
        return action.payload;
      case userActionTypes.CLEAR_ONLINE_USER:
        return {};
      default:
        return state;
    }
  }
}