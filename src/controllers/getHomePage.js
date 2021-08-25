const { join } = require('path');
const fs = require('fs');

const getHomePage = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'books.html'));
}

module.exports = getHomePage;