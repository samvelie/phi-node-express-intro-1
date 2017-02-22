$(document).ready(function(){
  console.log('jquery was correctly sourced!');
  getAllSongs(); //this is the ajax get request functionized
  function getAllSongs() {
    $.ajax({
      type: 'GET',    //does this have to be capitalized?
      url: '/songs',  //this is telling the  server what channel it is looking on - is that a good way to put it?
      success: function(response) {   //response is a naming convention I am guessing?
        console.log('response', response);
      },
      error: function(error) {        //did we make an error response possible on the get request?
        console.log('error', error);
      }
    });
  }

  $('#addSongButton').on('click', function(){ //all this stuff through line 24 is solid JS and jQuery for me
    var newSongTitle = $('#title').val();
    var newSongArtist = $('#artist').val();
    var newSongObject = {
      title: newSongTitle,
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({              //this actually allows us to push data onto the server - this makes me excited!
      type: 'POST',
      url: '/newSong',    //I am unsure why we use another url here - why not the same as the get request? Also why does it not seem like a new page gets made with this[localhost:3000/newSong]?
      data: newSongObject,  //a bit of magic here for me
      success: function(response) { //this function is familiar from the weekend
        console.log('response', response);
        getAllSongs();
      },
      error: function(error) {    //this is the function that happens upon error response to the ajax post "request" - is request the right word? 
        console.log('error', error);
      }
    });
  });

});
