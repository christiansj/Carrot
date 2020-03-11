import React, { Component } from "react";
import chapterTable from './chapterTable';

/**
 * TODO
 * Certain chapters will be free to guests.
 * Free tags and token amount tags should 
 * be created
 */
export default class ChapterList extends Component {
  state = { chapters: [] }
  componentDidMount() {
    fetch(`/chapter/getChapterTitles/${this.props.bookId}`)
      .then(data => data.json())
      .then(chapters => { this.setState({ chapters }) });
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