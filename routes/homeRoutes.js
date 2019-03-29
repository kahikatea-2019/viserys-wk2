const express = require('express')
const router = express.Router()
const dataFunctions = require('../dataFunctions')

const dataFilePath = './data.json'

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

router.get('/filter/:property/:value', (req, res) => {
  dataFunctions.readFile(dataFilePath, (contents) => {
    const data = dataFunctions.jsonToJs(contents)
    const filteredArr = data.profiles.filter(profile => profile[req.params.property] === req.params.value)
    if (filteredArr.length === 0) {
      res.render('filter', { message: true })
    } else {
      const filteredData = { profiles: filteredArr }
      res.render('home', filteredData)
    }
  })
})

router.get('/filter', (req, res) => {
  res.render('filter', { message: false })
})
