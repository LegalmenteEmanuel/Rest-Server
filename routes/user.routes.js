const express = require('express');
const { usuariosGET, usuariosPOST, usuriosPUT, usuariosDELETE, usuariosPATCH } = require('../controllers/user.controller');

const router = express.Router();

router.get('/', usuariosGET);

router.put('/:id', usuriosPUT);

router.post('/', usuariosPOST);

router.delete('/', usuariosDELETE);

router.patch('/', usuariosPATCH);

module.exports = router;