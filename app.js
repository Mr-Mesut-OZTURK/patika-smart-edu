const express = require('express')
const ejs = require('ejs')

const app = express()



// --------------------------------------------------------
// ------------------- temlate engine ---------------------
app.set('view engine', 'ejs')


// --------------------------------------------------------
// ---------------------- middlewares ---------------------
app.use(express.static('public'))




// --------------------------------------------------------
// ---------------------- routes ---------------------
app.get("/", (req, res) => {

    res.send()
})


app.listen(3000, (res) => {
    console.log("app started port 3000")
})