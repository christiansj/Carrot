import React from 'react';
import PropTypes from 'prop-types';
const carousel = (props = {}) => {
    const { items, id, isRenderBottomNav, isRenderArrows } = props;
    if (!items.length) {
        return null;
    }

    return (
        <div id={id} className="carousel slide" data-ride="carousel" data-test="carouselComponent">
            {renderBottomButtons(isRenderBottomNav, items, id)}
            <div className="carousel-inner">
                {
                    items.map((item, index) => {
                        var className = "carousel-item ";
                        if (index === 0) {
                            className += "active";
                        }
                        return (
                            <div className={className} data-test="carouselItem" key={`${id}-item-${index}`}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            {renderArrows(isRenderArrows, id)}

        </div>
    )
}

function renderBottomButtons(isRender, items, id) {
    if (isRender) {
        return (
            <ol className="carousel-indicators">
                {
                    items.map((item, index) => {
                        var className = ""
                        if (index === 0) {
                            className = "active"
                        }
                        return (
                            <li data-target={`#${id}`}
                                key={`${id}-button-${index}`}
                                data-slide-to={index.toString()} className={className}
                                data-test="carouselItemButton" />
                        )
                    })
                }
            </ol>
        )
    }
}

function renderArrows(isRender, id) {
    if (isRender) {
        return (
            <span>
                <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </span>
        )
    }
}
carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element),
    isRenderArrows: PropTypes.bool.isRequired,
    isRenderBottomNav: PropTypes.bool.isRequired
}

export default carousel;