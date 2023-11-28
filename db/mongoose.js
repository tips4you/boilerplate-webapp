const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const envFilePath = path.resolve(__dirname, "../.env");

// Load the environment variables from the .env file 
dotenv.config({ path: envFilePath });

const dbProtocol = process.env.DB_PROTOCOL;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// MongoDB connection URI
const dbConnectionString = `${dbProtocol}://${dbUsername}:${dbPassword}@${dbHost}/${dbName}`+"?retryWrites=true&w=majority"; 

mongoose
  .connect(dbConnectionString, {
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });