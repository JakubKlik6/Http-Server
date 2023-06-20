//JavaScript Object Notation
const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    //adds an HTTP header to the response
    //The Content-Type header is used to indicate the format of the data
    res.setHeader("Content-Type" , "application/json")
    res.writeHead(200);
    res.end('{"message": "This is a JSON response"}')
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});