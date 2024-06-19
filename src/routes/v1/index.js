const express = require('express');

const UserController = require('../../controllers/user-controller');

const router = express.Router();

const {authRequestValidator} = require('../../middlewares/index');

router.post(
    '/signup',
    authRequestValidator.validateUserAuth,
    UserController.create
);

router.post(
    '/signin', 
    authRequestValidator.validateUserAuth,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
)

router.get(
    '/isAdmin',
    authRequestValidator.validateIsAdminRequest,
    UserController.isAdmin
);


module.exports = router;


