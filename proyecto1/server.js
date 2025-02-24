import { createServer } from 'node:http';
import fs from 'node:fs';
import querystring from 'node:querystring';


const server = createServer((req, res) => {
    
    var url = req.url;
    var fileName = "";
    if (url === "/") {
        fileName = "index.html";
    }
    else if (url === "/login") {
        fileName = "login.html";
    }
    else if (url === "/thanks") {
        fileName = "thanks.html";
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
    else if (req.method === 'POST' && req.url === '/login') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Collect chunks
        });

        req.on('end', () => {
            // Format 'username=john_doe&password=secure123'
            console.log('Full request body:', body); // Now we have the full data
            // TO DO: coger los datos del querystring
            var data=querystring.parse(body);
            const dataToAppend = "nombre = " + data.username + " Edad: " + data.edad ;

            // Write data to the file with the append flag
            fs.writeFile('datos.txt', dataToAppend, { flag: 'a' }, (err) => {  //O fs.appendFile('example.txt', dataToAppend, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                } else {
                    console.log('Data appended successfully!');
                }
            });
            res.writeHead(302, { 'Location': '/thanks' });  // redirect
            res.end('Data received!');
        });
    } else {
        res.end('Send a POST request to /login');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000/');
});
// run with `node server.mjs`
