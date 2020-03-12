import React, { Component } from 'react';
import "./chapter-view.css";
import themeButton from "./components/font-button/theme-button";
import ChapterNav from "./components/nav/chapter-view-nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont } from '@fortawesome/free-solid-svg-icons';
import RowDropDown from 'client/components/forms/dropdown/row-drop-down';
import {FONT_SIZE_RANGE, THEME_BUTTONS} from './constants/index';
import ApiService from 'client/services/Api';


/**
 * 
 */
class ChapterViewScene extends Component {
  state = { chapterTitle: "", chapterContent: "", prevChapter: "" }

  getChapterContents(bookId, chapterNumber) {
    new ApiService().execute("GET", `/chapter/single/${bookId}/${chapterNumber}/`)
      .then(res => this.setState({ chapterContent: res.data }))
  }

  componentWillUnmount() {
    document.body.classList.remove("dark-theme");
    document.body.classList.remove("sepia-theme");
  }

  componentDidMount() {
    const { chapterString } = this.props.match.params;
    this.parseURL();
    this.setState({ prevChapter: chapterString })
  }

  componentDidUpdate() {
    const {chapterString} = this.props.match.params;
    if (this.state.prevChapter !== chapterString) {
      this.setState({ prevChapter: chapterString });
      this.parseURL();
      this.forceUpdate();
    }
  }

  parseURL() {
    const { chapterString, bookString } = this.props.match.params;
    const bookTokens = bookString.split("-");
    this.setState({ chapterTitle: chapterString.split("-")[1] });
    this.getChapterContents(bookTokens[0], chapterString.split("-")[0])
  }

  render() {
    const { chapterString, bookString } = this.props.match.params;
    const bookTokens = bookString.split("-");

    return (
      <div className="chapter-view container" >
        <ChapterNav bookTokens={bookTokens} chapterTokens={chapterString.split("-")} bookTokens={bookTokens} />
        <br />
        <span>
          <h1>{this.state.chapterTitle}</h1>
          {RowDropDown(<FontAwesomeIcon icon={faFont} />, THEME_BUTTONS)}
        </span>

        <hr />

        <p className="chapter-content" id="ChapterContent">
          {this.state.chapterContent}
        </p>
      </div>
    )
  }
}


export default ChapterViewScene;