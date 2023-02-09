const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.json({data: `I have received a message from number: ${req.body}`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})