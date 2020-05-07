import React from 'react';

const chapterUploadView = (bookId, bookTitle, chapterNumber) => (
  <form method="post"
    action={`http://localhost:8080/chapter/upload/${bookId}/${chapterNumber}`} className="chapter-upload container">
    <a href={`/book/${bookId}-${bookTitle}`} style={{ float: 'left' }}>
      {bookTitle}
    </a>
    
    <span style={{ float: 'right' }}>
      <button className="btn btn-primary" type="submit">Publish</button>
      <button type="button" className="btn btn-secondary">Save Draft</button>
    </span>

    <input type="text" name="chapterTitle" className="upload-text title" placeholder="chapter title" />
    <textarea name="chapterContent" className="upload-text content" rows="20" placeholder="type chapter contents here ..." />
  </form>
);
export default chapterUploadView;