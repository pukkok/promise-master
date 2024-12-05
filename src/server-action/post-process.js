import mainPage from "./get-process.js"
import fs from 'fs'
import readDB from "../database/read-database.js"

const postResponse = (req, res) => {
  let body = ""

  req.on("data", (chunk) => {
    body += decodeURIComponent(String(chunk).replace('+', ' ').trim())
    
  })

  req.on("end", () => {
    if(body !== "") {
      const [key, value] = body.split('=')
      const info = JSON.stringify({[key] : value})

      readDB()
      .then(parseData => {
        console.log(parseData[key])
      })
    }

    mainPage(res)
  })
}

export default postResponse