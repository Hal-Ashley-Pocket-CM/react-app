module.exports = (sequelize, DataTypes) => {
  var CaseManager = sequelize.define('CaseManager', {
    cmId: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.String
    // email: {
    //   type: DataTypes.String,
    //   required: true,
    //   unique: true
    // },
    // password: {
    //   type: DataTypes.String,
    //   required: true,
    //   unique: true
    // }
  });

  CaseManager.associate = function(models) {
    models.CaseManager.hasMany(models.Client);
  };
  return CaseManager;
};
