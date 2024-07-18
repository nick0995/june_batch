const request = require('request');

const address = process.argv[2];

const url = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&appid=a72c90fbaff2cccceb8903b28bf3cb95`
request({url, json: true}, (error, { body })=>{
    if(error) {
        console.log(error);
        return;
    }
    console.log(body[0].lat);
    console.log(body[0].lon);
});