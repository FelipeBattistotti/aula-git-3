const express = require('express')
const app = express()

const hoteis = require('./hoteis.json')

app.get('/', (req, res) => {
  res.send('<h1>Oi Servidor</h1>')
})

app.get('/user/:name/:age/:city', (req, res) => {
  const name = req.params.name
  const age = req.params.age
  const city = req.params.city
  res.send(`Boa noite, ${name}, idade: ${age}, cidade: ${city}`)
})

app.get('/userNewReq', (req, res) => {
  const name = req.query.name
  const age = req.query.age
  const city = req.query.city
  const state = req.query.state
  res.send(`Boa noite, ${name}, idade: ${age}, cidade: ${city}/${state}`)
})

app.get('/filtro/:type/:value', (req, res) => {
  let value = req.params.value
  let type = req.params.type

  for (let i = 0; i < hoteis.length; i++) {
    if (type == "city" && value == hoteis[i].city) {
      res.send(`<h1> Hotel: ${hoteis[i].name},${hoteis[i].rating}</h1>`)
    }
    else if (type == "rating" && value == rating) {
      res.send(`<h1> Hotel: ${hoteis[i].name}</h1>`)
    }
    else if (type == "price" && value == hoteis[i].price) {
      res.send(`<h1> Hotel: ${hoteis[i].name} <br> R$ ${hoteis[i].price}</h1>`)
    }
    else {
    }
  }
})

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})
