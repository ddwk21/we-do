const router = require('express').Router();
const { User, Message, Event } = require('../models');
//import middleware
const withAuth = require('../utils/auth');

router.get('/', withAuth ,async (req,res) => {
  try {
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
<<<<<<< HEAD
      events,
      logged_in: req.session.logged_in,
=======
      users,
      logged_In: req.session.logged_In,
>>>>>>> edf51105022a3e756724eb46e5236d233a93889a
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

module.exports = router;
