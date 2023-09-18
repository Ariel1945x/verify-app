
const { getAll, create, getOne, remove, update, verifyCode, login, getMe } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT')

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/verify/:code')
    .get(verifyCode)

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(verifyJWT, getMe)

routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerUser;