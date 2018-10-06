const Patient = require('../models/patient');
const config = require ('../config/database');
const Appointment = require('../models/appointment');
const Report = require('../models/report');

module.exports = {

    registerPatient: (req,res,next) => {
        const newPatient = new Patient({
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            sex: req.body.sex,
            email: req.body.email,
            licenseId: req.body.licenseId,
            contact: req.body.contact
        });
        newPatient.save();
        res.json({success : true});

    },

    newAppointment: (req,res,next) => {
        const newAppointment = new Appointment({
            dateOfAppointment: req.body.dateOfAppointment,
            patient: req.body.patient,
            title: req.body.title,
            status: req.body.status,
            comment: req.body.comment
        });

        newAppointment.save();
        res.json({success : true});
    },

    
    allPatients: async (req,res,next) => {
        const patient = await Patient.find({});
        res.json(patient);
    },

    allAppointments: async (req, res, next) => {
        const appointment = await Appointment.find({});
        res.json(appointment);
      },

    newReport: async (req,res) => {
        const newReport = new Report({
            docNote: req.body.docNote,
            medicineNote: req.body.medicineNote
        });
        newReport.save();
        res.json({success : true});
    },

    allReports: async (res) => {
        const reports = await Report.find({});
        res.json(reports); 
    }

};