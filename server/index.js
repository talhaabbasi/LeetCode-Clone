const fs = require("fs")
const express = require("express")
const cors = require("cors")
const app = express()

const port = 80

app.use(cors())
app.use(express.json())

var dir = "./code"

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

app.post("/javascript", (req, res) => {
  fs.writeFileSync(`${dir}/test.py`, req.body.code)
  console.log(req.body)
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
