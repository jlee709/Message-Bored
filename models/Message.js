//jshint esversion:6

module.exports = function(sequelize,DataTypes){
  const Messages = sequelize.define('messages', {
    body: DataTypes.STRING
  });
  Messages.associate = function(models){
    Messages.belongsTo(models.users);
    Messages.belongsTo(models.topics);
  };
  return Messages;
};