module.exports = function(sequelize, DataTypes) {
    var sample = sequelize.define('sample', {
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {

            }
        }
    });
    sample.sync({
        force: false
    });
    return sample;
};
