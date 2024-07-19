const request = require('request');

function geocode(address, callback) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&appid=a72c90fbaff2cccceb8903b28bf3cb95`;
  
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (body.cod === 401) {
        callback(new Error(body.message), undefined);
      } else {
        callback(undefined, {
          latitude: body[0].lat,
          longitude: body[0].lon,
          location: body[0].name,
        });
      }
    });
  }

  module.exports = geocode;