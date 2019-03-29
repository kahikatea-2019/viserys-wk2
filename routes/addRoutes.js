const express = require('express')
const router = express.Router()
const dataFunctions = require('../dataFunctions')

const dataFilePath = './data.json'

module.exports = router

router.get('/', (req, res) => {
  res.render('add')
})

router.post('/', (req, res) => {
  dataFunctions.readFile(dataFilePath, (contents) => {
    const data = dataFunctions.jsonToJs(contents)

    // add new profile
    let newProfile = {
      id: data.profiles.length + 1,
      name: req.body.name,
      image: req.body.image,
      energy: {
        value: req.body.energy,
        high: req.body.energy === 'high',
        medium: req.body.energy === 'medium',
        low: req.body.energy === 'low'
      },

      specialSkills: req.body.specialSkill,
      alignment: req.body.alignment,
      backstory: req.body.backstory
    }
    data.profiles.push(newProfile)
    const newContents = dataFunctions.jsToJson(data)

    dataFunctions.writeFile(newContents, dataFilePath, () => {
      res.redirect('/')
    })
  })
})
