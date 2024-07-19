const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a72c90fbaff2cccceb8903b28bf3cb95`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.cod === 401) {
      callback(new Error(body.message), undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.main.temp +
          " dgrees out there. But it feels like " +
          body.main.feels_like
      );
    }
  });
};

module.exports = forecast;