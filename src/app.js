const geocode = require('../utils/gecode');
const forecast = require('../utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecasteData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log(forecasteData);
    });
  });
}