var http = require("http")
var server = http.createServer(function (req,res) {
    res.writeHead(200)

    res.send("Hello World, Le Hoang Dung");
})
server.listen(3000);