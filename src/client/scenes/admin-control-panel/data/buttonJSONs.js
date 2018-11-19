import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer,  faDatabase, faUser, faDollarSign, faChartLine, faCogs } from "@fortawesome/free-solid-svg-icons";

var buttonJSONs = [
  {
    buttonText: "Database",
    icon: <FontAwesomeIcon icon={faDatabase} className="fa-3x"/>,
    url: "/e/"
  },
  {
    buttonText: "Users",
    icon: <FontAwesomeIcon icon={faUser} className="fa-3x"/>,
    url: "/userlist/"
  },
  {
    buttonText: "Statistics",
    icon: <FontAwesomeIcon icon={faChartLine} className="fa-3x"/>,
    url: "#"
  },
  {
    buttonText: "Server",
    icon: <FontAwesomeIcon icon={faServer} className="fa-3x"/>,
    url: "#"
  },
  {
    buttonText: "Earnings",
    icon: <FontAwesomeIcon icon={faDollarSign} className="fa-3x"/>,
    url: "#"
  },
  {
    buttonText: "Settings",
    icon: <FontAwesomeIcon icon={faCogs} className="fa-3x"/>,
    url: "#"
  },
 
];


export default buttonJSONs;