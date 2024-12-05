import fs from 'fs'
import path from 'path'

const mainPage = (res) => {
  const __dirname = path.resolve()

  const getHTML = fs.readFileSync(path.join(__dirname, "/public/index.html"), "utf-8")
  res.writeHead(200, {"content-type" : "text/html"})
  res.write(getHTML)
  res.end()
}

export default mainPage