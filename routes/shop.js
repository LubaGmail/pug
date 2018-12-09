const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');   // exported in shop.js

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;

  // passed from admin.js
  //    products.push({ title: req.body.title });
  // passing  to the shop.pug template
  //
  res.render(
      'shop',
      { prods: products, 
        pageTitle: 'Shop', 
        path: '/'
      }
  );
});

module.exports = router;
