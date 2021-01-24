'use strict';

// pangil modul yang ada di controller
module.exports = function(app) {
    const jsonData = require('./controller');

    app.route('/')
        .get(jsonData.index);
}