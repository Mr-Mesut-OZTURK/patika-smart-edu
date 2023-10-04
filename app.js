// const ejs = require('ejs')
const express = require('express')
const pageRoute = require('./routes/pageRoute')


const app = express()



// --------------------------------------------------------
// ------------------- temlate engine ---------------------
app.set('view engine', 'ejs')


// --------------------------------------------------------
// ---------------------- middlewares ---------------------
app.use(express.static('public'))


// --------------------------------------------------------
// ------------------------ routes ------------------------
app.use('/', pageRoute)


// --------------------------------------------------------
// ----------------------start app ------------------------
app.listen(3000, (res) => {
    console.log("app started port 3000")
})