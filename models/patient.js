const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
 name: {
     type: String,
     required: true
 },
 dateOfBirth: {
     type: Date,
     required: true
 },
 sex: {
     type: String,
     required: true
 },
 email: {
     type: String,
     required: true
 },

 licenseId: {
     type: String,
     required: true
 },
 contact: {
     type: String,
     required: true
 },

});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;