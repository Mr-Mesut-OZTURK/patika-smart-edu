const express = require('express')


const app = express()

app.get("/", (req, res) => {

    res.send()
})


app.listen(3000, (res) => {
    console.log("app started port 3000")
})