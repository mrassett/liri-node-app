require("dotenv").config();

//cmdArgs
//parameters

let Spotify = require('node-spotify-api');
let Twitter = require('twitter');
const request = require('request');
let fs = require('fs')
// let TwitterKeys = keys.twitter;
let keys = require('./keys.js')
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
let params = {
  mrass2018: 'nodejs'
};


//Spotify

function getSongs (songName) {
  spotify.search ({
    type: 'track',
    query: songName
    }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data);
  })
}

//Twitter
//wrap around a function (call using Node)
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


//request 
//used inside OMDB call (OMDB doesn't have this built in, like the others)
//replace google with OMDB URL, build out the same way that an AJAX request is 
request('http://www.omdbapi.com/?apikey=34c569de&', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); //Print the HTML for the Google homepage.
  console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
});

