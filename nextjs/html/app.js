const http = require('http');
const fs = require('fs');

var server = http.createServer(
    (request,response) =>{
        fs.readFile('./index.html','utf-8',
            (error,data) =>{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data);
                response.end();
            }
        );
    }
);
server.listen(3000);

/*function getFromClient(req,res){
    request = req;
    response = res;
    fs.readFile('./index.html','utf-8',
        (error,data) =>{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
        }
    );
}*/