const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path"); 
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

app.use(express.json())



dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to mongodb")).catch(err => console.log(err));


const server = http.createServer(app);
const io = socketio(server);

module.exports = { io };

const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/users', require('./routes/users'));
app.use('/api/chat', require('./routes/chat'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res, next) {
    if (req.url.includes('/api/')) return next();
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

server.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});