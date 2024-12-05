import mainPage from "./get-process.js";
import db from "../sql-lite/sqlite-database.js";

const postSqlResponse = (req, res) => {
  let responseData = {}
  req.on("data", (chunk) => {
    const params = String(chunk).split("&")
    params.forEach(param => {
      const [key, value] = param.split('=')
      if(value !== "") {
        responseData[key] = decodeURIComponent(value.replace(/\+/g, ' ')) // 띄어쓰기 처리를 디코드 전에 처리한다.
      }
    })
    
    // console.log(responseData) // 결과 확인용
  })

  req.on("end", () => {

    const keys = Object.keys(responseData)
    const values = Object.values(responseData)
    const querys = Array(values.length).fill("?")
    console.log(keys.join(","))
    // 자리에 맞춰 키와 값을 넣을 수 있다.
    // name : 첫번째 ?, value : 두번째 ?, bio : 세번째 ?
    const insert = db.prepare(`INSERT INTO data (${keys.join(',')}) VALUES (${querys.join(",")})`)
    // const insert = db.prepare('INSERT INTO data (name, value, bio) VALUES (?, ?, ?)')
    
    // 순서에 맞게 값들을 삽입한다.
    insert.run(values.join(','))
    // insert.run('반가워', 'world', "나도")
    // insert.run('안녕', 'world', "나도") 
    // -> PRIMARY KEY 부분에 같은 값이 들어가면 오류가 생긴다
    
    // 생성된 전체 데이터를 읽어온다.
    const query = db.prepare('SELECT * FROM data ORDER BY name')
    // Execute the prepared statement and log the result set.
    console.log(query.all())
    
  

  mainPage(res)
})
}

export default postSqlResponse