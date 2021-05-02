const path = require('path');

const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./adminBooks');

const router = express.Router();

router.get('/book_display', (req, res, next) => {
  // const products = adminData.products;
  res.render('book_display', {
    // prods: products,
    pageTitle: 'Display Book',
    path: '/',
    // hasProducts: products.length > 0,
    title: req.body.title, 
    summary: req.body.summary,
    // activeShop: true,
    // productCSS: true
  });
});

router.post('/book_display', (req, res, next) => {
  // const products = adminData.products;
  res.render('book_display', {
    // prods: products,
    pageTitle: 'Display Book',
    path: '/',
    // hasProducts: products.length > 0,
    title: req.body.title, 
    summary: req.body.summary,
    // activeShop: true,
    // productCSS: true
  });
});


module.exports = router;
