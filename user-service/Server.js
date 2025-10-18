const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('User Service')
})

app.post('/webhook', (req,res) => {
    const userData= req.body
    console.log(userData);
    if(userData) console.log("webhook received!")
    res.send({
        status: 200
    })
})

app.listen(port, () => {
  console.log(`User Service running on http://localhost:${port}/`)
})
