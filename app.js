const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/adminBooks');
const shopRoutes = require('./routes/dispBooks');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminData.routes);
app.use('/admin', adminData);
app.use('/', shopRoutes);


app.get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('index', {title: 'Welcome to my Book Store repo', path: '/', pageTitle: 'Book Store' });
})

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
   
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
