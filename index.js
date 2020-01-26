const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/netodb", { useNewUrlParser: true });

const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/api/book');
const signUpRoutes = require('./routes/api/auth');
const signInRoutes = require('./routes/api/auth');
const verifyRoutes = require('./routes/api/auth');
const signOutRoutes = require('./routes/api/auth');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const Book = require("./models/book.model");

// app.get('/books', async (req, res) => {
   
// });

// app.post('/account', function(req, res) {
//    console.log(req.body);
//    debugger;
//    const user = req.body.username;
//    if(user === 'abc') {
//       res.redirect('/')
//    } else {
//       res.redirect('/account?error=denied');//res.send({ error: 'something blew up'});
//    }
// });

// app.post('/create', async (req, res) => {
//    console.log(req.body);
//    const user = await User.create(req.body);
//    res.json(user);
// });
app.use('/api', indexRoutes);
app.use('/api', signUpRoutes);
app.use('/api', signInRoutes);
app.use('/api', verifyRoutes);
app.use('/api', signOutRoutes);
app.listen(5000, () => {
   console.log('App listening on port 5000')
});