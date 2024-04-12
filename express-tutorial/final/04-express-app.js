const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
// the express.static handles all static file in the the folder provided if we want to do something dynsmic we have to involve the template strings
app.use(express.static('../navbar-app'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
