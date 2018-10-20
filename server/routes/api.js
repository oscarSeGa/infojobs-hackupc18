const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/auth/infojobs', passport.authenticate('oauth2'));

router.get('/auth/infojobs/callback',
  passport.authenticate('oauth2', { failureRedirect: '/' }),
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
