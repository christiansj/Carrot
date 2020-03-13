import React from 'react';
import PropTypes from 'prop-types';
const carousel = (props = {}) => {
    const { items, id } = props;
    if (!items.length) {
        return null;
    }

    return (
        <div id={id} className="carousel slide" data-ride="carousel" data-test="carouselComponent">
            <ol className="carousel-indicators">
                {
                    items.map((item, index)=>{
                        var className = ""
                        if(index === 0){
                            className="active"
                        }
                        return(
                            <li data-target={`#${id}`}
                            key={`${id}-button-${index}`}
                            data-slide-to={index.toString()} className={className}
                            data-test="carouselItemButton"/>
                        )
                    })
                }
            </ol>
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
            
            <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next" >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element),
}

export default carousel;