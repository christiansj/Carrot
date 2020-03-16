import React, {Component} from "react";
import "./../service.css";

/**
 * 
 * @prop {Boolean} isStarred 
 */
class StarButton extends Component{
  state = {starred: false}
 
  componentDidMount(){
    this.setState({starred: this.props.isStarred});
  }
  
  render(){
    return(
      <div className="star-button" style={{backgroundColor: determineBGColor(this.state.starred)}}
      onClick={()=>{this.setState({starred: !this.state.starred});}}/>
    )
  }
}
function determineBGColor(isStarred){
  if(isStarred) return "yellow";
  return "black";
}
export default StarButton;