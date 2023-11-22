var express = require('express');
var router = express.Router();
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages });
});

/* GET new message page. */
router.get('/new', function (req, res, next) {
  res.render('form');
});

/* GET new message page. */
router.post('/new', function (req, res, next) {
  const { text, user } = req.body;

  messages.push({ text, user, added: new Date() });

  res.redirect('/');
});

module.exports = router;
