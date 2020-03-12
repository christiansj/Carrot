import React, { Component } from "react";
import chapterTable from './chapterTable';
import APIService from 'client/services/Api';
/**
 * TODO
 * Certain chapters will be free to guests.
 * Free tags and token amount tags should 
 * be created
 */
export default class ChapterList extends Component {
  state = { chapters: [] }
  componentDidMount() {
    new APIService().execute("GET", `/chapter/titles/${this.props.bookId}`)
      .then(res => { this.setState({ chapters: res.data }) });
    this.forceUpdate();
  }

  render() {
    const { chapters } = this.state;
    if (chapters.length === 0) {
      return (
        <div>
          <h2>Well, this is awkward...</h2>
          <p>This book has no chapters.</p>
        </div>
      );
    }

    const { bookId } = this.props;
    const { bookTitle } = this.props;
    return chapterTable(bookId, bookTitle, chapters);
  }
}