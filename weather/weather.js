const request = require('request');

const key = require('../key-file');

const fetchWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temp: body.currently.temperature
        });
      } else {
        callback('Unable to fetch weather');
      }
    }
  );
};

module.exports = {
  fetchWeather
};
