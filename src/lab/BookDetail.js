import React, { Component } from "react";
import "./book-detail.css";
import WeebHouse from "./../images/book-banners/WeebHouse1.png";
import Weebs from "./../images/book-covers/Weebs.jpg";
import ChapterList from "./../components/lists/chapter-list";
import GenreTag from "./../services/GenreTag";
import BookContainer from "./BookContainer";
const dummyBook = { title: "The Weeb" };

/**
 * 
 */
export default class BookDetail extends Component {
  render() {
    return (
      <div className="book-detail lab">
        <div className="bookInfo"
          style={{
            backgroundImage: "url(" + WeebHouse + ")",
            backgroundSize: "cover", backgroundPosition: "50%"
          }}>

            {BookContainer(Weebs)}

        </div>

        <div className="bookDetail">


          <span className="book-title">The Weeb House</span>
          <br/>
          By Steve the Dweeb
          <br /><br />
          {GenreTag("Romance")}
          {GenreTag("Drama")}
          <br /><br />
          Preface: One mysterious visitor was all it took to turn a normal house
          topsy-turvy. Join Allison and her thirteen sisters as they tackle
          the mayhem that eventually unfolds. Beyond this book's cover, a
          wild adventure awaits.
          <br />
          <strong>SHOW MORE</strong>
          <hr />
          {ChapterList(["A New Visitor", "The Panty Raid", "Allison's Yonderland"])}

        </div>

      </div>
    )
  }
}