require("dotenv").config();

//cmdArgs
//parameters

let Spotify = require('node-spotify-api');
let Twitter = require('twitter');
const request = require('request');
let movieName = "";
let fs = require('fs')
// let TwitterKeys = keys.twitter;
let keys = require('./keys.js')
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);
let params = {
  mrass2018: 'nodejs',
  count: 20
};
let song = process.argv[3];
let nodeArgs = process.argv;
console.log(process.argv);
let commandLinearg = nodeArgs[2];


//Spotify
function spotSong (song) {
  spotify.search ({ type: 'track', query: song, limit: 5}, function (err, data) {

    if (!error) {
      let songInfo = data.tracks.items[0];
      console.log(data)
    }
    else if (error){
    return console.log('Error occurred: ');
    }
  })
}
// .tracks.items[0]

//Twitter
function twentyTweets() {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++){
      let a = tweets[i].user.created_at + '\n' + tweets[i].text;
      console.log(a);
    }
  } if (error) {
    return console.log('Error occurred');
  }
})


// OMDB
function movieThis(){
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}

let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=34c569de&";
//request 
//used inside OMDB call (OMDB doesn't have this built in, like the others)
//replace google with OMDB URL, build out the same way that an AJAX request is 
request(queryUrl, function (error, response, body) {
  if (!error && response.statusCode === 200 && commandLinearg === 'movie-this' + movieName) {
  console.log(queryUrl);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); //Print the HTML for the Google homepage.
  console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  console.log("Release Year: " + JSON.parse(body).Year);
  }
    });

  }
}
if (commandLinearg === 'my-tweets') {
  twentyTweets()
  // console.log(tweetOutput);
}
else if (commandLinearg === 'spotify-this-song' + song) {
 return spotSong()
  // console.log(spotifyOutput);
}
else if (commandLinearg === 'do-what-it-says') {
   return doIt()
  
}