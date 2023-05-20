const { response, request } = require('express')


usuariosGET = (req=request, res=response) => {
    const query = req.query;
    res.json({
      msg: 'GET API - Controlador',
      query
    });
  }


usuariosPOST = (req, res) => {
    body = req.body;
    res.status(201).json({
      msg: 'POST API - Controlador',
      body
    });
  }

usuriosPUT = (req, res) => {
    id = req.params;
    res.json({
      msg: 'PUT API - Controlador',
      id
    });
  }

usuariosDELETE = (req, res) => {
    res.json({
      msg: 'DELETE API - Controlador'
    });
  }

usuariosPATCH = (req, res) => {
    res.json({
      msg: 'PATCH API - Controlador'
    });
  }

  module.exports = {
    usuariosGET,
    usuariosPOST,
    usuriosPUT,
    usuariosDELETE,
    usuariosPATCH
  }