const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    patient: [{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    date: {
        type: Date,
        default: Date.now
    },
    docNote: {
        type: String,
        required: true
    },
    medicineNote: {
        type: String,
        required: true
    },



});

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;