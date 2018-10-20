const express = require('express');
const fs = require('fs');
const path = require('path');
const myParser = require("body-parser");
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

  router.route('/recomendations')
  .get(function (req, res) {
    var ofertas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/ofertas.json'), 'utf8'));
    
    return res.status(200).json(ofertas)
  });

  router.route('/cv')
  .post(function (req, res) {
    console.log(req.body);
    var newuser  = myParser.json(req.body)
    
    //var newUser  = JSON.parse(req.body)
    console.log(newuser);

    
    fs.writeFileSync(path.resolve(__dirname,'../../src/assets/user.json'),'utf8');
    return res.status(200).json(newuser);
  })


  router.route('/countries')
  .get(function (req, res) {
    var countries = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../src/assets/countries.json'), 'utf8'));
    
    return res.status(200).json(countries)
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
