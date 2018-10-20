const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

  router.route('/recomendations')
  .get(function (req, res) {

    var recomendaciones;

    var user = req.query.userid
    console.log(user);
    var ofertas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/ofertas' + user + '.json'), 'utf8'));
    
    
    ofertas.offers.map(function(oferta) {
      
      });
    
    return res.status(200).json(ofertas)
  });

  router.route('/countries')
  .get(function (req, res) {
    var countries = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../src/assets/countries.json'), 'utf8'));
    
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
