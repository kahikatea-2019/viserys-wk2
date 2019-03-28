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
router.get('/',(req,res)=>{
  // res.render('add',data)
  res.send('add page')
})
router.post('/',(req,res)=>{
  //res.render()
  res.send('Thank you for adding')
})