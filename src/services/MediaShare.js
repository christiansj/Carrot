import React, {Component} from "react";
import "./service.css";
export default class MediaShare extends Component{
  render(){
    return(
      <article className="row" style={{
        margin: '15px auto'
      }}>
        {SocialMediaReg("blue")}
        {SocialMediaReg("lightblue")}
        <button className="social-media mail"></button>
      </article>
    )
  }
}

const SocialMediaReg = (color) =>(
  <button className="social-media reg" style={{backgroundColor: color}}></button>
);
