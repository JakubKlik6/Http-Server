const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    //sets the HTTP status code of the response
    res.writeHead(200);
    //writes the HTTP response back to the client who requested it
    res.end("My first server!");
};

//creates new server via http module
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});