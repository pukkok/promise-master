import http from 'http'

import mainPage from './server-action/get-process.js'
import postResponse from './server-action/post-process.js'

const PORT = 8080

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    if(req.url === "/") {
      mainPage(res)
    }
  }

  if(req.method === "POST") {
    if(req.url === "/minji") {
      postResponse(req, res)
    }

    if(req.url === "/minseok") {
      postResponse(req, res)
    }
  }

})
.listen(PORT, () => {
  console.log("서버 주소 :")
  console.log(`http://localhost:${PORT}`)
})