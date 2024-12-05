const http = require('http')
const config = require('../config.js')

// getRestDeInfo
// getAnniversaryInfo
const getRestInfo = async (year=2025, month=10) => {
  const query = `&solYear=${year}&numOfRows=30`
  const url = `${config.BASE_URL}/getRestDeInfo?_type=json${query}&ServiceKey=${config.SECRET_KEY}`
  const result =  await fetch(url, {
      method : 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }
  )
  return await result.json()
}

const server = http.createServer((req, res) => {


  if(req.url === '/'){
    res.writeHead(200, {"content-type" : "text/plain; charset=utf8"})
    res.end('안녕하세요')
  }

  if(req.url === '/rest-info') {
    new Promise((resolve, reject) => {
      resolve(getRestInfo())
    }).then(data => {
      res.writeHead(200, {"Content-Type": "application/json"})
      res.end(JSON.stringify(data))
    })
  }
})

server.listen(8080, () => {
  console.log('서버 동작: http://localhost:8080/rest-info')
})