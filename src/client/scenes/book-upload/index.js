import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreCheckboxScroll from './genre-scroll';
import axios from 'axios';
import {getCheckedNames} from './functions';
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
            cover: null,
            genres: [],
            authorId: this.props.onlineUser.userId
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        console.log('formulating')
        var data = new FormData();
        const {title, description, ISBN} = this.state.requestBody;
        console.log(title)
        data.set("title", title);
        data.set("description", description);
        data.set("ISBN", parseInt(ISBN));
        data.set("authorId", this.props.onlineUser.userId);
        data.set("genreNames", this.state.genres);
        for(var key of data.entries()){
            console.log(key[1])
        }
        axios({
            method: "post",
            url: 'http://localhost:8080/book/upload',
            data: data,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
        
        .then(res=>console.log(res))
        .catch(err=>console.error(err.response.data))
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

    handleCheckBox(){
        const genres = getCheckedNames();
        this.setState({genres})
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
                    {renderFields(renderFieldsProps)}
                    <GenreCheckboxScroll {...genreCheckProps}/>
                    <button className="btn btn-primary" onClick={()=>this.handleSubmit()}>
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