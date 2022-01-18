const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

// routes data
const mainRoutes = require('./routes/main')
const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({extened: false}))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(mainRoutes.routes)
app.use(adminRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: "Page not found"})
})

app.listen(3001)