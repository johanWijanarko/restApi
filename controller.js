'use strict';

const response = require('./res'); // panggil file rsponse
const connection = require('./koneksi'); // panngil file koneksi

exports.index = function(req, res){
    response.ok("apliksi berjalan ", res)
}