let CTS = require('./constants'),
    fs = require('fs'),
    _ = require('underscore'),
    moment = require('moment'),
    jwt = require('jsonwebtoken'),
    config = require('../../config/main').get(process.env.NODE_ENV)


exports.okResponse = (res, httpCode, data) => {
    return res.status(httpCode).json(
        { error: false, message: "", data }
    )
}
exports.errorResponse = (res, data) => {

    let { name, extra } = data;
    let error = CTS.ERRORS[name] || CTS.DEFAULT_ERROR;

    return res.status(error.httpCode).json({
        error: true,
        message: error.description,
        data: {
            name,
            code: error.code,
            description: data.message || error.description,
            extra: extra
        }
    })
}


exports.getObjectIdMongo = () => {
    var timestamp = (ne = new Date().getTime() / 1000 | 0).toString(16);

    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(
        /[x]/g,
        function () {
            return (Math.random() * 16 | 0).toString(16);
        }
    ).toLowerCase();
}