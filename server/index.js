const express = require("express")
const app = express()
const cors = require("cors")
const port = 80

app.use(cors())
app.use(express.json())

app.post("/javascript", (req, res) => {
  console.log(req.body)
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
