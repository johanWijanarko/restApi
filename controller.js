'use strict';

const response = require('./res'); // panggil file rsponse
const connection = require('./koneksi'); // panngil file koneksi

exports.index = function(req, res){
    response.ok("apliksi berjalan ",res)
}

// getAll data 
exports.getAlldata = function(req, res){
    connection.query('SELECT * from tb_kriteria where del_st = 1', function(error, rows, fields){
        if(error){
            connection.log(err)
        }else {
            response.ok(rows, res)
        }
    })
}