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


let nodeArgs = process.argv;
console.log(process.argv);
let commandLinearg = nodeArgs[2];

if (commandLinearg === 'my-tweets') {
  tweetOutput = twentyTweets()
  // console.log(tweetOutput);
}
else if (commandLinearg === 'spotify-this-song') {
  spotifyOutput = spotSong()
  console.log(spotifyOutput);
}
else if (commandLinearg === 'movie-this') {
  movieOutput = movieThis()
  console.log(movieOutput);
}
else if (commandLinearg === 'do-what-it-says') {
  otherOutput = doIt()
  console.log(otherOutput);
}


//Spotify

// function spotSong (songName) {
//   spotify.search ({
//     type: 'track',
//     query: songName
//     }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     console.log(data);
//   })
// }

function twentyTweets() {
//Twitter
//wrap around a function (call using Node)
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } if (error) {
    return console.log('Error occurred');
  }
})


// OMDB
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
  if (!error && response.statusCode === 200) {
  console.log(queryUrl);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); //Print the HTML for the Google homepage.
  console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  console.log("Release Year: " + JSON.parse(body).Year);
  }
    });

  }
