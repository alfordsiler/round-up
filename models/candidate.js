var mongoose = require('mongoose');

var candidateSchema = new mongoose.Schema({
  fistName: { type: String, required: true },
  lastName: { type: String, required: true }
});

var Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;