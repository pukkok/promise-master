import mainPage from "./get-process.js"
import loadDB from "../database/load-database.js"
import saveDataBase from "../database/save-database.js"

const postResponse = (req, res) => {
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

      loadDB()
      .then(parseData => {
        const updateData = {
          ...parseData, // 원래 들어있던 데이터
          ...responseData // 응답 들어온 데이터로 업데이트
        }
        saveDataBase(updateData)
      })
    

    mainPage(res)
  })
}

export default postResponse