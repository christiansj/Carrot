import React, { Component } from "react";
import { connect } from "react-redux";
import FiveStarRating from "./../../services/book-properties/RatingBox";
import GenreTag from "./../../services/book-properties/GenreTag";
import Weeb from "./../../../images/book-covers/Weeb.jpg";
import MediaShare from "./../../services/MediaShare";
import StarButton from "./../../services/book-properties/StarButton";
import ChapterList from "./../../components/lists/chapter-list";
import "./book-detail.css";
class BookDetail extends Component {
  render() {
    const book = this.props.activeBook;
    return (
      <div className="book-detail container">
        <div className="bookCover">
          <img id="BookCoverMed" src={Weeb}/>
          <MediaShare />

          <StarButton isStarred={true}/>
        </div>
       
        {bookInfo(book)}
     
      </div>
    );
  }
}

const bookInfo = (book) => (
  <div className="bookInfo">
    <span className="title">
    {book.title}
    </span>
    <span className="title"style={{float: 'right', fontFamily: "Times New Roman"}}>
      In Progress
      <br/>
      Last Updated: 3 hours ago
    </span>
    <br/>
    by {authorLink(book.firstName, book.lastName)}
    <br /><br/>
    {FiveStarRating(3)}
    <br/>
   
  </div>
)


const authorLink = (firstName, lastName) => (
  <a href="#">
    {firstName + " " + lastName}
  </a>
);
function mapStateToProps(state) {
  return { activeBook: state.activeBook }
}
export default connect(mapStateToProps)(BookDetail);