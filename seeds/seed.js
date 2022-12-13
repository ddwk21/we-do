const sequelize = require('../config/connection');
const { User, Message, Event } = require('../models');

const{randFirstName, randEmail, randPassword, randZipCode} = require("@ngneat/falso")

const activities = ['golf', 'hiking', 'swimming', 'basketball', 'gaming']

const userData = require('./userData.json');
const messageData = require('./messageData.json')
const eventData = require('./eventData.json')

function userGen(){
  let gennedUsers = []

  for(let i = 0; i<100; i++){
    let user = {
      username: randFirstName(),
      email: randEmail(),
      password: randPassword(),
      zip_code: randZipCode(),
      interest: activities[Math.floor(Math.random()*activities.length)]

    }
    gennedUsers.push(user)
    
  }
  return gennedUsers;
}


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  let additionalUsers = userGen()
  console.log(additionalUsers)

  await User.bulkCreate([...
    userData,
    ...additionalUsers],
     
    {
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
