const env = require('dotenv')
env.config()

const config = {
  BASE_URL : process.env.BASE_URL,
  SECRET_KEY : process.env.SECRET_KEY
}

module.exports = config