export default function  (state = false, action)  {
  switch(action.type){
    case "SERVER_ON":
      return true;
      break;
    case "SERVER_OFF":
      return false;
      break;
    default:
      return state;
  }
}