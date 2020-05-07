export default function(state = [], action){
  switch(action.type){
    case "PUSH_NOTIFICATION":
      state.push(action.payload)
      return state;
    case "POP_NOTIFICATION":
      return state.pop;
    default:
      return state;
  }
}