const { json } = require('express')
const express = require('express')
const router = express.Router()
const fs = require('fs')

const videoList = JSON.parse(fs.readFileSync(`data/VideoDetails.json`))
//READS json file of the vieo list array
router.get('/', (req, res) => {
    res.json({videoList})
})
//SHOULD bring in the info on a speficified ID
router.get('/:id', (req, res) => {
    videoSpec = videoList.filter((curr) => {
        curr.id === `${req.params.id}`
    })
    res.json(videoSpec[0])
})


module.exports = router