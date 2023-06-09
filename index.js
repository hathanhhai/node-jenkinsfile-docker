const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<h1>Hà Thanh Hải</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})