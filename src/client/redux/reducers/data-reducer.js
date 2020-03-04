export default function(dataName = ""){
  return function(state = {dataName: "default"}, action){
    var {name} = action;
    if(name !== dataName) return state;

    if(action.type === "SAVE_DATA"){
      return action.payload;
    }

    return state;
  }
}