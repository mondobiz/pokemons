// Require modules
const express = require('express');
const indexRouter = require('./routes/index');
const pokeDb = require('./poke-data/poke-db');

module.exports = router;

// Create the Express App
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');

// Mount middleware (app.use)

// Mount routes
app.get('/', function(req, res) {
    res.redirect('/home');
   });

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/pokemons', function(req, res) {
    res.render('pokemons/index', {
     pokemons: pokeDb.getAll()
    });
  });

app.use('/', indexRouter);

// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
