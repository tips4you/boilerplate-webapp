const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataObjectSchema = new Schema({
  _id: Schema.Types.ObjectId,
  info: {
    date: {
      submitted: Date,
      processed: Date,
      created: Date
    },
    status: String,
    private: Boolean,
    canonical: Boolean,
    numDownload: Number,
    createdBy: String,
    email: String,
    filteredSensitivity: Boolean,
    commitID: String
  },
  dataObjType: String,
  datasetType: String,
  name: String,
  dataset: Schema.Types.ObjectId,
  repositories: [{
    _id: Schema.Types.ObjectId,
    version: String,
    doi: String,
    downloadLink: String,
    bioComputeObject: {
      doi: String,
      downloadLink: String
    }
  }],
  availableDatatypes: [{
    _id: Schema.Types.ObjectId,
    name: String,
    genomeType: String,
    details: Schema.Types.Mixed
  }],
  tools: Schema.Types.Mixed,
  references: Schema.Types.Mixed,
  genome: String,
  __v: Number
});

const DataObject = mongoose.model('DataObject', dataObjectSchema);
module.exports = DataObject;