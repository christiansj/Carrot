export default function(state = "200", action){
  if(action.type !== "SET_HTTP_CODE") return state;

  return action.payload;
}