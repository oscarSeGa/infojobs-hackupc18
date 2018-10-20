const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/auth/infojobs', passport.authenticate('oauth2'));

router.get('/auth/infojobs/callback', (req, res) => {
  console.log("RESPONSE INFOJOBS", res);
  res.redirect('https://infojobshackupc2018.herokuapp.com/error');
});

router.route('/test')
  .get(function (req, res) {
    //Success
    return res.status(200).json('GET DONE');
    /*
    ERROR
    return res.status(400).json(err);
    */
  })

  .post(function (req, res) {
    return res.status(200).json('POST done');
  })

  .delete(function (req, res) {
    return res.status(200).json('DELETE done');
  });

module.exports = router;
