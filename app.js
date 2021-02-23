const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static('static'))

app.get('/',()=>{
  console.log("alo")
})

app.listen(5000)