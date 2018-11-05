import React from "react";
/**
 * 
 * @param {String array} chapters 
 */


 /**
  * TODO
  * Certain chapters will be free to guests.
  * Free tags and token amount tags should 
  * be created
  */
export default function ChapterList(chapters) {
  return (
    <table class="table chapters">
      <thead className="thead-dark">
        <tr>
        
          <th scope="col">Chapter</th>
          <th scope="col">Last Updated</th>
        </tr>


      </thead>
      <tbody>
        {chapters.map((chap, index) => { return <tr key={chap + index} scope="col">
       
        <td>Chapter {index}: {chap}</td>
        <td>2 Hours Later...</td>
        </tr> }
        )}
      </tbody>


    </table>
  )
}