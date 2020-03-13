import React from 'react';

const carousel = (props = {}) => {
    const { items, handleButtonClick } = props;
    if (!items.length) {
        return null;
    }

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    items.map((item, index)=>{
                        var className = ""
                        if(index === 0){
                            className="active"
                        }
                        return(
                            <li data-target="#carouselExampleIndicators" data-slide-to={index.toString()} className={className}></li>
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
                            <div className={className}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={handleButtonClick}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={handleButtonClick}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default carousel;