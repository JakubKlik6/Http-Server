//Comma Separated Values (CSV)

const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    //Content-Type indicates that a CSV file is being returned as the value is text/csv
    res.setHeader("Content-Type", "text/csv");
    //This header tells the browser how to display the data, particularly in the browser or as a separate file
    res.setHeader("Content-Disposition", "attachment;filename=Jakub_Klik.csv");
    res.writeHead(200);
    // a valid CSV
    res.end(`id,name,email\n1,Jakub Klik,Jakub.klik6@gmail.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});