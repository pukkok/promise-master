import mainPage from "./get-process.js"
import fs from 'fs'


const postResponse = (req, res, body) => {
  req.on("data", (chunk) => {
    body += chunk.toString()
  })

  req.on("end", () => {
    console.log(body)
    if(body !== "") {
      fs.writeFile("./storage/minji.txt", body, (err) => {
        if(err) return console.err(err)
        
        console.log('파일이 저장되었습니다.')
      })
    }

    mainPage(res)
  })
}

export default postResponse