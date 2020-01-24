const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/netodb", { useNewUrlParser: true });

const app = express();
const bodyParser = require('body-parser');
const signUpRoutes = require('./routes/api/auth');
const signInRoutes = require('./routes/api/auth');
const verifyRoutes = require('./routes/api/auth');
const logOutRoutes = require('./routes/api/auth');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Book = require("./models/book.model");

app.get('/books', async (req, res) => {
   const books = await Book.find();
   res.send(books);
});

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

app.use('/api', signUpRoutes);
app.use('/api', signInRoutes);
app.use('/api', verifyRoutes);
app.use('/api', logOutRoutes)
app.listen(5000, () => {
   console.log('App listening on port 5000')
});