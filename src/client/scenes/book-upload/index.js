import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreCheckboxScroll from './genre-scroll';
import axios from 'axios';
import { getCheckedNames } from './functions';
import bookCoverForm from './imageUploadForm';
import renderFields from 'client/components/forms/functions/renderFields';

class BookUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requestBody: {
                title: '',
                description: '',
                ISBN: 123467
            },
            bookCover: null,
            genres: [],
            authorId: this.props.onlineUser.userId
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.handleImageChange = this.handleImageChange.bind(this);
    }
   
    handleSubmit() {
        const { title, description, ISBN } = this.state.requestBody;
        const body = {
            title, 
            description,
            ISBN: parseInt(ISBN, 10),
            authorId: this.props.onlineUser.userId,
            genreNames: this.state.genres
        }
        
        axios({
            method: "post",
            url: 'http://localhost:8080/book/upload',
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((res) => {
                const bookId = res.data;

                var formData = new FormData();
                formData.append("bookCover", this.state.bookCover);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                axios.post(`http://localhost:8080/upload/book-cover/${bookId}`, formData, config)

            })
            .catch(err => console.error(err.response.data))
    }

    handleInputChange(event) {
        const { target } = event;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            requestBody: {
                ...prevState.requestBody,
                [name]: value
            }
        }));
    }

    handleCheckBox() {
        const genres = getCheckedNames();
        this.setState({ genres })
    }

    handleImageChange(event) {
        this.setState({ bookCover: event.target.files[0] })
    }


    render() {
        const renderFieldsProps = {
            requestBody: this.state.requestBody,
            handleInputChange: this.handleInputChange
        }
        const genreCheckProps = {
            handleCheckbox: this.handleCheckBox
        }
        
        return (
            <div className="jumbotron">
                <div>
                    {JSON.stringify(this.state)}
                    {bookCoverForm(this.handleImageChange)}
                    {renderFields(renderFieldsProps)}
                    <GenreCheckboxScroll {...genreCheckProps} />
                    <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit()}>
                        Upload
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        onlineUser: state.onlineUser
    }
}
export default connect(mapStateToProps)(BookUpload);