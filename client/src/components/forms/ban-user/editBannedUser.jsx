import React from 'react';

const editBannedUserForm = (userJSON) => (
  <form>
    <h1>userJSON.userName</h1>
    <input type="textarea" rows={7}>userJSON.reason</input>
    <input type="datetime" defaultValue={userJSON.bannedUntil}></input>
    
  </form>
);