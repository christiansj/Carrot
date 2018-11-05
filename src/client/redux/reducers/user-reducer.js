const defaultUser = {
  isLoggedIn: false,
  userID: null
}

export default function(userName = ""){
  return function(state = defaultUser, action){
    const {name} = action;

    if(name !== userName) return state;

    switch(action.type){
      case "SET_ONLINE_USER":
        return action.payload;
      default:
        return state;
    }
  }
}