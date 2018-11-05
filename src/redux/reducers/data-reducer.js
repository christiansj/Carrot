export default function(dataName = ""){
  return function(state = null, action){
    var {name} = action;
    if(name != dataName) return state;

    if(action.type === "SAVE_DATA"){
      return action.payload;
    }

    return state;
  }
}