const express = require('express')
const router = express.Router()

//All Authors Route
router.get('/', (req,res) => {
    res.render('index')
})

module.exports = router