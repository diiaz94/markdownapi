const express = require('express');
const models = require('../models');
const crud = require('../crud');

module.exports = (app) => {

    var apiRoutes = express.Router();

    apiRoutes.get('/', function (req, res) {
        res.json({
            message: 'Welcome to our api'
        });
    });

    app.use('/v1/documents', crud(models.Documents));


    app.use('/v1', apiRoutes);
}   