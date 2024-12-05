import http from 'http'
const PORT = 8080

/**
 * 
 * ? 두개의 조건
 * GET
 * POST
 * 
 * 이외에도 PUT, DELETE, PATCH 등 이 있다.
 */

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    // TODO : GET은 주소 접속할 때만 쓸꺼야.
    if(req.url === "/") {
      // TODO : "/" index.html 페이지를 이야기한다.
      // TODO : index.html 관련한 파일들을 응답해 주기로 한다.


    }
  }

  if(req.method === "POST") {
    // TODO : 사용자의 입력만 받을거야.
    if(req.url === "/minji") {
      // TODO : index.html 에서 <form></form> 사용
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