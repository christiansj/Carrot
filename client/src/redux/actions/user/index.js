import { userActionTypes } from "./../../../constants";

export const setOnlineUser = (userJSON) => {
  console.log(userActionTypes);
  return {
    name: "onlineUser",
    type: userActionTypes.SET_ONLINE_USER,
    payload: userJSON
  }
}

export const clearOnlineUser = () => {
  return {
    name: "onlineUser",
    type: userActionTypes.CLEAR_ONLINE_USER
  }
}