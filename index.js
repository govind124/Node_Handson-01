
const http = require("http");
const server = http.createServer(function (req, res) {
    res.write("Server Creation \n");
    res.write("<h1>Server Creation</h1> \n");
    res.write(JSON.stringify({ Name: "Pushpendra Singh" }))
    res.end();
})
server.listen(3000)
