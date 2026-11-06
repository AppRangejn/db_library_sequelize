const db = require('./src/db/models');

const resetAuthorTable = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection with DB has been successful.');

    await db.Author.drop();
    console.log(`Table ${db.Author.tableName} has been dropped`);

    await db.Author.sync();
    console.log(`Table ${db.Author.tableName} has been created`);
  } catch (error) {
    console.error('Database operation failed:', error.message);
  }
};

resetAuthorTable();
