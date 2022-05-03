const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const { io } = require('../index');



const { Chat } = require('../models/Chat');
const { auth } = require('../middleware/auth');



io.on('connection', (socket) => {
  console.log('a user connected...');

  socket.on('disconnect', () => {
    console.log('user disconnected...');
  });
});

router.get('/getmessages', auth, (req, res) => {
  console.log("get messages function")
  Chat.find()
    .populate('sender')
    .exec((err, messages) => {
      console.log("messages", messages)
      if (err) return res.status(400).send(err);
      res.status(200).send(messages);
    });
});

router.post('/sendmessage', auth, (req, res) => {
  const message = new Chat(req.body);

  io.emit('message', req.body);

  message.save((err, doc) => {
    if (err) res.status(500).json(err);

    res.status(200).json(doc);
  });
});



module.exports = router;
