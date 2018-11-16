import React, { Component } from 'react';

import Facebook from "./../client/services/sign-in/Facebook";
class SignInScene extends Component {
  state = {  }
  render() { 
    // if(this.props.isLoggedIn){
    //   return(
    //     <Redirect to={"/"}/>
    //   )
    // }
    return ( 
      <form className="sign-in container bg-light" >
        
      
        <Facebook/>

      </form>
     );
  }
}
 
export default SignInScene;