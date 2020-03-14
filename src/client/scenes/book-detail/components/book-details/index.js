import React, { Component } from 'react';
import { authorNames, bookDetailButtons } from './../index';
import { parseBookUrl } from './../../functions';
import { isEmpty } from 'client/util';
import ApiService from 'client/services/Api';
class BookDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false,
            title: '',
            description: ''
        };
        console.log(this.state.title)
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }


    handleInputChange(event) {
        const { target } = event;

        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    updateBook() {
        const { bookId } = parseBookUrl(this.props.location);
        const { title, description } = this.state;
        new ApiService().execute('PUT', 'book/details', { bookId, title, description })
            .then(window.location.reload())
            .catch(err => console.log(err));
    }

    handleEditButton() {
        this.setState({ isEditMode: !this.state.isEditMode }, () => {
            toggleEditFields(this.state.isEditMode);
        })
    }


    componentDidUpdate() {
        const { book } = this.props;
        if (!isEmpty(book) && this.state.title === "") {
            const { title, description } = book;
            this.setState({ title: book.title, description: description })
        }
    }


    render() {
        const { book, userIsAuthor, authors, location } = this.props;
        const { bookId } = parseBookUrl(location);


        const bookButtonsConfig = {
            bookId,
            title: book.title,
            renderCreateButton: userIsAuthor,
            handleEditButton: this.handleEditButton,
            updateBook: this.updateBook
        }

        const authorNamesConfig = {
            authors
        }

        return (
            <span>
                <span id="book-title" className="book-title">
                    <span className="detail">{book.title}</span>
                    <input type="text" className="detail-input" name="title"
                        onChange={this.handleInputChange} value={this.state.title} />
                </span>


                {authorNames(authorNamesConfig)}
                {bookDetailButtons(bookButtonsConfig)}

                <br /><br />
                <span id="book-description">
                    <span className="detail">Preface: {book.description}</span>
                    <textarea rows={3} value={this.state.description} name="description"
                        onChange={this.handleInputChange} className="detail-input" />
                </span>

                <br />
            </span>

        )
    }
}

function toggleEditFields(isEditMode) {
    var inputDisplay = "inline";
    var display = "none";
    if (!isEditMode) {
        inputDisplay = "none";
        display = "inline";
    }
    var details = document.getElementsByClassName('detail');

    for (var i = 0; i < details.length; i++) {

        details[i].style.display = display;
    }

    var inputs = document.getElementsByClassName('detail-input');
    console.log(inputs.length)
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = inputDisplay;
    }
}
export default BookDetails;