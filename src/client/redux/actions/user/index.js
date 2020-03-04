import {userConstants} from "client/constants";

export const setOnlineUser = (userJSON) => {
    return{
      name: "onlineUser",
      type: userConstants.SET_ONLINE_USER,
      payload: userJSON
    }
  }

export const clearOnlineUser = () => {
    return{
        name: "onlineUser",
        type: userConstants.CLEAR_ONLINE_USER
    }
}