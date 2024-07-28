const sequelize = require('../config/database');

const syncDatabase = async () => {
    try {
      await sequelize.sync({ alter  : true });
      console.log("Database synced!");
    } catch (error) {
      console.error("Error syncing database:", error);
    }
  };
  

module.exports = syncDatabase;      