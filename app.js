var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

var songList = [
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) {
  res.send(songList);
});

app.post('/newSong', function(req, res){
  var newSong = req.body;
  if(newSong.artist !== "Justin Bieber"){
    songList.push(newSong);
    console.log(songList);
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.listen(3000);
