const express = require('express');
const app = express();
const path = require('path');
const {User, Product, syncAndSeed} = require("./db/index")

const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/users', (req,res,next) => {
  User.findAll()
      .then(users => res.json(users))
      .catch(next);
});

app.get('/api/products', (req,res,next) => {
  Product.findAll()
         .then(products => res.json(products))
         .catch(next);
});

app.put('/api/products/:id', (req,res,next) => {
  Product.update({managerId: req.body.managerId},{where: {id: req.params.id*1}})
         .catch(next);
});

syncAndSeed()
    .then(() => {
      app.listen(port, ()=> console.log(`listening on port ${port}`))
    })
    .catch(e => console.log(e));
