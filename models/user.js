const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;

// //   deleteItemFromCart(productId) {
// //     const updatedCartItems = this.cart.items.filter(item => {
// //       return item.productId.toString() !== productId.toString();
// //     });
// //     const db = getDb();
// //     return db
// //       .collection('users')
// //       .updateOne(
// //         { _id: new ObjectId(this._id) },
// //         { $set: { cart: { items: updatedCartItems } } }
// //       );
// //   }

// //   addOrder() {
// //     const db = getDb();
// //     return this.getCart()
// //       .then(products => {
// //         const order = {
// //           items: products,
// //           user: {
// //             _id: new ObjectId(this._id),
// //             name: this.name
// //           }
// //         };
// //         return db.collection('orders').insertOne(order);
// //       })
// //       .then(result => {
// //         this.cart = { items: [] };
// //         return db
// //           .collection('users')
// //           .updateOne(
// //             { _id: new ObjectId(this._id) },
// //             { $set: { cart: { items: [] } } }
// //           );
// //       });
// //   }

// //   getOrders() {
// //     const db = getDb();
// //     return db
// //       .collection('orders')
// //       .find({ 'user._id': new ObjectId(this._id) })
// //       .toArray();
// //   }

// //   static findById(userId) {
// //     const db = getDb();
// //     return db
// //       .collection('users')
// //       .findOne({ _id: new ObjectId(userId) })
// //       .then(user => {
// //         console.log(user);
// //         return user;
// //       })
// //       .catch(err => {
// //         console.log(err);
// //       });
// //   }
// // }

// // module.exports = User;
