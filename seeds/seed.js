const sequelize = require('../config/connection');
const { User, Message, Event } = require('../models');

// const loremIpsum = require("lorem-ipsum").loremIpsum;;
// // const LoremIpsum = require("lorem-ipsum").LoremIpsum;

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4
//   }
// });

const{randFirstName, randEmail, randPassword, randZipCode, randCity, randSoonDate} = require("@ngneat/falso")

const activities = ['Golf', 'Hiking', 'Swimming', 'Basketball', 'Gaming']

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

function eventGen(){
  let gennedEvents = []
  

  for(let i = 0; i<100; i++){
    let participants = Math.floor(Math.random()*10)
    let activity = activities[Math.floor(Math.random()*activities.length)]
    let currentParticipants = participants-1
    let event = {
      name: activity,
      number_of_participants: currentParticipants,
      max_participants: participants,
      time_and_date: `12:00 ${randSoonDate()}`,
      location: randCity(),
      description: `Going to do some ${activity} Need ${participants} people and have ${currentParticipants} `,
      user_id: Math.floor(Math.random()*100),
      tags: activity
    }
    gennedEvents.push(event)
    
  }
  return gennedEvents;
}


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  let additionalUsers = userGen()
  let additionalEvents = eventGen()

  await User.bulkCreate([...userData,...additionalUsers],
     
    {
    individualHooks: true,
    returning: true,
  });
  await Event.bulkCreate([...eventData,...additionalEvents], {
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
