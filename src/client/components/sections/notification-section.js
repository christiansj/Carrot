import React from 'react';
import notificationCard from "./../../services/notifications/notification-card";
//notifications fade in and out in bottom left
const notificationContainer = (
  <article className="notification-container">
    {notificationCard("card1","Bne is cool", "notification card")}
    {notificationCard("card2","Bne is cool 2", "notification card")}
    {notificationCard("card3","Bne is cool 3", "notification card")}
    

  </article>
)
export default notificationContainer;