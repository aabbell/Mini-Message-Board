const express = require("express")
const messages = require(".")
const router = express.Router()

router.get('/new',(req,res) => {
    res.render("form")
})

router.post('/new',(req,res)=> {
    const { author , message } = req.body

    messages.push({
        user:author,
        text:message,
        added:new Date()
    })
    res.redirect("/")
})
module.exports = router