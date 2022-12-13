const User = require('../models/User');
const Event = require('../models/Event')

async function addEvent(name, noPart, maxPart, time, loc, desc,user,tags){
    await Event.create({
        name:name,
        number_of_participants:noPart,
        max_participants:maxPart,
        time_and_date:time,
        location:loc,
        description:desc,
        user_id:user.id,//pass actual user object here
        tags:tags
    })
}

async function addUser(username, email, password, zip_code, interest) {
    await User.create({
        username: username,
        email: email,
        password: password,
        zip_code: zip_code,
        interest: interest
     })
}    

exports.addEvent = addEvent;