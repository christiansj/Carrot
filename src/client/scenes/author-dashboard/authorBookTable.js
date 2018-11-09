import React from 'react';
import bookRow from "./book-row";

const headers = [
  "Book",  "Status"
]
const authorBookTable = () => (
  <table id="AuthorBookTable">
   
    <tbody>
      {bookRow()}
      {bookRow()}

    </tbody>
  </table>
)

export default authorBookTable;