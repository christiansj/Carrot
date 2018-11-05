import React from "react";

function RecordDelete(activeTableIndex, record) {
  return (
    <article>
      <h1>Are you sure you want to delete {record.dataName}?</h1>
      <button className="btn btn-primary" type="submit">Cancel</button>
      <button className="btn btn-danger" type="submit" >Delete</button>

    </article>
  )
}
export default RecordDelete;