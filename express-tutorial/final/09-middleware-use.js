const express = require('express')
const app = express()
const logger = require('../logger')
const authorise = require('../authorise')
//  req => middleware => res

app.use([logger, authorise])
// all middleware must always be passed at the top of the document before using any method to make it work
// we can also apply middleware to limited path using app.use e.g: app.use('/api', logger) make the logger middleware only available to items and product
// we also have express built in middleware e.g app.use(express.static('./public'))
// we also have third party middleware we will have to install them e.g morgan





app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
