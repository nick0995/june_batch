console.log('This is my static js folder/file');

fetch("http://localhost:3000/weather?address=chandigarh").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});