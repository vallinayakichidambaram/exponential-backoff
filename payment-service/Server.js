const express = require('express')
const { sendDataToUserService } = require('./send-message')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 sendDataToUserService();
  res.send('Payment Service')
})

app.listen(port, () => {
  console.log(`Payment Service running on http://localhost:${port}/`)
})
