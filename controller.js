const path = require('path')

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, './public/index.css'));
    },
    getIndex: (req,res) => {
        res.sendFile(path.join(__dirname, './public/index.js'));
    },
    getRollbar: (req,res) => {
        try {
            nonExistentFunction();
          } catch {
            rollbar.error('This didnt work');
    }
    }
}