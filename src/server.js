import http from 'http'
import fs from 'fs'
import path from 'path'

const PORT = 8080

const mainPage = (res) => {
  const __dirname = path.resolve()

  const getHTML = fs.readFileSync(path.join(__dirname, "/public/index.html"), "utf-8")
  res.writeHead(200, {"content-type" : "text/html"})
  res.write(getHTML)
  res.end()
}

/**
 * 
 * ? 두개의 조건
 * * GET
 * * POST
 * 
 * 이외에도 PUT, DELETE, PATCH 등 이 있다.
 */

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    // TODO : GET은 주소 접속할 때만 쓸꺼야.

    // ? index.html 로부터 입력 두개를 준비해야돼

    if(req.url === "/") {
      // TODO : "/" index.html 페이지를 이야기한다.
      // TODO : index.html 관련한 파일들을 응답해 주기로 한다.

      // * fs 패키지가 필요할 것 같은데?
      // * path 패키지도 필요할 것 같은데?

      mainPage(res)

    }
  }

  let body = ""  

  if(req.method === "POST") {
    // TODO : 사용자의 입력만 받을거야.
    if(req.url === "/minji") {
      // TODO : index.html 에서 <form></form> 사용
      req.on("data", (chunk) => {
        body += chunk.toString()
      })

      req.on("end", () => {
        console.log(body)
        mainPage(res)
      })
    }

    if(req.url === "/minseok") {
      // TODO : index.html 에서 <input> 사용

    }

  }

})
.listen(PORT, () => {
  console.log("서버 주소 :")
  console.log(`http://localhost:${PORT}`)
})