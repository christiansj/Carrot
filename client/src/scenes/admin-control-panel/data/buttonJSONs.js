import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,  faDatabase, faUser } from "@fortawesome/free-solid-svg-icons";

var buttonJSONs = [
  {
    buttonText: "Database",
    icon: <FontAwesomeIcon icon={faDatabase} className="fa-3x"/>,
    url: "/admin-dashboard/database"
  },
  {
    buttonText: "Users",
    icon: <FontAwesomeIcon icon={faUser} className="fa-3x"/>,
    url: "/userlist/"
  },
  {
    buttonText: "Featured Books",
    icon: <FontAwesomeIcon icon={faBook} className="fa-3x"/>,
    url: "/featuredBooks/"
  }
  // {
  //   buttonText: "Statistics",
  //   icon: <FontAwesomeIcon icon={faChartLine} className="fa-3x"/>,
  //   url: "#"
  // },
  // {
  //   buttonText: "Server",
  //   icon: <FontAwesomeIcon icon={faServer} className="fa-3x"/>,
  //   url: "#"
  // },
  // {
  //   buttonText: "Earnings",
  //   icon: <FontAwesomeIcon icon={faDollarSign} className="fa-3x"/>,
  //   url: "#"
  // },
  // {
  //   buttonText: "Settings",
  //   icon: <FontAwesomeIcon icon={faCogs} className="fa-3x"/>,
  //   url: "#"
  // },
 
];


export default buttonJSONs;