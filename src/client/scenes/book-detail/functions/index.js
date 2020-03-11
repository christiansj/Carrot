function parseBookUrl(url){
    const urlTokens = url.pathname.split('/');
    const bookTokens = urlTokens[2].split('-');
    return {
        bookId: parseInt(bookTokens[0]),
        title: bookTokens[1]
    }
}

export {
    parseBookUrl
}