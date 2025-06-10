const express = require("express")
const app = express()
const path = require("node:path")
const messages = require("./routes/index")
const newMessage = require("./routes/new")

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))



app.get("/" ,(req ,res) => {
    res.render("index" ,{title: "Mini Messagboard", messages:messages})
})
app.use("/",newMessage)

app.get('/messages/:id/text/open',(req,res) => {
    const message = messages[req.params.id]

    res.redirect({message})
})

app.post('/messages/:id/text/open',(req,res) =>{
    const message = messages[req.params.id]

    res.send(message.text)
})


const PORT = 4444

app.listen(PORT ,() => {
    console.log(`the port ${PORT} is live`)
})