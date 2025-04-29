const express = require("express")
const app = express()
const path = require("node:path")
const messages = require("./routes/index")
app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/" ,(req ,res) => {
    res.render("index" ,{title: "Mini Messagboard", messages:messages})
})

const PORT = 4444

app.listen(PORT ,() => {
    console.log(`the port ${PORT} is live`)
})