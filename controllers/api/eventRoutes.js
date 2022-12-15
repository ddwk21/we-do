const router = require('express').Router();
const { Event } = require('../../models');

router.post( '/', async(req, res) => {
    const {nameInput, noPart, maxPart, time, loc, desc} = req.body
    try {
        await Event.create({
            name:nameInput,
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

module.exports = router;