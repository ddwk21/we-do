const sequelize = require('../config/connection');
const { User, Message, Event } = require('../models');

const userData = require('./userData.json');
const messageData = require('./messageData.json')
const eventData = require('./eventData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });
  await Message.bulkCreate(messageData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
