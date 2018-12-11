var request = require('request');

var url = "https://api.themoviedb.org/3/search/movie?api_key=&query=Jack+Reacher"
var APIKey = d625af18b14f003c9fc09de5c2f93de8
var searchTMDB = function(query, callback) {
  var query = "";//input.split(' ').join('+')
  var queryString = url + APIKey + "&query=" + query
  request.get(queryString, (err, res, body) => {
      if (err) {
        throw err; 
      } else {
        return body;
      }
    })
    .then((data) => {
      var id = data.id
      var queryString = 'https: //api.themoviedb.org/3/movie/' + id + '?api_key=' + APIKey + "'"
      request.get(queryString, (err, response, body) => {
        if(err) {
          throw err;
        } else {
          callback(body)
        }
      })
    })
}

