const express = require('express');
const path = require('path');
const morgan = require('morgan');

// Initialization
const app = express();
const dateFormat = require('dateformat');
const fs = require('fs');
const { ENGINE_METHOD_ALL } = require('constants');


// settings
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine' , 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/entries.routes'));

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
//  res.status(404).send('error');
});


app.listen(app.get('port'), () => {
  console.log('escuchando en http://localhost :', app.get('port'));
})

