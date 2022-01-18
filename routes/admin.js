const express = require('express')
const router = express.Router()

const mainRoutes = require('./main')

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: "All users",
        users: mainRoutes.users
    })
})

module.exports = router