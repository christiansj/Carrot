import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { authorNames, bookDetailButtons } from './../index';
import { parseBookUrl } from './../../functions';
import { isEmpty } from './../../../../util';
import ApiService from './../../../../services/Api';
import { bookTitle, bookDescription} from './components'
import { toggleEditFields } from './functions';


class BookDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false,
            editTitle: '',
            editDescription: ''
        };
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
        const { editTitle, editDescription } = this.state;

        const data = {
            bookId,
            title: editTitle,
            description: editDescription
        }

        new ApiService().execute('PUT', `book/details/${bookId}`, data)
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
        if (!isEmpty(book) && this.state.editTitle === "") {
            const { title, description } = book;
            this.setState({ editTitle: title, editDescription: description })
        }
    }


    render() {
        const { book, userIsAuthor, authors, location } = this.props;
        
        const { bookId } = parseBookUrl(location);
        const { editTitle, editDescription } = this.state;

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

        const descriptionConfig = {
            description: book.description,
            editDescription,
            emitChange: this.handleInputChange,
            userIsAuthor
        }

        const titleConfig = {
            title: book.title,
            editTitle,
            emitChange: this.handleInputChange,
            userIsAuthor
        }

        return (
            <span data-test="bookDetails">
              
                {bookTitle(titleConfig)}

                {authorNames(authorNamesConfig)}
                {bookDetailButtons(bookButtonsConfig)}

                <br /><br />
                
                {bookDescription(descriptionConfig)}
                <br />
            </span>
        )
    }
}

BookDetails.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,

    userIsAuthor: PropTypes.bool.isRequired,
    authors: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    })),

    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired    
}

export default BookDetails;