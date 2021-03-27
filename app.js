const express = require('express');
const mongoose = require('mongoose');
//const authRoutes = require('./routes/authRoutes');
const locationRoutes = require('./routes/locationRoutes');
const cookieParser = require('cookie-parser');
//const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
//app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
//app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://zahid:zahid1234@cluster0.gqk90.mongodb.net/track?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
//app.get('*', checkUser);
//app.get('/', (req, res) => res.render('home'));

//app.get('/location', requireAuth, (req, res) => res.render('location'));
//app.use(authRoutes);
app.use(locationRoutes);