//IMPORTING ALL PACKAGES
const express = require("express")
const app = express()
const cors = require("cors");
require('dotenv').config()
const {PORT} = process.env

//IMPORTING ROUTES
const videos = require("./routes/VideosList")
app.use(cors())

app.use(express.json())

//ROUTE FOR THE VIDEO LIST
// app.use('/', (req, res) =>{
//     res.send(videos)
// })
app.use('/videos', videos)


app.listen(PORT, () =>{
    console.log(`Running on port ${PORT}....`)
    console.log('To kill API press CTRL + C')
})