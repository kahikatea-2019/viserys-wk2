const express = require('express')
const router = express.Router()

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

module.exports = router

router.get('/', (req, res) => {
  res.render('home', data)
})

router.get('/profile/:id', (req, res) => {
  const viewProfile = data.profiles.find(item =>
    Number(req.params.id) === item.id
  )
  res.render('profile', viewProfile)
})
