const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkConnection();
