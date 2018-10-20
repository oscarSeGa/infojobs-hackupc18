const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/auth/example',
  passport.authenticate('oauth2'));

router.get('/auth/example/callback',
  passport.authenticate('oauth2', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
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
