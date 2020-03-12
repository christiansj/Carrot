import React, { Component } from 'react';
import { Link } from "react-router-dom";
/**
 * TODO refactor this ugly code
 * @param {Array} chapterTokens 
 * @param {Array} bookTokens 
 * @param {Array} chapterTitles 
 */
function forwardButton (chapterTokens, bookTokens, chapterTitles)  {
  const currChapter = chapterTokens[0];
  
  if (currChapter < chapterTitles.length) {
    const nextChapter = parseInt(currChapter)+1;
    const nextChapterName = chapterTitles[currChapter].name;
    return (
      <h5 className="forwardButton">
       <Link to={`/content/${bookTokens[0]}-${bookTokens[1]}/${nextChapter}-${nextChapterName}`}>{nextChapterName} >></Link>
      </h5>
    )
  }
}
/**
 * 
 * @param {Array} chapterTokens 
 * @param {Array} bookTokens 
 * @param {Array} chapterTitles 
 */
function backButton (chapterTokens, bookTokens, chapterTitles) {
  const currChapter = chapterTokens[0];
  if (chapterTokens[0] > 1 && chapterTitles.length > 1) {
    const prevChapterName = chapterTitles[currChapter-2].name;

    return (
      <h5 className="backButton">
        <Link to={`/content/${bookTokens[0]}-${bookTokens[1]}/${chapterTokens[0]-1}-${prevChapterName}/`} > {"<< " + chapterTitles[chapterTokens[0] - 2].name}</Link>
      </h5>
    )
  }
}
/**
 * 
 */
export default class ChapterNav extends Component {
  state = { chapterTitles: [] }
  /**
   * Fetch the chapter titles for the navigation 
   * links.
   */
  componentDidMount() {
    fetch(`/chapter/getChapterTitles/${this.props.bookTokens[0]}`)
      .then(data => data.json())
      .then(chapterTitles => this.setState({ chapterTitles }));
    this.forceUpdate()
  }
  render = () => {
    const { chapterTitles } = this.state;
    const {chapterTokens} = this.props;
    const { bookTokens } = this.props;

    return (
      <div className="chapter-nav row">

        {backButton(chapterTokens[0], bookTokens, chapterTitles)}
        <h3 className="bookTitle">
          <Link to={`/book/${bookTokens[0]}-${bookTokens[1]}`} >{bookTokens[1]}</Link>
        </h3>
        {forwardButton(chapterTokens[0], bookTokens, chapterTitles)}
      </div>
    )
  }
}