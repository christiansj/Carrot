import React, {Component} from "react";
import {Route} from "react-router-dom";
class ContactUs extends Component{
  render(){
    return (
      <section style={{color: "black"}}>
        <h1>Contact Us</h1>
      </section>
    );
  }

} 

const ContactRoute = (
  <Route exact path="/contact-us" component={ContactUs}/>


)
export default ContactRoute;