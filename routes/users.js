const express = require('express');
const router = require('express-promise-router')();
const UserController = require('../controller/user');
const passport = require ('passport');

router.route('/index')
    .get(UserController.Index);

//Registration route
router.route('/register')
    .post(UserController.registerUser);

router.route('/authenticate')
    .post(UserController.authenticateUser);

router.route('/profile')
    .get(UserController.getUser);

router.route('/:userId')
    .get(UserController.getUser);

router.route('/:userId/messages')
    .get(UserController.getUserMessages)
    .post(UserController.newUserMessage);


module.exports = router;
