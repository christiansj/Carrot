import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authorBookTable from "./authorBookTable";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
const BooksView = () => (
  <div>
    <h2>Your Books</h2>
    <span className="add-book row" style={{ backgroundColor: "#98FB98", padding: "25px", margin: "10px" }}>
      <FontAwesomeIcon icon={faPlus}/>
      Add New Book
    </span>
    {authorBookTable()}
  </div>

)
export default BooksView;