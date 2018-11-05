import React, { Component } from "react";
import Book from "./../../services/book";
export default class BookRow extends Component {
  render() {
    return (
      <section className="book-row">
        <span className="row">
          <h3 className="col" style={{ textAlign: "left" }}>{this.props.rowName}</h3>
          <h3 className="col" style={{ float: "right", color: "lightblue", textAlign: "right" }}>
            More >
          </h3>
        </span>
        <hr />
        <span className="row">
          <Book />
          <Book />
        </span>

      </section>
    );
  }
}
