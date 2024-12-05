import mainPage from "./get-process.js"
import loadDB from "../database/load-database.js"
import saveDataBase from "../database/save-database.js"

const postResponse = (req, res) => {
  let body = ""

  req.on("data", (chunk) => {
    body += decodeURIComponent(String(chunk).replace('+', ' ').trim())
    
  })

  req.on("end", () => {
    if(body !== "") {
      const [key, value] = body.split('=')

      loadDB()
      .then(parseData => {
        const updateData = {
          ...parseData,
          [key] : value
        }
        saveDataBase(updateData)
      })
    }

    mainPage(res)
  })
}

export default postResponse