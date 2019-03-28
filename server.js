const express = require('express')
const hbs = require('express-handlebars')

const server = express()

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

const addRouter = require('./routes/addRoutes')
//const homeRouter = require('./routes/homeRoutes')


server.use(express.urlencoded({ extended: false }))
server.use(express.static('public'))
server.use('/add', addRouter)
//server.use('/', homeRouter)

module.exports = server

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

server.get('/', (req, res) => {
  res.send('Hello world')
})

