// server.mjs
import { createServer } from 'node:http';
import fs from "node:fs";
import querystring from "node:querystring";
const server = createServer((req, res) => {
    var url = req.url;
    var fileName = "";
    url=url.substring(1);
    var body ="";
    if (url === '') {
       fileName="index.html";}
    else if (url === 'login') {
        if(req.method=="POST"){
            req.on('data', chunk =>{
                body+=chunk.toString();
            });
            req.on('end', () => {
            // var datos=  querystring(body);
           
                //res.end();
                //redireccionamos
                fileName="thanks.html";
                res.end();
            });
        }else{
        fileName = "login.html";
        }
    }else if (url === 'thanks'){
        fileName="thanks.html";
    }
    
    else {
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
        return;
    }
    fs.readFile(fileName, "utf-8", (err, data) => {
    
    if (err) {
        res.statusCode = 500;
        res.write('Internal Server Error');
        res.end();
    }else{
        res.write(data.toString());
        res.end();};
         });
});
// starts a simple http server locally on port 3000
server.listen(3001, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3001');
});

// run with `node server.mjs`
