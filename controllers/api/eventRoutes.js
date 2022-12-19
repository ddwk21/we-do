const axios = require('axios')
const router = require('express').Router();
const { Event } = require('../../models');
const { findByPk } = require('../../models/User');

router.post( '/', async(req, res) => {
    const {nameInput, noPart, maxPart, time, loc, desc} = req.body
    try {
        await Event.create({
            name:name,
            number_of_participants:noPart,
            max_participants:maxPart,
            time_and_date:time,
            location:loc,
            description:desc,
            user_id:user.id,//pass actual user object here
            tags:tags
        })}

    catch (err) {
        res.status(400).json(err);
      }
    })

router.put('/join/:eventId',async(req,res)=>{
    //Query Event by event ID and pull participants array
    console.log(req.body)
   try{ 
    const event = await Event.findByPk(req.params.eventId)

    const geocodeResponse = await axios(req.body.geocodeUrl)    

    console.log(JSON.stringify(geocodeResponse.data,null, 2))
    if(event.number_of_participants<event.max_participants)
        {event.participants.push(req.session.user_id);
        event.number_of_participants+=1;

        await event.save()
        console.log('Success!')
        res.status(200).json(geocodeResponse.data)
    }else{
        res.status(409).json({message:'Event full!'})
    }

    //push req session user ID into participants
    //resave given event in database
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;