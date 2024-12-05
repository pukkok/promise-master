import mainPage from "./get-process.js"

const postResponse = (req, res, body) => {
  req.on("data", (chunk) => {
    body += chunk.toString()
  })

  req.on("end", () => {
    console.log(body)
    mainPage(res)
  })
}

export default postResponse