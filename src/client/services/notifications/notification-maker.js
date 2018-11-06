import React from "react";
const notificationButton = (
  <button onClick={() => makeNotification("card1", "sup, man")}>
    Note me, baby.
  </button>
);

export default function makeNotification(id, content) {
  var card = document.getElementById(id);

  card.style.display = "block";
  document.getElementById(id + "Message").innerHTML = content;
  card.style.animation = "fadeIn 5s forwards";
}