// gunakan strict untuk devlop sbg pengecekan variable 
'use strict';

//mendskripsikan ketika respon ok
exports.ok = function(values, res){
    const data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}