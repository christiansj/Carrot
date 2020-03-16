export default function  (state = false, action)  {
  switch(action.type){
    case "SERVER_ON":
      return true;
    case "SERVER_OFF":
      return false;
    default:
      return state;
  }
}