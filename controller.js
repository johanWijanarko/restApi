'use strict';
// const uuidV1 = require('uuid');
const crypto = require("crypto");

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

// getdata by id

exports.getDataByid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * from tb_kriteria where del_st = 1 and id_kriteria = ?',[id], function(error, rows, fields){
        if(error){
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}

exports.sendData = function(req, res){
    let nama_kriteria = req.body.nama_kriteria;
    let bobot = req.body.bobot;
    let id = crypto.randomBytes(16).toString("hex");
    const del_st = 1;
    // console.log(id);

    connection.query('insert into tb_kriteria (id_kriteria, kriteria, bobot, del_st) values(?,?,?,?)', [id, nama_kriteria, bobot, del_st],
       function(error, rows, fields){
        if(error){
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}