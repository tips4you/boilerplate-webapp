const express = require("express");
require("./db/mongoose");
const DataObject = require("./models/doschema");

// create a new instance of an Express.js router
const router = express.Router();

// /api/pset-database
router.get('/api/pset-database', async (req, res) => {
  try {
    const dataObjects = await DataObjects.find(); 
    res.json(dataObjects);
    //const dataObjects = await DataObject.find({}); 
    console.log(dataObjects)
    //res.send(dataObjects);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;