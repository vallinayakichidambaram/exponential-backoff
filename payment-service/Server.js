const express = require('express')
const { sendDataToUserService } = require('./send-message')
const { retryWithExponentialBackoff } = require('./exponential-backoff')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  try {
    retryWithExponentialBackoff();
    res.send('Payment Service')
    
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Payment Service running on http://localhost:${port}/`)
})
