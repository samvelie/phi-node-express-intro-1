var express = require('express'); //this I understand as linking this file to the express files
var app = express();  //do not understand what we are doing here - is express() an abitrary name or must it be this for express to work?
var bodyParser = require('body-parser'); //this I see as another link to connect to the body-parser files

app.use(express.static('public')); //this looks for static files

app.use(bodyParser.urlencoded({extended: true})); //this is some magic that makes the data work (how would this be done without this - why wouldn't this be a standard feature?)

var songList = [    //a standard array containing objects
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) { //this responds to get requests. the parameters must be conventions for the request and response that gets passed
  res.send(songList); //sending our variable
});

app.post('/newSong', function(req, res){ //I am mostly ok with what this is doing
  var newSong = req.body;   //would like to investigate this further
  if(newSong.artist !== "Justin Bieber"){
    songList.push(newSong);
    console.log(songList);
    res.sendStatus(200); //this is the success response
  } else {
    res.sendStatus(500); //this is the error response. I like that we still use standard if else logic gettin to here
  }
});

app.listen(3000); //tells our server to listen on port 3000
