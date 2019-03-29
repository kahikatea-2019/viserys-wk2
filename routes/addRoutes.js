const express = require('express')
const router = express.Router()
const dataFunctions = require('../dataFunctions')

const dataFilePath = '../data.json'

module.exports = router

router.get('/', (req, res) => {
  res.render('add')
})

router.post('/', (req, res) => {
  const newProfile = {}

  dataFunctions.readFile(dataFilePath, (contents) => {
    const data = dataFunctions.jsonToJs(contents)

    // add new profile
    data.profiles.push(newProfile)
    const newContents = dataFunctions.jsToJson(data)

    dataFunctions.writeFile(newContents, dataFilePath, () => {
      res.redirect('/')
    })
  })
})
