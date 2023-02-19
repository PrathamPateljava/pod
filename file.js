const http = require('http');
const fs = require('fs');

function serve404(response){
  response.writeHead(404,{'Content-Type':'text/plain'});
  response.end("Page Not Found");
}
const server = http.createServer(function(req, res) {
  if (req.url === '/download') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="file.txt"');
    fs.createReadStream('./file.txt').pipe(res);
  }


  if(req.url=="/"){
    fs.readFile('./index.html',function(err,data){
      if(!err){
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':data.length})
        res.write(data)
        res.end()
      }
      else{
        console.log(err)
        serve404(res)
      }
    })
  }
  if(req.url=="/about"){
    fs.readFile('./about.html',function(err,data){
      if(!err){
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':data.length})
        res.write(data)
        res.end()
      }
      else{
        serve404(res)
      }
    })
  }

  if(req.url=="/contact"){
    fs.readFile('./contact.html',function(err,data){
      if(!err){
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':data.length})
        res.write(data)
        res.end()
      }
      else{
        serve404(res)
      }
    })
  }

  if(req.url=="/file") {
    fs.readFile('./download.html',function(err,data){
      if(!err){
        res.writeHead(200,{'Content-Type':'text/html','Content-Length':data.length})
        res.write(data)
        res.end()
      }
      else{
        console.log(err)
        serve404(res)
      }
    })
  }
});

server.listen(4500, function() {
  console.log('Server is listening on port http://127.0.0.1:4500/');
});
