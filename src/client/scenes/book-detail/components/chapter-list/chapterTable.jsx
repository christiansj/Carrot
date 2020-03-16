import React from 'react';

function renderChapterRow(bookId, bookTitle, chapJSON, index) {
  const chapterURL = `/content/${bookId}-${bookTitle}/${chapJSON.number}-${chapJSON.name}`;
  return (
    <tr key={chapJSON + index}>
      <td>
        <a href={chapterURL} >
          {`Chapter ${chapJSON.number}: ${chapJSON.name}`}
        </a>
      </td>
      <td>{chapJSON.lastUpdated}</td>
    </tr >
  );
}

const chapterTable = (bookId, bookTitle, chapters) => (
  <table className="table chapters">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Chapter</th>
        <th scope="col">Last Updated</th>
      </tr>
    </thead>
    <tbody>
      {chapters.map((chap, index) => {
        return (
          renderChapterRow(bookId, bookTitle, chap, index) 

        )
      }
      )}
    </tbody>
  </table>
);
export default chapterTable;