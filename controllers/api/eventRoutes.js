const router = require('express').Router();
const { Event } = require('../../models');

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

module.exports = router;