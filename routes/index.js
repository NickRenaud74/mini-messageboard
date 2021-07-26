const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message board', messages: messages });
});

/* GET new message form */
router.get('/new', (req, res, next) => {
  res.render('form')
});

/* POST new message */
router.post('/new', (req, res) => {
  const newMessage = req.body.messageText
  const username = req.body.username

  messages.unshift({
    text: newMessage,
    user: username,
    added: new Date().toLocaleString()
  })

  res.redirect('/');
})

module.exports = router;
