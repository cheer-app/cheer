const app = require('./server/server')

require('dotenv').config()

app.listen(4000, () => {
  console.log('LISTENING')
})
