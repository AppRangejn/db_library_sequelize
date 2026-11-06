const db = require('./src/db/models');

const dbCheck = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection with DB has been successful.');
  } catch (error) {
    console.log('Cannot connect to DB: ', error.message);
  }
};

dbCheck();

const dropAuthorTable = async () => {
  try {
    await db.Author.drop();
    console.log(`Table ${db.Author.tableName} has been dropped`);
  } catch (error) {
    console.log('Cannot drop table');
  }
};

dropAuthorTable();

const syncAuthorTable = async () => {
  try {
    await db.Author.sync();
    console.log(`Table ${db.Author.tableName} has been created`);
  } catch (error) {
    console.log('Cannot create table');
  }
};

syncAuthorTable();
