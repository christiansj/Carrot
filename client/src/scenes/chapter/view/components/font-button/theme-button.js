import React from 'react';


function changeTheme(themeClassName){
  document.body.classList.remove("dark-theme");
  document.body.classList.remove("sepia-theme");
  document.body.classList.toggle(themeClassName);
}

const themeButton = (themeText, themeClassName) => (
  <button className={`theme-button btn ${themeClassName}`} onClick={()=>changeTheme(themeClassName)}>
    {themeText}
  </button>
)

export default themeButton;