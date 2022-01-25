//server.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios").default;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('/build'));

app.get('/', (req, res) => res.redirect('/api'));
//http://dataservice.accuweather.com/locations/v1/cities/ipaddress&apikey=%7Byour%20key%7D
// Express serve up index.html file if it doesn't recognize route

app.get('/api', async (req, res) => {
  console.log('api called!')
  const baseUrl = 'https://setfive-public.s3.amazonaws.com/api.json'
  const url = `${baseUrl}&key=${process.env.API_KEY}`
 axios.get(baseUrl)
    .then((response) => {
      console.log("server side", Object.values(response.data.items));

      res.send({
        cash: Object.values(response.data.items)
      })
    })
    .catch(error => console.log(error))
});


// Listen to whatever port above.
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
``