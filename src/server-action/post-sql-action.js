import mainPage from "./get-process.js";
import db from "../sql-lite/sqlite-database.js";

const postSqlResponse = (req, res) => {
  let responseData = {}
  req.on("data", (chunk) => {
    // * params를 & 기준으로 나눈다.
    // ? id={inputId}&bio={inputBio}&level={selectedLevel}
    const params = String(chunk).split("&")
    params.forEach(param => {
      // * 전달 받은 데이터를 "=" 기준으로 키와 값으로 나눈다.
      const [key, value] = param.split('=')

      if(value !== "") {
        // * 띄어쓰기 처리를 디코드 전에 처리한다.
        responseData[key] = decodeURIComponent(value.replace(/\+/g, ' ')) 
      }
    })
    
    // console.log(responseData) // 결과 확인용
  })

  req.on("end", () => {

    const keys = Object.keys(responseData)
    const values = Object.values(responseData).map(String)
    const querys = Array(values.length).fill("?")
    
    // TODO : 자리에 맞춰 키와 값을 넣을 수 있다.
    // * name : 첫번째 ?, value : 두번째 ?, bio : 세번째 ?
    const insert = db.prepare(`INSERT INTO data (${keys.join(',')}) VALUES (${querys.join(",")})`)
    
    // TODO : 순서에 맞게 값들을 삽입한다.
    // ? -> PRIMARY KEY 부분에 같은 값이 들어가면 오류가 생긴다
    // * 현재는 id를 primary key로 잡아놨다.
    insert.run(...values)
    
    // TODO : 생성된 전체 데이터를 읽어온다.
    // * id에 따라 정렬한다.
    const query = db.prepare('SELECT * FROM data ORDER BY id')
    console.log(query.all())

    mainPage(res)
})
}

export default postSqlResponse