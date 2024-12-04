const http = require('http')



const server = http.createServer((req, res) => {


  if(req.url === '/'){
    res.writeHead(200, {"content-type" : "text/plain; charset=utf8"})
    res.end('안녕하세요')
  }

  
})

server.listen(8080, () => {
  console.log('서버 동작: http://localhost:8080/test')
})