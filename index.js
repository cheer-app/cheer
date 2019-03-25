const app = require('./server/server')

require('dotenv').config()

app.listen(process.env.PORT || 4000, () => {
  console.log('LISTENING')
})
