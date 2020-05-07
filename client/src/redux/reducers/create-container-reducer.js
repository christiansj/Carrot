
export default function(state = 0, action){
  if(action.type !== "SET_DATA_CONTAINER") return state;
  console.log("reducer got" + action.payload);  
  return action.payload;

  

}