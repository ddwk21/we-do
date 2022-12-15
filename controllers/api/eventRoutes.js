const router = require('express').Router();
const { Event } = require('../../models');
const { findByPk } = require('../../models/User');

router.post( '/', async(req, res) => {
    // const {nameInput, noPart, maxPart, time, loc, desc, tags} = req.body
    try {
        console.log(req.body)
        const newEvent = await Event.create({
            ...req.body,
            user_id:req.session.user_id,

 
        })
        res.json(newEvent)

    }catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    })

router.put('/join/:eventId',async(req,res)=>{
    //Query Event by event ID and pull participants array
    
   try{ 
    const event = await Event.findByPk(req.params.eventId)
    
    if(event.number_of_participants<event.max_participants)
        {event.participants.push(req.session.user_id);
        event.number_of_participants+=1;

        await event.save()
        console.log('Success!')
        res.status(200)
    }else{
        res.status(409).json({message:'No tank you'})
    }

    //push req session user ID into participants
    //resave given event in database
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;