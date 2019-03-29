const express = require('express')
const router = express.Router()
const dataFunctions = require('../dataFunctions')

const dataFilePath = '../data.json'

module.exports = router

router.get('/', (req, res) => {

  dataFunctions.readFile(dataFilePath, (contents) => {
    const data = dataFunctions.jsonToJs(contents)
    res.render('home', data)
  })
})

router.get('/profile/:id', (req, res) => {
  dataFunctions.readFile(dataFilePath, (contents) => {
    const data = dataFunctions.jsonToJs(contents)
    const viewProfile = data.profiles.find(item =>
      Number(req.params.id) === item.id
    )
    res.render('profile', viewProfile)
  })
})
