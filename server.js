const mongoose = require('mongoose');

const uri = 'mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orcestra-new?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))
