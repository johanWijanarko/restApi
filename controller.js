'use strict';

const response = require('./res'); // panggil file rsponse
const connection = require('./koneksi'); // panngil file koneksi

exports.index = function(res, req){
    response.ok("apliksi berjalan ", res)
}