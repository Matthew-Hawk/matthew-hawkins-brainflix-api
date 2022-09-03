const express = require("express")
const app = express()

// app.get('/', (req, res) =>{
//     res.send('Hello world')
// })

const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`Running on port ${port}....`)
    console.log('To kill API press CTRL + C')
})