import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { TextInput, TextArea } from "./../../services/forms/exports";
import Moogle from "./../../../images/profile-pics/Moogle.png";
const ProfileView = (userJSON) => (
  <div className="dashboard-profile container">

    <h2 style={{ fontWeight: "bold", color: "rgb(112, 146, 190)", fontFamily: "'Secular One', sans-serif" }}>
      My Profile &nbsp;&nbsp;
      <button className="edit-mode"><FontAwesomeIcon icon={faEdit} /></button>
    </h2>

    <img src={Moogle} alt={userJSON.name} />
    <h2>{userJSON.name}</h2>

    <h3>KupMog</h3>




    <span className="row">
      {TextArea("About Me", 4)}
    </span>


  </div>
)
export default ProfileView;