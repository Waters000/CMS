const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds.js');
const seedComments = require('./comment-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('-----Added Users---------');

  await seedPosts();
  console.log('----Added Posts----------');

   await seedComments();
   console.log('----Added Comments----------');



  process.exit(0);
};

seedAll();
