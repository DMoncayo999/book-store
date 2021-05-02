const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add_book', (req, res, next) => {
  res.render('add_book', {
    pageTitle: 'Add Book Info',
    path: '/admin/add_book',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add_book', (req, res, next) => {
  products.push({ title: req.body.title, summary: req.body.summary });
  // res.redirect('/admin/book_display');
});

// exports.routes = router;
module.exports = router;
exports.products = products;

