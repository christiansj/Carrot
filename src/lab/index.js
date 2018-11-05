import React, {Component} from "react";
import BookDetail from "./BookDetail";
import SignInScene from "./sign-in";
import ErrorScene from "./../scenes/errors/ErrorScene";
function testOne(){
  return(
    <div>
      <ErrorScene httpCode="504"/>
    </div>
  )
}
export default class Lab extends Component{
  render(){
    return(
      <div>
       
        {/* <BookDetail/> */}
        <SignInScene/>
      </div>
    )
  }
}