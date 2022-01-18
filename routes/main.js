const express = require('express')
const router = express.Router()

const users = []

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: "Main page"
    })
})

router.post('/', (req, res, next) => {

    users.push({
        firstname: req.body.firstname
    })
    res.redirect('/users')
})

exports.routes = router
exports.users = users
