// sending  data
// we send data from our server either with the api or ssr
// but for now we are focusing on the api
// to use the api to send data to frontend we will use send the data in json format using res.json()
// and that is what we will be using in this part of the lesson


// but if we also want to user the ssr(server side rendering) we will be using res.render() to send data to frontend
// but we are using api, re.json() for now.
 
// we can send data using the route parameters or the url parameters.. the two will be taught below

// teaching route parameters below

const express = require('express')
const app = express()
const { products } = require('../data')

app.get('/', (req, res) => {
  res.send('<h1>home page</h1>  <a href="/products">products</a>')
})

app.get('/products', (req, res) => {
  const newProducts = products.map((product)=>{
    const {id, name, image} = product
     return{id, name,image }
  })
  res.json(newProducts)
})

app.get('/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)

  const {productID} = req.params
  const singleProduct = products.find((product)=> product.id === Number(productID))

  if(!singleProduct){
      return res.status(404).send('product not found')
  }

  return res.json(singleProduct)
})


// url parameters or query strings parameter will be done in the next lesson 07-params-query


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
