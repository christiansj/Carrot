import React from 'react';
import "./author-view.css";
const authorDetails = (
  <article className="author-view authorDetails">
    <div className="author-profile-picture" />
    <h1>This is the name</h1>
    <h3>This is teh username</h3>
    <p>This is the description of the authro. the user can read about them in the view</p>
  </article>
);

const sampleBookRow = (
  <div className="row">
    <div className="author-view author-book" />
    <div className="author-view author-book" />
    <div className="author-view author-book" />
    <div className="author-view author-book" />
  </div>
);

const authorBooks = (
  <article className="author-view authorBooks">
    {sampleBookRow}
  </article>
);


const authorView = (
  <div className="author-view container">
    {authorDetails}
    {authorBooks}
  </div>
);

export default authorView;