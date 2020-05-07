import React, {Component} from 'react';

const followJSON = {
  buttonClass: 'btn btn-primary',
  buttonText: 'Follow'
};
const unfollowJSON = {
  buttonClass: 'btn btn-danger',
  buttonText: 'Unfollow'
};


/**
 * props:
 *    onlineUser {JSON}
 *    otherUser  {JSON}
 */
export default class FollowButton extends Component{
  state = {
    isFollowing: false,
    buttonJSON: followJSON,
    initialized: false
  }
  componentDidUpdate(){
    if(!this.state.initialized){
      this.fetchBool();
    }
  }


  fetchBool = () =>{
    const {onlineUserId, otherUserId} = this.props;

    if(onlineUserId === undefined || otherUserId === undefined || otherUserId === -1){
      return;
    }
    fetch(`/follow/isFollowing/${onlineUserId}/${otherUserId}`)
    .then(data=>data.json())
    .then((isFollowing) =>{ 
      const {resIsFollowing} = isFollowing;
      this.setState({isFollowing: resIsFollowing, initialized: true})
      if(resIsFollowing){
        this.setState({buttonJSON: unfollowJSON});
      }
    });
    
  }

  /**
   * TODO 
   * isFollowing = true
   *    /follow/unFollow/${onlineUserId}/${otherUserId}
   *    DELETE method
   * 
   * isFollowing = false
   *    /follow/newFollower/${onlineUserId}/${otherUserId}
   *    POST method
   */
  handleClick(){
    this.fetchBool();
    alert(this.state.isFollowing);
  }

  render(){
    const {buttonClass, buttonText} = this.state.buttonJSON;

    return(
      <button className={buttonClass} onClick={()=>this.handleClick()}>
        {buttonText}
      </button>
    )
  }
}
FollowButton.defaultProps = {
  onlineUserId: -1,
  otherUserId: -1
}