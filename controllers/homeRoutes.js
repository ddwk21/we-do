const router = require('express').Router();
const { User, Message, Event } = require('../models');
//import middleware
const withAuth = require('../utils/auth');

router.get('/', withAuth ,async (req,res) => {
  try {
    // get req session user id
    // query user.findbypk
    const dbeventData = await Event.findAll({
      include: [
        {
          model: Message,
          attributes: [
            'id',
            'sender_id',
            'event_id',
            'time',
            'content'
            
          ],
        },
      ],
    });

    console.log(dbeventData)

    const events = dbeventData.map((event) => 
    event.get({ plain: true })
    );

    res.render('homepage', {
      events,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', async (req,res, next) =>{
  try {


    res.render('signup')
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;
