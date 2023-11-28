const express = require("express");
const cors = require('cors');
const app = express();
const axios = require('axios');

const dotenv = require("dotenv");
const path = require("path");
const envFilePath = path.resolve(__dirname, ".env");
dotenv.config({ path: envFilePath });
const api_Host = process.env.API_HOST;
// ORCESTRA API
const orcestra_api = `${api_Host}/api/psets/canonical`; 

// require the router module
const router = require("./router");

// use the router in your app
//app.use(express.json(), router);
// Enable CORS
app.use(cors(),router);

// Fetch data from ORCESTRA API
app.get('/api/psets', async (req, res) => {
    try {
        const response = await axios.get(orcestra_api);
        res.send(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching data from ORCESTRA API' });
      }
});

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});