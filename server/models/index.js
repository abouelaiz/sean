var config = require('./../config/local.env.js');
console.log(config);
var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    sequelize = new Sequelize(config.MYSQL_DB, config.MYSQL_USER, config.MYSQL_PASSWORD, {
        logging: false,
        host : config.MYSQL_URI,
        port: config.MYSQL_PORT
    }),
    db = {};


sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
    .spread(function() {
        return sequelize.sync({
            force: false
        });
    })
    .then(function() {
        return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    })
    .then(function() {
        console.log('Database synchronised.');
    }, function(err) {
        console.log(err);
    });

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.indexOf(".js") !== -1)
    }).forEach(function(file) {
        console.log(file);
        var model = sequelize.import(path.join(__dirname, file));
        console.log(model.name);
        db[model.name] = model;

    });

Object.keys(db).forEach(function(modelName) {
    console.log(modelName);
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);
