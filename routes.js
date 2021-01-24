'use strict';

// pangil modul yang ada di controller
module.exports = function(app) {
    const jsonData = require('./controller');

    app.route('/')
        .get(jsonData.index);

    app.route('/getData')
        .get(jsonData.getAlldata);
    
    app.route('/getDataByid/:id')
        .get(jsonData.getDataByid);
    
    app.route('/sendData')
        .post(jsonData.sendData);
    app.route('/updateData')
        .put(jsonData.updateData)
}