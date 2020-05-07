export default function(dataArrayName){
  return function dataArray(state = [], action){
    const {name}= action;
    if(name !== dataArrayName){
      return state;
    }
    if(action.type === "SET_DATA_ARRAY"){
      return action.payload;
    }
      else return state;
  }
}