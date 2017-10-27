//jshint esversion:6

module.exports = function(sequelize,DataTypes){
  const Topics = sequelize.define('topics', {
    title: DataTypes.STRING
  });
  
  Topics.associate = function(models){
    Topics.hasMany(models.messages);
    Topics.belongsTo(models.users);
  };
  return Topics;
};