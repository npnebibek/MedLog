const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    
    dateOfAppointment: {
        type: Date,
        default: Date.now,
        required: true
    },
    title: {
        type: String,
    },
    
    patient: {
        type: String,
          
      },
   
    status: {
        type: String
    },
    comment: {
        type: String
    }



});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;