// const { json } = require('express')
const express = require('express')
const router = express.Router()
const fs = require('fs')

const videoList = JSON.parse(fs.readFileSync(`data/VideoDetails.json`))

router.get('/', (req, res) => {
    res.json({videoList})
})
router.get('/:id', (req, res) => {
    vidDetail = videoList.filter((curr) => curr.id === `${req.params.id}`) 
    res.json(videoList[0])
})

module.exports = router