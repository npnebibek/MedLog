
const router = require('express-promise-router')();
const UserController = require('../controller/user');
const PatientController =require('../controller/patient');
const passport = require ('passport');

router.route('/index')
   .get(UserController.Index);

router.route('/users')
   .get(UserController.Users);

router.route('/allAppointments')
    .get(PatientController.allAppointments);

router.route('/allPatients')
    .get(PatientController.allPatients);

//Registration route
router.route('/register')
    .post(UserController.registerUser);

router.route('/authenticate')
    .post(UserController.authenticateUser);

router.route('/profile')
    .get(passport.authenticate('jwt', { session: false }),UserController.getProfile);

router.route('/:userId')
    .get(UserController.getUser)
    .delete(UserController.deleteUser);

router.route('/:userId/messages')
    .get(UserController.getUserMessages)
    .post(UserController.newUserMessage);

router.route('/registerPatient')
    .post(PatientController.registerPatient);

router.route('/newAppointment')
    .post(PatientController.newAppointment);

router.route('/newReport')
    .post(PatientController.newReport);

router.route('/allReports')
    .get(PatientController.allReports);


module.exports = router;
