import {userConstants} from 'client/constants'; 

export default function(reducerName = ""){
  return function(state = {}, action){
    const {name} = action;

    if(name !== reducerName) return state;

    switch(action.type){
      case userConstants.SET_ONLINE_USER:
        return action.payload;
      case userConstants.CLEAR_ONLINE_USER:
        return {};
      default:
        return state;
    }
  }
}