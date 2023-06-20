//HTML, HyperText Markup Language from file
const http = require("http");
//This module contains a readFile() function
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    //load the file
    //variable __dirname has the absolute path of where the Node.js code is being run
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    //handle case when we get an error
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});