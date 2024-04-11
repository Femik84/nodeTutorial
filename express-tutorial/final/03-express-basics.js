// express is a minimal and flexible nide js web app framework
// it is design to make developing web app and api much faster and easier
// express is not a built-in-module it has to be installed
//we have tried node.js withouth express now, lets try node.js with the express and see the difference



const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})


// methods to be used in express
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use  this is responsible for middleware
// app.listen
