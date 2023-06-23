//HTML, HyperText Markup Language from file
const http = require("http");
//This module contains a readFile() function
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
}

const server = http.createServer(requestListener);
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
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
});