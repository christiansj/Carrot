import React from 'react';

const renderPNG = (pngCheck, bookJSON, e) => {
    if (pngCheck) return;
    const { bookId, folderHash } = bookJSON;
    e.target.src = `http://localhost:8080/static/uploads/books/${folderHash}/${bookId}/0.png`;
}

const bookCover = (props = {}) => {
    const { book, height, width, className } = props;
    const { bookId, title, folderHash } = book;
    var pngCheck = false;

    const imagePath = `http://localhost:8080/static/uploads/books/${folderHash}/${bookId}/0.jpg`;

    return (
        <a href={`/book/${bookId}-${title}`}>
            <img src={imagePath} height={height} width={width} alt={title}
                className={className + " book-cover"}
                onError={(e) => {
                    renderPNG(pngCheck, book, e);
                    pngCheck = true;
                }}
            />
        </a>

    )
}
export default bookCover;