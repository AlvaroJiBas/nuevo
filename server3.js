import { createServer } from 'node:http';
import fs from 'node:fs';
import querystring from 'node:querystring';


const server = createServer((req, res) => {
    let body = '';
    var url = req.url;
    var fileName = "";
     console.log(url);
    if (url === "/") {
        fileName = "math.html";
    }
  

    
    if (req.method === 'GET') {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Not Found');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
    else if (req.method === 'POST' ) {
   

        req.on('data', chunk => {
            body += chunk.toString(); // Collect chunks
        });

        req.on('end', () => {
 
            // TO DO: coger los datos del querystring
            var data=querystring.parse(body);
     
           if (isNaN(data.precun) || isNaN(data.unidades) || isNaN(data.impu)){
            res.write("mal");
            res.end('Data received!');
            }else{
            var precio =parseFloat(data.precun);
             var uni =parseFloat(data.unidades);
             var imp = parseFloat(data.impu);
            var result = precio*uni*imp/100;
            result=precio*uni+result;
            
         }
     

            console.log(result);
          //  res.write(result);
            res.end(result);
        });
    } else {
        res.end('Send a POST request to /login');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000/');
});
// run with `node server.mjs`
