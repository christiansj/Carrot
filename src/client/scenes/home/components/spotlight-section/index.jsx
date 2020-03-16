import React, { Component } from 'react';

import SpotlightSlide from './spotlight-slide';
import carousel from '../../../../components/carousel';
import ApiService from 'client/services/Api';

import './../../home.css';

class SpotlightSection extends Component {
    state = {
        books: [],
        slides: [],
        displayIndex: 0
    }

    componentDidMount() {
        new ApiService().execute('GET', 'genre/books/Spotlight')
            .then(res => this.setState({ books: res.data }))
            .then(() => {
                this.setSlides();
            });
    }

    setSlides() {
        const { books } = this.state;
        var slides = [];
        for (var i = 0; i < books.length; i++) {
            slides.push(<SpotlightSlide book={books[i]} />)
        }
        this.setState({ slides: slides });
    }

    render() {
        const { books } = this.state;

        if (!books.length) {
            return null;
        }
        const carouselProps = {
            items: this.state.slides,
            id: 'spotlight-carousel',
            isRenderArrows: false,
            isRenderBottomNav: true
        }

        return carousel(carouselProps)
    }
}

export default SpotlightSection;