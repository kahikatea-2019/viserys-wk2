const express = require('express')
const router = express.Router()

module.exports = router
const data = {
  profiles: [
    {
      id: 1,
      name: 'Raj',
      image: 'url',
      energy: 'medium',
      specialSkills: [
        'nunchucks',
        'daydreamer'
      ],
      alignment: 'evil',
      backstory: 'very prepared'
    },
    {
      id: 2,
      name: 'Amy',
      image: 'url',
      energy: 'high',
      specialSkills: [
        'cleaning',
        'shadiness',
        'sleeping'
      ],
      alignment: 'evil',
      backstory: 'mysterious'
    }
  ]
}
router.get('/', (req, res) => {
  res.render('add', data)
})

// router.post('/', (req, res) => {
//   console.log(req.body.name)
//   console.log(req.body.energy)
//   // res.render()
//   res.send('Thank you for adding')
// })

router.post('/', (req, res) => {
  let newName = {
    id: data.profiles.length + 1,
    name: req.body.name,
    image: req.body.image,
    energy: req.body.energy
    // specialSkills:req.body.specialSkills,
    // alignment:req.body.alignment,
    // backstory:req.body.backstory
  }
  data.profiles.push(newName)
  res.redirect('/')
  console.log(data.profiles)
})
