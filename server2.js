const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orchestra-new?retryWrites=true&w=majority';

// Set up MongoDB connection
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

// Event listeners to handle connection events
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Perform any testing logic or further actions here

  // Close the connection after testing
  mongoose.connection.close();
});

// Event listener to handle when the connection is closed
db.on('close', () => {
  console.log('MongoDB connection closed');
});
