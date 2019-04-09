const User = require('./User');
const Product = require('./Product');
const db = require('./db');

const syncAndSeed = () => {
  return db.sync({force: true})
    .then(() => {
      Promise.all([
        User.create({name: 'Moe'}),
        User.create({name: 'Larry'}),
        User.create({name: 'Curly'})
      ])
    })
    .then(() => {
      Promise.all([
        Product.create({name: 'Bar'}),
        Product.create({name: 'Bazz'}),
        Product.create({name: 'Foo'}),
      ])
    })
    .catch(e => console.log(e));
}

Product.belongsTo(User, {as: 'manager'});

module.exports = {
  User,
  Product,
  db,
  syncAndSeed
}
